import type { Pizza } from 'types/Pizza';

export type NewOrder = {
  name: string;
  email: string;
  address: string;
  number: string;
  pizzas: Pizza[];
};
