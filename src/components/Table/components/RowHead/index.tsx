import { useTheme } from 'styled-components';

import { Typography } from '@/components/Typography';
import { IRowHeadProps } from './types';
import { Circle, Th } from './styles';
import useWindowSize from '@/hooks/useWindowSize';

export function RowHead<T>({ cellsConfig }: IRowHeadProps<T>) {
  const { colors } = useTheme();
  const { xs } = useWindowSize();

  if (xs) {
    return (
      <tr>
        {cellsConfig
          .filter((_, index) => index <= 1)
          .map(({ key, label }) => (
            <Th key={key as string}>
              <Typography variant="span" color={colors.white}>
                {label.toUpperCase()}
              </Typography>
            </Th>
          ))}
        <Th $hasLastCell>
          <Circle />
        </Th>
      </tr>
    );
  }

  return (
    <tr>
      {cellsConfig.map(({ key, label }) => (
        <Th key={key as string}>
          <Typography variant="span" color={colors.white}>
            {label}
          </Typography>
        </Th>
      ))}
    </tr>
  );
}
