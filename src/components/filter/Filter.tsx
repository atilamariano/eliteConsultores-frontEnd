import React, { useState } from 'react';
import { FilterContainer } from './style.Filter';
import { ExportExcelButton } from '../exportExcelButton/exportExcelButton';
import { ICompany } from '../../interfaces/ICompany';

type FilterProps = {
  onFilter: (filters: { status: string; dataInicial: string; dataFinal: string }) => void;
  filteredCompanies: ICompany[]; // Adicione o tipo Company ou substitua pelo tipo correto das empresas
};

export const FilterComponent: React.FC<FilterProps> = ({ onFilter, filteredCompanies }) => {
  const [status, setStatus] = useState('todos');
  const [dataInicial, setDataInicial] = useState('');
  const [dataFinal, setDataFinal] = useState('');

  const handleFilter = () => {
    onFilter({ status, dataInicial, dataFinal });
  };

  return (
    <FilterContainer>
      <label htmlFor="status">Status:</label>
      <select id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="todos">Todos</option>
        <option value="ACTIVE">Ativas</option>
        <option value="INATIVE">Inativas</option>
      </select>

      <label htmlFor="dataInicial">Data Inicial:</label>
      <input
        id="dataInicial"
        type="date"
        value={dataInicial}
        onChange={(e) => setDataInicial(e.target.value)}
      />

      <label htmlFor="dataFinal">Data Final:</label>
      <input
        id="dataFinal"
        type="date"
        value={dataFinal}
        onChange={(e) => setDataFinal(e.target.value)}
      />

      <button onClick={handleFilter}>Filtrar</button>

      <ExportExcelButton
        companies={filteredCompanies}
        selectedFields={['code', 'cnpj', 'corporateName', 'municipalRegistration', 'inclusionDate', 'contactPerson']}
      />
    </FilterContainer>
  );
};
