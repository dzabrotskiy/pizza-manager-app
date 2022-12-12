import { useCallback } from 'react';
import { useFieldArray, useForm, useWatch } from 'react-hook-form';
import styled from 'styled-components';

import { Content } from '@layouts/Content';
import { Subtitle, Title } from '@components/Text';
import { Divider } from '@components/Divider';
import { Spacer } from '@components/Spacer';
import { Grid } from '@components/Grid';
import { Input } from '@components/Input';
import { Field } from '@components/Field';
import { NewOrder as TNewOrder } from 'types/NewOrder';
import { FlexRow } from '@components/Flex';
import { Button } from '@components/Button';
import { PizzaSize } from 'types/Pizza';
import { PizzaForm } from '@widgets/PizzaForm';
import { OrderSummary } from '@widgets/OrderSummary';

export function NewOrder() {
  const { register, control, handleSubmit } = useForm<TNewOrder>({
    defaultValues: {
      pizzas: [
        {
          size: PizzaSize.LARGE,
          toppings: [],
        },
      ],
    },
  });

  const order = useWatch({
    control,
  });

  const { append, remove, fields } = useFieldArray({
    control,
    name: 'pizzas',
  });

  const appendPizza = useCallback(() => {
    append({
      size: PizzaSize.LARGE,
      toppings: [],
    });
  }, []);

  const onSubmit = useCallback((data: TNewOrder) => {
    console.log({ data });
  }, []);

  return (
    <Content>
      <Title>PIZZA ORDER</Title>
      <Spacer height={30} />
      <Subtitle>Basic Information</Subtitle>
      <Divider />
      <Grid>
        <Field label="Name">
          <Input {...register('name')} />
        </Field>
        <Field label="E-mail Address">
          <Input {...register('email')} />
        </Field>
      </Grid>
      <Grid>
        <Field label="Address">
          <Input {...register('address')} />
        </Field>
        <Field label="Contact Number">
          <Input {...register('number')} />
        </Field>
      </Grid>
      <Spacer height={30} />
      <StyledRow>
        <Subtitle>Choose your pizza</Subtitle>
        <Button isSuccess={true} onClick={appendPizza}>
          Add Pizza
        </Button>
      </StyledRow>
      <Spacer height={6} />
      {fields.map((field, index) => (
        <PizzaForm
          key={field.id}
          field={field}
          index={index}
          onRemove={() => remove(index)}
          control={control}
        />
      ))}
      <OrderSummary order={order} />
      <Footer>
        <Button onClick={handleSubmit(onSubmit)}>Place Order</Button>
      </Footer>
    </Content>
  );
}

const StyledRow = styled(FlexRow)`
  justify-content: space-between;
  align-items: center;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
`;
