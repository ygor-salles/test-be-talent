import { BaseLayout } from '@/components/BaseLayout';
import { InputSearch } from '@/components/InputSearch';
import { Typography } from '@/components/Typography';
import { Container, WrapperTitle } from './styles';
import { Table } from '@/components/Table';

export function Employees() {
  return (
    <BaseLayout>
      <Container>
        <WrapperTitle>
          <Typography variant="h1">Funcionários</Typography>
          <InputSearch placeholder="Pesquisar" />
        </WrapperTitle>

        <Table />
      </Container>
    </BaseLayout>
  );
}
