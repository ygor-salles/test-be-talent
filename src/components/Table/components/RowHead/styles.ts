import styled, { css } from 'styled-components';
import { IThStyledProps } from './types';

export const Th = styled.th<IThStyledProps>`
  ${({ theme, $hasLastCell }) => css`
    text-align: left;
    padding-left: ${theme.spacing['6x']};
    color: ${theme.colors.white};
    height: 47px;

    ${theme.breakpoints.xs} {
      padding-left: ${theme.spacing['3x']};
    }

    ${$hasLastCell &&
    css`
      border-top-right-radius: 8px;
    `}
  `}
`;

export const Circle = styled.div`
  ${({ theme }) => css`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${theme.colors.white};
  `}
`;
