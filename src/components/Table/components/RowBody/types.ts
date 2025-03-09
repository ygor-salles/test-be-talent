import { ICellsConfigTable } from '../../types';

export interface IRowBodyProps<T> {
  cellsConfig: ICellsConfigTable<T>;
  data: Array<T>;
  isLoading?: boolean;
}

export interface IContentRowProps<T> {
  cellsConfig: ICellsConfigTable<T>;
  rowData: T;
  rowIndex: number;
  isOpen: boolean;
  onToggleRow: (index: number) => void;
}

export interface IContentAccordionProps<T> {
  cellsConfig: ICellsConfigTable<T>;
  rowData: T;
  rowIndex: number;
  isOpen: boolean;
}
