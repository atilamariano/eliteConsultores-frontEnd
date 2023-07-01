import React, { useState } from 'react';
import { PatchCompanyById } from '../../services/companyReq/patchCompanyById';
import { ICompany } from '../../interfaces/ICompany';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  company: ICompany;
  onUpdate: (updatedCompany: ICompany) => void;
};

export function Modal({ isOpen, onClose, company, onUpdate }: ModalProps) {
  const [updatedCompany, setUpdatedCompany] = useState(company);

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    const updatedCompanyCopy = { ...updatedCompany, status: value };
    setUpdatedCompany(updatedCompanyCopy);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUpdatedCompany((prevCompany) => ({
      ...prevCompany,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      await PatchCompanyById(updatedCompany.id, updatedCompany);

      onUpdate(updatedCompany); // Chamada para atualizar a empresa no componente Body

      onClose();
    } catch (error) {
      console.error('Erro ao atualizar empresa:', error);
    }
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <h2>Atualizar Empresa</h2>
        <form>
          <label htmlFor="fantasyName">Nome Fantasia:</label>
          <input
            id="fantasyName"
            name="fantasyName"
            type="text"
            value={updatedCompany.fantasyName}
            onChange={handleInputChange}
          />

          <label htmlFor="contactPerson">Contato:</label>
          <input
            id="contactPerson"
            name="contactPerson"
            type="text"
            value={updatedCompany.contactPerson}
            onChange={handleInputChange}
          />

          <label htmlFor="contactPhone">Telefone de Contato:</label>
          <input
            id="contactPhone"
            name="contactPhone"
            type="text"
            value={updatedCompany.contactPhone}
            onChange={handleInputChange}
          />

          <label htmlFor="contactEmail">Email de Contato:</label>
          <input
            id="contactEmail"
            name="contactEmail"
            type="email"
            value={updatedCompany.contactEmail}
            onChange={handleInputChange}
          />

          <label htmlFor="status">Estatus da Empresa:</label>
          <select id="status" name="status" value={updatedCompany.status} onChange={handleStatusChange}>
            <option value="ACTIVE">ACTIVE</option>
            <option value="INATIVE">INATIVE</option>
          </select>

          <div className="modal-buttons">
            <button type="button" className="cancel-button" onClick={onClose}>
              Cancelar
            </button>
            <button type="button" className="save-button" onClick={handleSave}>
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
