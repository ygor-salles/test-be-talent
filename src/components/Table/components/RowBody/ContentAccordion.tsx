import { Typography } from '@/components/Typography';
import { ContainerAccordion, RowAccordion, TdAccordion } from './styles';
import { IContentAccordionProps } from './types';

export function ContentAccordion<T>({ cellsConfig, rowData, rowIndex }: IContentAccordionProps<T>) {
  return (
    <TdAccordion colSpan={3}>
      <ContainerAccordion>
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
  );
}
