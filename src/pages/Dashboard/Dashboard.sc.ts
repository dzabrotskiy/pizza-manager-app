import styled from 'styled-components';

import { FlexRow } from '@components/Flex';

export const Container = styled.div``;

export const Row = styled(FlexRow)`
  min-height: 50%;
`;

export const Half = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const VerticalDivider = styled.div`
  height: 100%;
  width: 1px;
  background: #eeeeee;
`;

export const Performance = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

export const PerformanceValue = styled.div`
  color: rgb(98, 201, 184);
  font-size: 26px;
  font-weight: 600;
  margin-top: 10px;
`;
