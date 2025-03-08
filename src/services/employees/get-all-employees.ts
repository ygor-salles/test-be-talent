import { API_URL } from '@/constants/apiUrl';
import { IGetAllEmployeesApiResponse } from '@/dtos/employees/get-all-employes.dto';

export default class GetAllEmployees {
  private route = `${API_URL}/employees`;

  public async loadAll(): Promise<IGetAllEmployeesApiResponse[]> {
    const response = await fetch(this.route);
    const dataJson = await response.json();

    return dataJson;
  }
}
