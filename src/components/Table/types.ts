import { ReactNode } from 'react';

export type ICellsConfigTable<T> = Array<{
  key: keyof T;
  label: string;
  renderComponent?: (value: never, data?: T, rowIndex?: number) => ReactNode;
}>;

export interface ITableProps<T> {
  cellsConfig: ICellsConfigTable<T>;
  data: Array<T>;
  isLoading?: boolean;
}
