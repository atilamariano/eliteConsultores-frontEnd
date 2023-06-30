export interface ICompany {
  id: string;
  code: string;
  cnpj: string;
  businessName: string;
  contactPerson: string;
  contactPhone: string;
  contactEmail: string;
  inclusionDate?: string;
  status?: string;
  municipalRegistration: string;
}


export const EnumStatus = {
  ALL: "all",
  ACTIVE: "active",
  INATIVE: "inative",
};