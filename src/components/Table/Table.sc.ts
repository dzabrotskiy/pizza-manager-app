import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled.th`
  padding: 14px;
  text-align: left;
`;

export const HeaderRow = styled.tr`
  background-color: rgb(245, 245, 256);
  border-bottom: 1px solid rgb(235, 234, 235);
  border-top: 1px solid rgb(235, 234, 235);
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const Td = styled.td`
  padding: 14px;
`;
