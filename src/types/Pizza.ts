export enum PizzaSize {
  LARGE = 'LARGE',
  MEDIUM = 'MEDIUM',
  SMALL = 'SMALL',
}

export type Pizza = {
  size: PizzaSize;
  toppings: string[];
};
