import { BaseLayout, InputSearch, Table, Typography } from '@/components';

import { cellsConfig } from './constants/table.config';
import { useGetAllEmployees } from './hooks/useGetAllEmployees';
import { Container, WrapperTitle } from './styles';
import { useState } from 'react';

export function Employees() {
  const { data, isLoading } = useGetAllEmployees();

  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = data.filter(employee =>
    [employee.name, employee.job, employee.phone].some(field =>
      field.toLowerCase().includes(searchTerm.toLowerCase()),
    ),
  );

  return (
    <BaseLayout>
      <Container>
        <WrapperTitle>
          <Typography variant="h1">Funcionários</Typography>
          <InputSearch
            placeholder="Pesquisar"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </WrapperTitle>

        <Table cellsConfig={cellsConfig} data={filteredData} isLoading={isLoading} />
      </Container>
    </BaseLayout>
  );
}
