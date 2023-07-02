import React from 'react';
import * as XLSX from 'xlsx';
import { ExportExcelButtonProps } from '../../types/typeExportExcelButton';
import { Button } from './style.ExcelButton';

export function ExportExcelButton({ companies, selectedFields }: ExportExcelButtonProps) {
  const exportToExcel = () => {
    const data = companies.map((company) => {
      const rowData: { [key: string]: string | undefined } = {};
      selectedFields.forEach((field) => {
        switch (field) {
          case 'code':
            rowData['Código'] = company.code;
            break;
          case 'cnpj':
            rowData['CNPJ'] = company.cnpj;
            break;
          case 'corporateName':
            rowData['Razão Social'] = company.corporateName;
            break;
          case 'fantasyName':
            rowData['Nome Fantasia'] = company.fantasyName;
            break;
          case 'contactPerson':
            rowData['Responsável'] = company.contactPerson;
            break;
          case 'contactPhone':
            rowData['Telefone'] = company.contactPhone;
            break;
          case 'contactEmail':
            rowData['Email'] = company.contactEmail;
            break;
          case 'inclusionDate':
            rowData['Date de Inclusão'] = company.inclusionDate;
            break;
          case 'status':
            rowData['Status'] = company.status || '';
            break;
          case 'municipalRegistration':
            rowData['Inscrição Municipal'] = company.municipalRegistration;
            break;
          default:
            break;
        }
      });
      return rowData;
    });

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Empresas');
    XLSX.writeFile(workbook, 'Empresas.xlsx');
  };

  return <Button onClick={exportToExcel}>Exportar</Button>;
}




