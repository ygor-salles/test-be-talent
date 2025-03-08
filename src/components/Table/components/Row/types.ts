import { ICellsConfigTable } from '../../types';

export interface IRowProps<T> {
  cellsConfig: ICellsConfigTable<T>;
  data: Array<T>;
  isLoading?: boolean;
}
