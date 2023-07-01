import { ICompany } from "../../interfaces/ICompany";
import { Api } from "./../api/Api";

export async function PatchCompanyById(
  id: string,
  data: Partial<ICompany>
): Promise<any> {
  const response = await Api.patch(`/company/${id}`, data);
  return response;
}
