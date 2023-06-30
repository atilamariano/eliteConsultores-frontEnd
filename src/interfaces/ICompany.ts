const EnumStatus = {
  ACTIVE: "acitive",
  INATIVE: "inative",
};

export interface ICompany {
  code: string;
  cnpj: string;
  businessName: string;
  contactPerson: string;
  contactPhone: string;
  contactEmail: string;
  inclusionDtae: Date;
  status?: typeof EnumStatus;
  municipalRegistration: string;
}
