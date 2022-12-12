import { useEffect, useMemo, useState } from 'react';
import type { DeepPartialSkipArrayKey } from 'react-hook-form/dist/types';
import styled from 'styled-components';

import { Spacer } from '@components/Spacer';
import { Subtitle } from '@components/Text';
import { Divider } from '@components/Divider';
import { getPricing } from '@services/api/pricing';
import type { Pricing } from 'types/Pricing';
import type { NewOrder } from 'types/NewOrder';
import { FlexRow } from '@components/Flex';

type Props = {
  order?: DeepPartialSkipArrayKey<NewOrder>;
};

export function OrderSummary({ order }: Props) {
  const [pricing, setPricing] = useState<Pricing>();

  useEffect(() => {
    const asyncEffect = async () => {
      const pricing = await getPricing();
      setPricing(pricing);
    };

    asyncEffect();
  }, []);

  const total = useMemo(() => {
    if (!order?.pizzas || !pricing) return 0;
    const toppingPrice = order.pizzas.reduce(
      (acc, curr) => (curr.toppings?.length ?? 0) + acc,
      0,
    );
    return order.pizzas.length * pricing.pizzaPrice + toppingPrice;
  }, [order]);

  return (
    <div>
      <Spacer height={30} />
      <Subtitle>Summary</Subtitle>
      <Divider />
      <Spacer height={30} />
      {order?.pizzas?.map((pizza, index) => (
        <Item key={index}>
          <div>
            <StyledRow>
              <div>
                {pizza.size} Pizza {index + 1}
              </div>
              <StyledDivider />
              <div>GBP {pricing?.pizzaPrice.toFixed(2)}</div>
            </StyledRow>
          </div>
          <Spacer height={7} />
          <div>
            {pizza.toppings?.map(topping => (
              <StyledRow key={topping}>
                {topping}
                <div>{pricing?.toppingPrice.toFixed(2)}</div>
              </StyledRow>
            ))}
          </div>
        </Item>
      ))}
      <Divider />
      {!!total && (
        <StyledRow>
          <Total>TOTAL</Total>
          <Total>GBP {total.toFixed(2)}</Total>
        </StyledRow>
      )}
    </div>
  );
}

const Item = styled.div`
  margin-bottom: 30px;
`;

const StyledRow = styled(FlexRow)`
  align-items: center;
  justify-content: space-between;
`;

const StyledDivider = styled(Divider)`
  margin: 0 50px;
  flex: 1;
`;

const Total = styled.div`
  font-size: 19px;
  font-weight: 600;
`;
