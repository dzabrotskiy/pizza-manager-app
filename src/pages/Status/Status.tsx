import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Content } from '@layouts/Content';
import { Subtitle, Title } from '@components/Text';
import { Spacer } from '@components/Spacer';
import { useOrdersTableColumns } from '@hooks/useOrdersTableColumns';
import { Table } from '@components/Table';
import { Order, Statistic } from 'types/Order';
import { getOrders, getOrdersStatistic } from '@services/api/orders';
import { Button } from '@components/Button';
import { OrdersChart } from '@widgets/OrdersChart';

export function Status() {
  const columns = useOrdersTableColumns();
  const [orders, setOrders] = useState<Order[]>([]);
  const [statistic, setStatistic] = useState<Statistic>();

  useEffect(() => {
    const asyncEffect = async () => {
      const [orders, statistic] = await Promise.all([
        getOrders(),
        getOrdersStatistic(),
      ]);

      setOrders(orders);
      setStatistic(statistic);
    };

    asyncEffect();
  }, []);

  return (
    <Content>
      <Title>Order Management</Title>
      <Spacer height={10} />
      <Subtitle>Manage your orders here and get an overview of status</Subtitle>
      <Spacer height={30} />
      <Header>
        <Subtitle>Total items in inventory</Subtitle>
        <Button onClick={() => {}}>Print summary</Button>
      </Header>
      <Spacer height={10} />
      {statistic && (
        <OrdersChart
          total={statistic.total}
          completed={statistic.completed}
          pending={statistic.pending}
          cancelled={statistic.cancelled}
        />
      )}
      <Spacer height={30} />
      <Table data={orders} columns={columns} />
    </Content>
  );
}

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
