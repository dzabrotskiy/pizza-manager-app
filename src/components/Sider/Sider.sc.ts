import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 350px;
  max-height: 100vh;
  padding: 46px 24px;
  position: sticky;
  top: 10px;
`;

export const ItemsContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  color: rgb(149, 157, 167);
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
`;

export const Item = styled.div<{ isSelected?: boolean }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 17px 0 15px 20px;

  ${({ isSelected }) =>
    isSelected &&
    css`
      border-radius: 8px;
      background: #ffffff20;
    `}
`;

export const ItemLabel = styled.div<{ isSelected?: boolean }>`
  margin-left: 19px;
  color: ${props => props.isSelected && '#fff'};
`;
