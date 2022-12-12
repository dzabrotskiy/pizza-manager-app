import { PropsWithChildren } from 'react';
import styled from 'styled-components';

type Props = PropsWithChildren<{
  onClick?(): void;
  className?: string;
}>;

export function IconButton({ children, onClick, className }: Props) {
  return (
    <Container className={className} onClick={onClick}>
      {children}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
