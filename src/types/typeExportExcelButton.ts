import { ICompany } from "../interfaces/ICompany";

export type SelectedFields =
  | "code"
  | "cnpj"
  | "corporateName"
  | "fantasyName"
  | "contactPerson"
  | "contactPhone"
  | "contactEmail"
  | "inclusionDate"
  | "status"
  | "municipalRegistration";

export type ExportExcelButtonProps = {
  companies: ICompany[];
  selectedFields: SelectedFields[];
};
