import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacing['6x']};
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing['6x']};

    ${theme.breakpoints.sm} {
      padding: 24px ${theme.spacing['4x']};
      gap: ${theme.spacing['4x']};
    }
  `}
`;

export const WrapperTitle = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${theme.breakpoints.sm} {
      flex-direction: column;
      align-items: flex-start;
      gap: 24px;
    }
  `}
`;
