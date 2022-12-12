import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import * as Styled from './Button.sc';

type Props = PropsWithChildren<{
  onClick(): void;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  isDanger?: boolean;
  isSuccess?: boolean;
}>;

export function Button({
  children,
  onClick,
  type,
  isDanger,
  isSuccess,
}: Props) {
  return (
    <Styled.StyledButton
      isSuccess={isSuccess}
      isDanger={isDanger}
      type={type}
      onClick={onClick}
    >
      {children}
    </Styled.StyledButton>
  );
}
