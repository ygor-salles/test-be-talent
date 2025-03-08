import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 48px;
  width: 100%;
  max-width: 290px;
  position: relative;
`;

export const Input = styled.input`
  ${({ theme: { spacing, colors } }) => css`
    width: 100%;
    height: 100%;
    padding: ${spacing['2x']} ${spacing['6x']} ${spacing['2x']} ${spacing['3x']};
    font-size: 16px;
    font-weight: 400;
    border: 1px solid ${colors.gray.neutral10};
    border-radius: 8px;
    outline: none;

    &:focus {
      border-color: ${colors.blue.primary};
    }

    &::placeholder {
      font-size: 16px;
      font-weight: 400;
      color: ${colors.gray.neutral20};
    }
  `}
`;

export const IconImg = styled.img`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
`;
