import styled, { css } from 'styled-components';

export const Tr = styled.tr`
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray.neutral5};
`;

export const Td = styled.td`
  ${({ theme }) => css`
    padding-left: ${theme.spacing['6x']};
    text-align: left;
    height: 47px;
  `}
`;

export const TdColspan = styled.td`
  ${({ theme }) => css`
    color: ${theme.colors.gray.neutral20};
    text-align: center;
    height: 300px;
  `}
`;
