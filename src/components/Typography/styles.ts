import styled from 'styled-components';
import { IStyledColorProps } from './types';

export const H1 = styled.h1<IStyledColorProps>`
  font-weight: 500;
  font-size: 20px;
  color: ${({ $color }) => $color};
`;

export const H2 = styled.h2<IStyledColorProps>`
  font-weight: 500;
  font-size: 16px;
  color: ${({ $color }) => $color};
`;

export const H3 = styled.h3<IStyledColorProps>`
  font-weight: 400;
  font-size: 16px;
  color: ${({ $color }) => $color};
`;

export const Span = styled.span<IStyledColorProps>`
  font-weight: 400;
  font-size: 16px;
  color: ${({ $color }) => $color};
`;
