import { Api } from './../api/Api';

export async function DeleteCompanyById(id: string) {
  const response = await Api.delete(`/company/${id}`);

  return response;
}