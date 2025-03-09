import { ICellsConfigTable } from '../../types';

export interface IRowHeadProps<T> {
  cellsConfig: ICellsConfigTable<T>;
}

export interface IThStyledProps {
  $hasLastCell?: boolean;
}
