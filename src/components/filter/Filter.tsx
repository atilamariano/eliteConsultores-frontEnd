import React, { useState } from 'react';

type FilterProps = {
    onFilter: (filters: { status: string; dataInicial: string; dataFinal: string }) => void;
};

export const FilterComponent: React.FC<FilterProps> = ({ onFilter }) => {
    const [status, setStatus] = useState('todos');
    const [dataInicial, setDataInicial] = useState('');
    const [dataFinal, setDataFinal] = useState('');

    const handleFilter = () => {
        onFilter({ status, dataInicial, dataFinal });
    };

    return (
        <div>
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
        </div>
    );
};

