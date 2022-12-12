import styled, { css } from 'styled-components';

export const StyledButton = styled.button<{
  isDanger?: boolean;
  isSuccess?: boolean;
}>`
  background: transparent;
  border: 1px solid rgb(92, 142, 220);
  border-radius: 4px;
  padding: 8px 9px;
  color: rgb(92, 142, 220);
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  cursor: pointer;

  ${({ isDanger }) =>
    isDanger &&
    css`
      color: #fff;
      border: 1px solid #f00;
    `}

  ${({ isSuccess }) =>
    isSuccess &&
    css`
      color: rgb(172, 220, 117);
      border: 1px solid rgb(172, 220, 117);
    `}
`;
