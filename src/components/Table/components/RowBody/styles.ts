import styled, { css } from 'styled-components';

export const Tr = styled.tr``;

export const Td = styled.td`
  ${({ theme }) => css`
    padding-left: ${theme.spacing['6x']};
    text-align: left;
    height: 49px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray.neutral5};

    ${theme.breakpoints.xs} {
      height: 60px;
      padding-left: ${theme.spacing['3x']};
    }
  `}
`;

export const TdColspan = styled.td`
  ${({ theme }) => css`
    color: ${theme.colors.gray.neutral20};
    text-align: center;
    height: 300px;
  `}
`;
