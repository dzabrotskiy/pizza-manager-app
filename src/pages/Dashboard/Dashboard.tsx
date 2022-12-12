import { useEffect, useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PolarGrid,
} from 'recharts';

import { Content } from '@layouts/Content';
import { FlexRow } from '@components/Flex';
import { Subtitle, Title } from '@components/Text';
import type { Statistic } from 'types/Order';
import { getOrdersStatistic } from '@services/api/orders';
import { Spacer } from '@components/Spacer';
import { OrdersStatisticChart } from '@widgets/OrdersStatisticChart';
import { ReportItem } from '@widgets/ReportItem';
import { Divider } from '@components/Divider';

import * as Styled from './Dashboard.sc';

export function Dashboard() {
  const [statistic, setStatistic] = useState<Statistic>();
  useEffect(() => {
    const asyncEffect = async () => {
      const statistic = await getOrdersStatistic();
      setStatistic(statistic);
    };

    asyncEffect();
  }, []);

  return (
    <Content>
      <Styled.Row>
        <Styled.Half>
          <Title>DELIVERY STATUS</Title>
          <Spacer height={30} />
          <Subtitle>Total Orders</Subtitle>
          <Spacer height={6} />
          <Title>{statistic?.total}</Title>
          <Spacer height={30} />
          {statistic && (
            <FlexRow>
              <OrdersStatisticChart
                stroke="rgb(108, 213, 200)"
                label="Orders Delivered"
                total={statistic.total}
                value={statistic.completed}
              />
              <Spacer width={30} />
              <OrdersStatisticChart
                stroke="rgb(236, 98, 101)"
                label="Pending Delivery"
                total={statistic.total}
                value={statistic.pending}
              />
            </FlexRow>
          )}
        </Styled.Half>
        <Styled.VerticalDivider />
        <Styled.Half>
          <Title>TOTAL SALES</Title>
          <Spacer height={12} />
          <Subtitle>USD</Subtitle>
          <Spacer height={30} />
          <Title>{statistic?.totalSales.toLocaleString()}</Title>
        </Styled.Half>
      </Styled.Row>
      <Spacer height={30} />
      <Styled.Row>
        <Styled.Half style={{ width: '60%' }}>
          <Subtitle>ORDER HISTORY</Subtitle>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              width={500}
              height={400}
              data={statistic?.ordersHistory ?? []}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis dataKey="name" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="rgb(246, 222, 116)"
                fill="rgb(246, 222, 116)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </Styled.Half>
        <Styled.Half>
          <Subtitle>REPORT</Subtitle>
          <Spacer height={50} />
          {statistic && (
            <FlexRow style={{ alignSelf: 'baseline' }}>
              <ReportItem
                color="rgb(98, 201, 184)"
                value={statistic.onTimeDelivery}
                label="Ontime Delivery"
              />
              <Spacer width={50} />
              <ReportItem
                color="rgb(236, 98, 101)"
                value={statistic.lateDeliveries}
                label="Late Deliveries"
              />
            </FlexRow>
          )}
          <Spacer height={30} />
          <Divider />
          <Spacer height={30} />
          <Styled.Performance>
            <Subtitle>Performance</Subtitle>
            <Styled.PerformanceValue>
              +{statistic?.performance}%
            </Styled.PerformanceValue>
          </Styled.Performance>
        </Styled.Half>
      </Styled.Row>
    </Content>
  );
}
