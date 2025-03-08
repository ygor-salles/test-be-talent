import { BaseLayout, InputSearch, Table, Typography } from '@/components';

import { cellsConfig } from './constants/table.config';
import { useGetAllEmployees } from './hooks/useGetAllEmployees';
import { Container, WrapperTitle } from './styles';

export function Employees() {
  const { data, isLoading } = useGetAllEmployees();

  return (
    <BaseLayout>
      <Container>
        <WrapperTitle>
          <Typography variant="h1">Funcionários</Typography>
          <InputSearch placeholder="Pesquisar" />
        </WrapperTitle>

        <Table cellsConfig={cellsConfig} data={data} isLoading={isLoading} />
      </Container>
    </BaseLayout>
  );
}
