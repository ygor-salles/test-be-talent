import { Fragment, useCallback, useState } from 'react';
import { ContentRow } from './ContentRow';
import { TdColspan, Tr } from './styles';
import { IRowBodyProps } from './types';
import { ContentAccordion } from './ContentAccordion';
import useWindowSize from '@/hooks/useWindowSize';

export function RowBody<T>({ cellsConfig, data, isLoading }: IRowBodyProps<T>) {
  const { xs } = useWindowSize();
  const [openRow, setOpenRow] = useState<number | null>(null);

  const toggleRow = useCallback(
    (index: number) => {
      setOpenRow(openRow === index ? null : index);
    },
    [openRow],
  );

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
        <Fragment key={rowData?.['id' as never] ?? rowIndex}>
          <Tr onClick={() => toggleRow(rowIndex)}>
            <ContentRow
              cellsConfig={cellsConfig}
              rowData={rowData}
              rowIndex={rowIndex}
              isOpen={openRow === rowIndex}
              onToggleRow={toggleRow}
            />
          </Tr>

          {xs && (
            <ContentAccordion
              cellsConfig={cellsConfig}
              rowData={rowData}
              rowIndex={rowIndex}
              isOpen={openRow === rowIndex}
            />
          )}
        </Fragment>
      ))}
    </>
  );
}
