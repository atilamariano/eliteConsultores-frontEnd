import { Api } from "./../api/Api";

export async function GetAllCompanies() {
  try {
    const response = await Api.get("/company");

    return response;
  } catch (error) {
    console.error('Error getting companies', error);
  }
}
