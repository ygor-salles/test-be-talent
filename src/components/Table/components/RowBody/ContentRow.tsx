import useWindowSize from '@/hooks/useWindowSize';
import { IContentRowProps } from './types';
import { ButtonIcon, Td } from './styles';
import { Typography } from '@/components/Typography';
import { IMAGES } from '@/assets/images';

export function ContentRow<T>({
  cellsConfig,
  rowData,
  rowIndex,
  onToggleRow,
}: IContentRowProps<T>) {
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
        <Td>
          <ButtonIcon type="button" onClick={() => onToggleRow(rowIndex)}>
            <img src={IMAGES.SVG.chevron_down_blue} alt="chevron down" />
          </ButtonIcon>
        </Td>
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
