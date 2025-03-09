import { useTheme } from 'styled-components';

import { Typography } from '../Typography';
import { Row } from './components/Row';
import { StyledTable, TableContainer, TBody, Th, THead } from './styles';
import { ITableProps } from './types';

export function Table<T extends object>(props: ITableProps<T>) {
  const { colors } = useTheme();

  return (
    <TableContainer>
      <StyledTable>
        <THead>
          <tr>
            {props.cellsConfig.map(({ key, label }) => (
              <Th key={key as string}>
                <Typography variant="span" color={colors.white}>
                  {label}
                </Typography>
              </Th>
            ))}
          </tr>
        </THead>

        <TBody>
          <Row {...props} />
        </TBody>
      </StyledTable>
    </TableContainer>
  );
}
