import React, { useEffect, useState } from 'react';
import { GetAllCompanies } from '../../services/companyReq/getAllCompanies';
import { Link } from 'react-router-dom';

interface Company {
    businessName: string;
}

function Body() {
    const [companies, setCompanies] = useState<string[]>([]);

    useEffect(() => {
        fetchCompanies();
    }, []);

    async function fetchCompanies() {
        try {
            const response = await GetAllCompanies();
            const businessNames = response.data.map((company: Company) => company.businessName);
            setCompanies(businessNames);
        } catch (error) {
            console.error('Error getting companies', error);
        }
    }

    return (
        <div>
            <h1>Lista de Empresas</h1>
            <ul>
                {companies.map((businessName, id) => (
                    <li key={id}>
                        <Link to='/profile'>{businessName}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Body