import { PropsWithChildren } from 'react';

import * as Styled from './Layout.sc';

export function Layout({ children }: PropsWithChildren) {
  return <Styled.Container>{children}</Styled.Container>;
}
