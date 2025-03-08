import { Avatar, Typography } from '@/components';
import { ICellsConfigTable } from '@/components/Table/types';
import { formatDate, formatPhoneNumber } from '@/utils';

import { IDataEmployees } from '@/dtos/employees/get-all-employes.dto';

export const cellsConfig: ICellsConfigTable<IDataEmployees> = [
  {
    key: 'image',
    label: 'FOTO',
    renderComponent: (value, rowData) => <Avatar src={value} name={rowData?.name} />,
  },
  {
    key: 'name',
    label: 'NOME',
  },
  {
    key: 'job',
    label: 'CARGO',
  },
  {
    key: 'admission_date',
    label: 'DATA DE ADMISSÃO',
    renderComponent: value => <Typography variant="span">{formatDate(value)}</Typography>,
  },
  {
    key: 'phone',
    label: 'TELEFONE',
    renderComponent: value => <Typography variant="span">{formatPhoneNumber(value)}</Typography>,
  },
];
