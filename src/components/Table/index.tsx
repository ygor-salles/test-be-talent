import { useTheme } from 'styled-components';
import { Typography } from '../Typography';
import { StyledTable, TableContainer, TBody, Td, TdEmpty, Th, THead, Tr } from './styles';
import { ITableProps } from './types';

export function Table<T extends object>({ data, cellsConfig }: ITableProps<T>) {
  const { colors } = useTheme();

  return (
    <TableContainer>
      <StyledTable>
        <THead>
          <tr>
            {cellsConfig.map(({ key, label }) => (
              <Th key={key as string}>
                <Typography variant="span" color={colors.white}>
                  {label}
                </Typography>
              </Th>
            ))}
          </tr>
        </THead>

        <TBody>
          {data?.length > 0 ? (
            data.map((rowData, rowIndex) => (
              <Tr key={rowData?.['id' as never] ?? rowIndex}>
                {cellsConfig.map(({ key, renderComponent }) => (
                  <Td key={key as string}>
                    {renderComponent?.(rowData[key as never], rowData, rowIndex) ?? (
                      <Typography variant="span">{rowData[key as never]}</Typography>
                    )}
                  </Td>
                ))}
              </Tr>
            ))
          ) : (
            <Tr>
              <TdEmpty colSpan={cellsConfig.length}>Não há dados para exibir</TdEmpty>
            </Tr>
          )}
        </TBody>
      </StyledTable>
    </TableContainer>
  );
}
