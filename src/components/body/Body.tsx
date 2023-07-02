import React, { useEffect, useState } from 'react';
import { GetAllCompanies } from '../../services/companyReq/getAllCompanies';
import { ICompany } from '../../interfaces/ICompany';
import { FilterComponent } from './../filter/Filter';
import { Modal } from './../modal/Modal';
import { PatchCompanyById } from '../../services/companyReq/patchCompanyById';

import { StyledBody, CompanyContainer, CompanyInfo, CompanyTable, CompanyActions, ContynerComponies } from './style.Body';
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
      const sortedData = response.data.sort((a: { corporateName: string }, b: { corporateName: string }) =>
        a.corporateName.localeCompare(b.corporateName)
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
    <StyledBody>
      <FilterComponent
        onFilter={handleFilter}
        filteredCompanies={filteredCompanies}
      />

      <ContynerComponies>
        {filteredCompanies.map((company) => (


          <CompanyContainer key={company.id} active={company.status === 'ACTIVE'} inative={company.status === 'INATIVE'}>

            <CompanyInfo onClick={() => handleExpandCompany(company.id)}>
              <h4 style={{ color: 'white' }}>{company.corporateName}</h4>
              {expandedCompany === company.id && (
                <CompanyTable>
                  <tbody>
                    <tr>
                      <td><b>Código:</b></td>
                      <td>{company.code}</td>
                    </tr>
                    <tr>
                      <td><b>CNPJ:</b></td>
                      <td>{company.cnpj}</td>
                    </tr>
                    <tr>
                      <td><b>Nome Fantasia:</b></td>
                      <td>{company.fantasyName}</td>
                    </tr>
                    <tr>
                      <td><b>Responsável:</b></td>
                      <td>{company.contactPerson}</td>
                    </tr>
                    <tr>
                      <td><b>Email:</b></td>
                      <td>{company.contactEmail}</td>
                    </tr>
                    <tr>
                      <td><b>Telefone:</b></td>
                      <td>{company.contactPhone}</td>
                    </tr>
                    <tr>
                      <td><b>Inscrição Municipal:</b></td>
                      <td>{company.municipalRegistration}</td>
                    </tr>
                    <tr>
                      <td><b>Data da Inclusão:</b></td>
                      <td>{company.inclusionDate}</td>
                    </tr>
                    <tr>
                      <td><b>Status:</b></td>
                      <td>{company.status}</td>
                    </tr>
                  </tbody>
                </CompanyTable>
              )}
            </CompanyInfo>
            <CompanyActions>
              <button onClick={() => handleOpenModal(company)}>Editar</button>
              <button onClick={() => handleDeleteCompany(company.id)}>Excluir</button>
            </CompanyActions>
          </CompanyContainer>

        ))}
      </ContynerComponies>

      {selectedCompany && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} company={selectedCompany} onUpdate={handleUpdateCompany} />
      )}
    </StyledBody>
  );
}
