import useWindowSize from '@/hooks/useWindowSize';
import { IContentRowProps } from './types';
import { Td } from './styles';
import { Typography } from '@/components/Typography';

export function ContentRow<T>({ cellsConfig, rowData, rowIndex }: IContentRowProps<T>) {
  const { xs } = useWindowSize();

  if (xs) {
    return (
      <>
        {cellsConfig
          .filter((_, index) => index <= 1)
          .map(({ key, renderComponent }) => (
            <Td key={key as string}>
              {renderComponent?.(rowData[key as never], rowData, rowIndex) ?? (
                <Typography variant="span">{rowData[key as never]}</Typography>
              )}
            </Td>
          ))}
        <Td>*</Td>
      </>
    );
  }

  return (
    <>
      {cellsConfig.map(({ key, renderComponent }) => (
        <Td key={key as string}>
          {renderComponent?.(rowData[key as never], rowData, rowIndex) ?? (
            <Typography variant="span">{rowData[key as never]}</Typography>
          )}
        </Td>
      ))}
    </>
  );
}
