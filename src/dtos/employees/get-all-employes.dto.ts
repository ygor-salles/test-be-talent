export interface IGetAllEmployeesApiResponse {
  id: number | null | undefined;
  name: string | null | undefined;
  job: string | null | undefined;
  admission_date: string | null | undefined;
  phone: string | null | undefined;
  image: string | null | undefined;
}

export interface IDataEmployees {
  id: number;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
  image: string;
}
