import styled, { css } from 'styled-components';

export const Tr = styled.tr``;

export const Td = styled.td`
  ${({ theme }) => css`
    padding-left: ${theme.spacing['6x']};
    text-align: left;
    border-top: 1px solid ${({ theme }) => theme.colors.gray.neutral5};

    transition: all 0.3s ease-in-out;
    overflow: hidden;
    height: 49px;

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
  width: 100%;
`;

export const ContainerAccordion = styled.div<{ $isOpen: boolean }>`
  ${({ theme: { spacing }, $isOpen }) => css`
    display: flex;
    flex-direction: column;
    gap: ${spacing['3x']};
    overflow: hidden;
    max-height: ${$isOpen ? '500px' : '0'};
    opacity: ${$isOpen ? '1' : '0'};
    padding: ${$isOpen ? `${spacing['6x']} ${spacing['3x']}` : 0};
    transition:
      max-height 0.3s ease-in-out,
      opacity 0.3s ease-in-out;
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

export const ChevronIcon = styled.img<{ $isOpen: boolean }>`
  transition: transform 0.4s ease-in-out;
  transform: rotate(${({ $isOpen }) => ($isOpen ? '180deg' : '0deg')});
`;
