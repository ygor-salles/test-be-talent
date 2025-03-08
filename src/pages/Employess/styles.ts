import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacing['6x']};
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing['6x']};
  `}
`;

export const WrapperTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
