import styled from 'styled-components';
import { Subtitle, Title } from '@components/Text';
import { Spacer } from '@components/Spacer';

type Props = {
  label: string;
  value: number;
  color: string;
};

export function ReportItem({ label, value, color }: Props) {
  return (
    <Container>
      <Subtitle>{label}</Subtitle>
      <Spacer height={20} />
      <Title>+{value}%</Title>
      <Spacer height={30} />
      <Line>
        <Indicator style={{ width: `${value}%`, background: color }} />
      </Line>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Line = styled.div`
  width: 100%;
  background: rgb(242, 242, 242);
  height: 10px;
  border-radius: 4px;
`;

const Indicator = styled.div`
  width: 0;
  height: 100%;
  border-radius: 4px;
`;
