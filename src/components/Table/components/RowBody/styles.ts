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

export const ButtonIcon = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  margin: 0;
`;

export const TdAccordion = styled.td`
  ${({ theme: { spacing } }) => css`
    padding: ${spacing['6x']} ${spacing['3x']};
    width: 100%;
  `}
`;

export const ContainerAccordion = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing['3x']};
  `}
`;

export const RowAccordion = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px dashed ${theme.colors.gray.neutral10};
  `}
`;
