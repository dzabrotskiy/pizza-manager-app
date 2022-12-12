export type Order = {
  id: string;
  address: string;
  time: string;
  status: 'Pending' | 'Accepted' | 'In-Transit' | 'Completed' | 'Cancelled';
};

export type Statistic = {
  total: number;
  completed: number;
  pending: number;
  cancelled: number;
  totalSales: number;
  onTimeDelivery: number;
  lateDeliveries: number;
  performance: number;
  ordersHistory: [];
};
