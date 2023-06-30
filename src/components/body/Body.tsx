import React, { useEffect, useState } from 'react';
import { GetAllCompanies } from '../../services/companyReq/getAllCompanies';
import { EnumStatus, ICompany } from '../../interfaces/ICompany';
import { FilterComponent } from './../filter/Filter';

function Body() {
    const [companies, setCompanies] = useState<ICompany[]>([]);
    const [expandedCompany, setExpandedCompany] = useState<string>('');
    const [filteredCompanies, setFilteredCompanies] = useState<ICompany[]>([]);

    useEffect(() => {
        fetchCompanies();
    }, []);

    async function fetchCompanies() {
        try {
            const response = await GetAllCompanies();
            const sortedData = response.data.sort((a: { businessName: string; }, b: { businessName: any; }) => a.businessName.localeCompare(b.businessName));
            setCompanies(sortedData);
            setFilteredCompanies(sortedData);
        } catch (error) {
            console.error('Error getting companies', error);
        }
    }

    function handleExpandCompany(companyId: string) {
        setExpandedCompany(companyId === expandedCompany ? '' : companyId);
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


    return (
        <div>
            <h1>Lista de Empresas</h1>
            <FilterComponent onFilter={handleFilter} />

            <ul>
                {filteredCompanies.map((company) => (
                    <li key={company.id}>
                        <button onClick={() => handleExpandCompany(company.id)}>{company.businessName}</button>
                        {company.id === expandedCompany && (
                            <div>
                                <p>Código: {company.code}</p>
                                <p>CNPJ: {company.cnpj}</p>
                                <p>Responsável: {company.contactPerson}</p>
                                <p>Telefone de Contato: {company.contactPhone}</p>
                                <p>Email de Contato: {company.contactEmail}</p>
                                <p>Data de Inclusão: {company.inclusionDate}</p>
                                <p>Status: {company.status}</p>
                                <p>Inscrição Municipal: {company.municipalRegistration}</p>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Body;
