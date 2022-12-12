import { useCallback } from 'react';
import styled, { css } from 'styled-components';
import Collapsible from 'react-collapsible';
import { Control, FieldArrayWithId, useController } from 'react-hook-form';

import { Button } from '@components/Button';
import { Field } from '@components/Field';
import type { NewOrder } from 'types/NewOrder';
import { PizzaSize } from 'types/Pizza';
import { Spacer } from '@components/Spacer';
import { Checkbox } from '@components/Checkbox';
import { FlexRow } from '@components/Flex';

type Props = {
  index: number;
  field: FieldArrayWithId<NewOrder, 'pizzas', 'id'>;
  onRemove(): void;
  control: Control<NewOrder>;
};

const toppings = [
  'BACON',
  'PEPPERONI',
  'MUSHROOM',
  'OLIVE',
  'BASIL',
  'SWEETCORN',
  'ONION',
  'TOMATO',
];

export function PizzaForm({ field, index, onRemove, control }: Props) {
  const { field: sizeField } = useController({
    control,
    name: `pizzas.${index}.size`,
  });

  const { field: toppingsField } = useController({
    control,
    name: `pizzas.${index}.toppings`,
  });

  const onToppingClick = useCallback(
    (topping: string) => {
      if (toppingsField.value.includes(topping)) {
        toppingsField.onChange(toppingsField.value.filter(t => t !== topping));
      } else {
        toppingsField.onChange([...toppingsField.value, topping]);
      }
    },
    [toppingsField],
  );

  return (
    <StyledCollapsible
      key={field.id}
      transitionTime={75}
      trigger={
        <Trigger>
          <div>PIZZA {index + 1}</div>
          {index > 0 && (
            <Button isDanger={true} onClick={onRemove}>
              Remove Pizza
            </Button>
          )}
        </Trigger>
      }
    >
      <Field label="Choose size">
        <OptionsList>
          {Object.keys(PizzaSize).map(size => (
            <SizeItem
              key={size}
              isSelected={size === sizeField.value}
              onClick={() => sizeField.onChange(size)}
            >
              {size}
            </SizeItem>
          ))}
        </OptionsList>
      </Field>
      <Field label="Pick your toppings">
        <ToppingsList>
          {toppings.map(topping => {
            const isSelected = toppingsField.value.includes(topping);

            return (
              <SizeItem
                key={topping}
                onClick={() => onToppingClick(topping)}
                isSelected={isSelected}
              >
                <FlexRow>
                  <Checkbox isChecked={isSelected} />
                  <Spacer width={24} />
                  {topping}
                </FlexRow>
              </SizeItem>
            );
          })}
        </ToppingsList>
      </Field>
      <Spacer height={30} />
    </StyledCollapsible>
  );
}

const StyledCollapsible = styled(Collapsible)`
  margin-bottom: 10px;
`;

const Trigger = styled.div`
  width: 100%;
  height: 60px;
  background: rgb(74, 74, 74);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 0 20px;
  color: #fff;
  cursor: pointer;
  border-radius: 4px;
`;

const OptionsList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  flex-wrap: wrap;
`;

const SizeItem = styled.div<{ isSelected?: boolean }>`
  padding: 12px 24px;
  color: #000;
  border: 1px solid rgb(92, 142, 220);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;

  ${({ isSelected }) =>
    isSelected &&
    css`
      background: rgb(92, 142, 220);
      color: #fff;
    `}
`;

const ToppingsList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
`;
