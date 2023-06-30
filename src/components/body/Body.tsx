import React, { useEffect, useState } from 'react';
import { GetAllCompanies } from '../../services/companyReq/getAllCompanies';
import { ICompany } from '../../interfaces/ICompany';

function Body() {
    const [companies, setCompanies] = useState<ICompany[]>([]);
    const [expandedCompany, setExpandedCompany] = useState<string>('');

    useEffect(() => {
        fetchCompanies();
    }, []);

    async function fetchCompanies() {
        try {
            const response = await GetAllCompanies();
            setCompanies(response.data);
        } catch (error) {
            console.error('Error getting companies', error);
        }
    }

    function handleExpandCompany(companyId: string) {
        setExpandedCompany(companyId === expandedCompany ? '' : companyId);
    }

    return (
        <div>
            <h1>Lista de Empresas</h1>
            <ul>
                {companies.map((company) => (
                    <li key={company.id}>
                        <button onClick={() => handleExpandCompany(company.id)}>
                            {company.businessName}
                        </button>
                        {company.id === expandedCompany && (
                            <div>
                                <p>Código: {company.code}</p>
                                <p>CNPJ: {company.cnpj}</p>
                                <p>Contato: {company.contactPerson}</p>
                                <p>Telefone de Contato: {company.contactPhone}</p>
                                <p>Email de Contato: {company.contactEmail}</p>
                                <p>
                                    Data de Inclusão: {company.inclusionDate}
                                </p>
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
