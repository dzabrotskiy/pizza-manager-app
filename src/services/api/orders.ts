import orders from '@services/mocks/orders.json';
import { Order, Statistic } from 'types/Order';
import orderStatistic from '@services/mocks/orders_statistics.json';

export function getOrders() {
  return new Promise<Order[]>(resolve => {
    setTimeout(() => {
      resolve(orders as Order[]);
    }, 500);
  });
}

export function getOrdersStatistic() {
  return new Promise<Statistic>(resolve => {
    setTimeout(() => {
      resolve(orderStatistic as Statistic);
    }, 500);
  });
}
