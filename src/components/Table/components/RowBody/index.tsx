import { ContentRow } from './ContentRow';
import { TdColspan, Tr } from './styles';
import { IRowBodyProps } from './types';

export function RowBody<T>({ cellsConfig, data, isLoading }: IRowBodyProps<T>) {
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
          <ContentRow cellsConfig={cellsConfig} rowData={rowData} rowIndex={rowIndex} />
        </Tr>
      ))}
    </>
  );
}
