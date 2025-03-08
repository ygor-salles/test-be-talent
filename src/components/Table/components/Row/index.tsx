import { Typography } from '@/components/Typography';
import { Td, TdColspan, Tr } from './styles';
import { IRowProps } from './types';

export function Row<T>({ cellsConfig, data, isLoading }: IRowProps<T>) {
  if (isLoading) {
    return (
      <Tr>
        <TdColspan colSpan={cellsConfig.length}>Carregando...</TdColspan>
      </Tr>
    );
  }

  if (data.length === 0) {
    return (
      <Tr>
        <TdColspan colSpan={cellsConfig.length}>Não há dados para exibir</TdColspan>
      </Tr>
    );
  }

  return (
    <>
      {data.map((rowData, rowIndex) => (
        <Tr key={rowData?.['id' as never] ?? rowIndex}>
          {cellsConfig.map(({ key, renderComponent }) => (
            <Td key={key as string}>
              {renderComponent?.(rowData[key as never], rowData, rowIndex) ?? (
                <Typography variant="span">{rowData[key as never]}</Typography>
              )}
            </Td>
          ))}
        </Tr>
      ))}
    </>
  );
}
