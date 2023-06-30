import { Api } from "../api/Api";

export async function GetAllCompanies() {
  const response = await Api.get("/company");

  return response;
}
