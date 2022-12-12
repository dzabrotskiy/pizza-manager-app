import { Fragment, useMemo } from 'react';
import styled from 'styled-components';

import { percentage } from '@services/utils/percentage';
import { Divider } from '@components/Divider';
import { Spacer } from '@components/Spacer';

type Props = {
  total: number;
  completed: number;
  pending: number;
  cancelled: number;
};

type Legend = {
  label: string;
  key: keyof Props;
  color: string;
};

const legend: Legend[] = [
  {
    label: 'Completed',
    key: 'completed',
    color: 'rgb(118, 214, 114)',
  },
  {
    label: 'Pending',
    key: 'pending',
    color: 'rgb(50, 115, 235)',
  },
  {
    label: 'Cancelled',
    key: 'cancelled',
    color: '#f00',
  },
];

export function OrdersChart(props: Props) {
  const { total, cancelled, completed, pending } = props;

  const data = useMemo(() => {
    return {
      cancelled: percentage(cancelled, total),
      completed: percentage(completed, total),
      pending: percentage(pending, total),
    };
  }, [total, completed, pending, cancelled]);

  return (
    <Fragment>
      <span>
        <OrdersCount>{total}</OrdersCount> items
      </span>
      <Spacer height={10} />
      <Container>
        <Completed width={data.completed} />
        <Pending width={data.pending} />
        <Cancelled width={data.cancelled} />
      </Container>
      <Divider />
      <LegendContainer>
        {legend.map(({ color, label, key }) => (
          <LegendItem key={key}>
            <LegendCircle style={{ background: color }} />
            <Spacer width={10} />
            <div>
              <div>{label}</div>
              <div>{props[key]}</div>
            </div>
          </LegendItem>
        ))}
      </LegendContainer>
    </Fragment>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 50%;
  height: 30px;
  display: flex;
  flex-direction: row;
`;

const Completed = styled.div<{ width: number }>`
  width: ${props => props.width}%;
  background: rgb(118, 214, 114);
`;

const Pending = styled.div<{ width: number }>`
  width: ${props => props.width}%;
  background: rgb(50, 115, 235);
`;

const Cancelled = styled.div<{ width: number }>`
  width: ${props => props.width}%;
  background: #f00;
`;

const OrdersCount = styled.span`
  color: rgb(92, 142, 220);
  font-size: 26px;
`;

const LegendContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 50%;
  gap: 18px;
`;

const LegendItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LegendCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;
