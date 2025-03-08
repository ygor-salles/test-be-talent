import styled, { css } from 'styled-components';

export const StyledHeader = styled.header`
  ${({ theme }) => css`
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    background-color: ${theme.colors.white};
    box-shadow: ${theme.shadow[3]};
  `}
`;
