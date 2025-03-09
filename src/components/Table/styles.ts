import styled, { css } from 'styled-components';

export const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const StyledTable = styled.table`
  ${({ theme }) => css`
    width: 100%;
    min-width: 600px;
    border-collapse: collapse;
    box-shadow: ${theme.shadow[1]};

    ${theme.breakpoints.xs} {
      min-width: initial;
    }
  `}
`;

export const THead = styled.thead`
  ${({ theme }) => css`
    background-color: ${theme.colors.blue.primary};
  `}
`;

export const TBody = styled.tbody`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
  `}
`;
