import { BaseLayout, InputSearch, Table, Typography } from '@/components';

import { cellsConfig } from './constants/table.config';
import { dataMock } from './mock/dataMock';
import { Container, WrapperTitle } from './styles';

export function Employees() {
  return (
    <BaseLayout>
      <Container>
        <WrapperTitle>
          <Typography variant="h1">Funcionários</Typography>
          <InputSearch placeholder="Pesquisar" />
        </WrapperTitle>

        <Table cellsConfig={cellsConfig} data={dataMock} />
      </Container>
    </BaseLayout>
  );
}
