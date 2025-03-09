import { RowBody } from './components/RowBody';
import { RowHead } from './components/RowHead';
import { StyledTable, TableContainer, TBody, THead } from './styles';
import { ITableProps } from './types';

export function Table<T extends object>(props: ITableProps<T>) {
  return (
    <TableContainer>
      <StyledTable>
        <THead>
          <RowHead cellsConfig={props.cellsConfig} />
        </THead>

        <TBody>
          <RowBody {...props} />
        </TBody>
      </StyledTable>
    </TableContainer>
  );
}
