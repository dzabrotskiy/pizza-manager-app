import styled from 'styled-components';

type Props = {
  width?: number;
  height?: number;
};

export const Spacer = styled.div<Props>`
  ${({ width, height }) =>
    width
      ? `
      display: inline-block;
      width: ${width}px;
    `
      : `
      height: ${height}px;
    `}
`;
