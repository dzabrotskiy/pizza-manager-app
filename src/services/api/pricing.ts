import price from '@services/mocks/price.json';
import { Pricing } from 'types/Pricing';

export function getPricing() {
  return new Promise<Pricing>(resolve => {
    setTimeout(() => {
      resolve(price);
    }, 500);
  });
}
