import { Typography } from '@/components/Typography';
import { ContainerAccordion, RowAccordion, TdAccordion, Tr } from './styles';
import { IContentAccordionProps } from './types';

export function ContentAccordion<T>({
  cellsConfig,
  rowData,
  rowIndex,
  isOpen,
}: IContentAccordionProps<T>) {
  return (
    <Tr>
      <TdAccordion colSpan={3}>
        <ContainerAccordion $isOpen={isOpen}>
          {cellsConfig
            .filter((_, index) => index >= 2)
            .map(({ key, label, renderComponent }) => (
              <RowAccordion key={key as string}>
                <Typography variant="h2">{label}</Typography>
                {renderComponent?.(rowData[key as never], rowData, rowIndex) ?? (
                  <Typography variant="span">{rowData[key as never]}</Typography>
                )}
              </RowAccordion>
            ))}
        </ContainerAccordion>
      </TdAccordion>
    </Tr>
  );
}
