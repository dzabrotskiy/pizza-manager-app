import { PropsWithChildren } from 'react';

import { Container } from '@layouts/Content/Content.sc';

export function Content({ children }: PropsWithChildren) {
  return <Container>{children}</Container>;
}
