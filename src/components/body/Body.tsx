import React, { useEffect, useState } from 'react';
import { GetAllCompanies } from '../../services/companyReq/getAllCompanies';
import { ICompany } from '../../interfaces/ICompany';
import { FilterComponent } from './../filter/Filter';
import { Modal } from './../modal/Modal';
import { PatchCompanyById } from '../../services/companyReq/patchCompanyById';
import { DeleteCompanyById } from '../../services/companyReq/deleteCompanyById';

export function Body() {
    const [companies, setCompanies] = useState<ICompany[]>([]);
    const [expandedCompany, setExpandedCompany] = useState<string>('');
    const [filteredCompanies, setFilteredCompanies] = useState<ICompany[]>([]);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedCompany, setSelectedCompany] = useState<ICompany | null>(null);

    useEffect(() => {
        fetchCompanies();
    }, []);

    async function fetchCompanies() {
        try {
            const response = await GetAllCompanies();
            const sortedData = response.data.sort((a: { corporateName: string }, b: { businessName: string }) =>
                a.corporateName.localeCompare(b.businessName)
            );
            setCompanies(sortedData);
            setFilteredCompanies(sortedData);
        } catch (error) {
            console.error('Error getting companies', error);
        }
    }

    function handleExpandCompany(companyId: string) {
        setExpandedCompany((prevCompanyId) => (prevCompanyId === companyId ? '' : companyId));
    }

    function handleFilter({ status, dataInicial, dataFinal }: { status: string; dataInicial?: string; dataFinal?: string }) {
        let filteredData = companies;

        if (status !== 'todos') {
            filteredData = filteredData.filter((company) => company.status === status);
        }

        if (dataInicial && dataFinal) {
            filteredData = filteredData.filter((company) => {
                const inclusionDate = company.inclusionDate ? new Date(company.inclusionDate) : null;
                const startDate = dataInicial ? new Date(dataInicial) : null;
                const endDate = dataFinal ? new Date(dataFinal) : null;

                if (inclusionDate && startDate && endDate) {
                    const inclusionDateUTC = new Date(inclusionDate.toISOString().slice(0, 10));

                    return inclusionDateUTC >= startDate && inclusionDateUTC <= endDate;
                }

                return false;
            });
        }

        setFilteredCompanies(filteredData);
    }

    function handleOpenModal(company: ICompany) {
        setSelectedCompany(company);
        setIsModalOpen(true);
    }

    function handleCloseModal() {
        setSelectedCompany(null);
        setIsModalOpen(false);
    }

    async function handleUpdateCompany(updatedCompany: ICompany) {
        try {
            await PatchCompanyById(updatedCompany.id, updatedCompany);

            const updatedCompanies = companies.map((company) => {
                if (company.id === updatedCompany.id) {
                    return updatedCompany;
                }
                return company;
            });

            setCompanies(updatedCompanies);
            handleCloseModal();
        } catch (error) {
            console.error('Error updating company:', error);
        }
    }

    async function handleDeleteCompany(companyId: string) {
        const confirmDelete = window.confirm('Tem certeza que deseja excluir esta empresa?');

        if (confirmDelete) {
            try {
                await DeleteCompanyById(companyId);

                const updatedCompanies = companies.filter((company) => company.id !== companyId);

                setCompanies(updatedCompanies);
            } catch (error) {
                console.error('Error deleting company:', error);
            }
        }
    }

    return (
        <div>
            <FilterComponent onFilter={handleFilter} />

            <div>
                {filteredCompanies.map((company) => (
                    <div key={company.id}>
                        <div onClick={() => handleExpandCompany(company.id)}>
                            <h5>{company.corporateName}</h5>
                            {expandedCompany === company.id ? (
                                <div>
                                    <p>Codigo: {company.code}</p>
                                    <p>CNPJ: {company.cnpj}</p>
                                    <p>Nome Fantasia: {company.fantasyName}</p>
                                    <p>Responsável: {company.contactPerson}</p>
                                    <p>Email: {company.contactEmail}</p>
                                    <p>Telefone: {company.contactPhone}</p>
                                    <p>Data da Inclusão: {company.inclusionDate}</p>
                                    <p>Status: {company.status}</p>
                                    <button onClick={() => handleOpenModal(company)}>Editar</button>
                                    <button onClick={() => handleDeleteCompany(company.id)}>Excluir</button>
                                </div>
                            ) : null}
                        </div>
                    </div>
                ))}
            </div>

            {selectedCompany && (
                <Modal isOpen={isModalOpen} onClose={handleCloseModal} company={selectedCompany} onUpdate={handleUpdateCompany} />
            )}
        </div>
    );
}
