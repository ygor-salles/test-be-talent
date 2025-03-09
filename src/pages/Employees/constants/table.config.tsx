import { Avatar, Typography } from '@/components';
import { ICellsConfigTable } from '@/components/Table/types';
import { formatDate, formatPhoneNumber } from '@/utils';

import { IDataEmployees } from '@/dtos/employees/get-all-employes.dto';

export const cellsConfig: ICellsConfigTable<IDataEmployees> = [
  {
    key: 'image',
    label: 'Foto',
    renderComponent: (value, rowData) => <Avatar src={value} name={rowData?.name} />,
  },
  {
    key: 'name',
    label: 'Nome',
  },
  {
    key: 'job',
    label: 'Cargo',
  },
  {
    key: 'admission_date',
    label: 'Data de admissão',
    renderComponent: value => <Typography variant="span">{formatDate(value)}</Typography>,
  },
  {
    key: 'phone',
    label: 'Telefone',
    renderComponent: value => <Typography variant="span">{formatPhoneNumber(value)}</Typography>,
  },
];
