import { IDataEmployees } from '@/dtos/employees/get-all-employes.dto';
import GetAllEmployees from '@/services/employees/get-all-employees';
import { useEffect, useState } from 'react';

export function useGetAllEmployees() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<IDataEmployees[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const service = new GetAllEmployees();

      try {
        const response = await service.loadAll();
        setData(
          response.map(item => ({
            id: item?.id ? Number(item.id) : 0,
            admission_date: item?.admission_date ?? '',
            image: item?.image ?? '',
            job: item?.job ?? '',
            name: item?.name ?? '',
            phone: item?.phone ?? '',
          })),
        );
      } catch (error) {
        console.error(error);
        alert('Ocorreu um erro ao buscar os dados');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { isLoading, data };
}
