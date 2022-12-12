import { useMemo } from 'react';
import styled from 'styled-components';

import { Spacer } from '@components/Spacer';
import { percentage } from '@services/utils/percentage';

type Props = {
  label: string;
  stroke: string;
  total: number;
  value: number;
};

export function OrdersStatisticChart({ label, stroke, value, total }: Props) {
  const valuePercentage = useMemo(() => {
    return percentage(value, total);
  }, []);

  const dashOffset = useMemo(() => {
    const originDashArray = 295;
    return originDashArray - (originDashArray * valuePercentage) / 100;
  }, [percentage]);

  return (
    <Container>
      <Wrapper>
        <svg viewBox="-50 -50 100 100" role="presentation">
          <circle
            r="47"
            cx="0"
            cy="0"
            strokeLinecap="round"
            strokeWidth="6"
            stroke="rgba(0,0,0,.06)"
            style={{
              strokeDasharray: '295.31px, 295.31px',
              strokeDashoffset: 0,
              transform: 'rotate(-90deg)',
              transformOrigin: '0px 0px',
              transition:
                'stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s ease 0s, stroke-width 0.06s ease 0.3s, opacity 0.3s ease 0s',
              fillOpacity: 0,
            }}
          />
          <circle
            r="47"
            cx="0"
            cy="0"
            strokeLinecap="round"
            strokeWidth="6"
            opacity="1"
            stroke={stroke}
            style={{
              strokeDasharray: '295.31px, 295.31',
              strokeDashoffset: dashOffset,
              transform: 'rotate(-90deg)',
              transformOrigin: '0px 0px',
              transition:
                'stroke-dashoffset 0s ease 0s, stroke-dasharray 0s ease 0s, stroke ease 0s, stroke-width ease 0.3s, opacity ease 0s',
              fillOpacity: 0,
            }}
          />
        </svg>
        <Title>{value}</Title>
      </Wrapper>
      <Spacer height={10} />
      <Label>{label}</Label>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
`;

const Title = styled.span`
  position: absolute;
  inset-block-start: 50%;
  inset-inline-start: 50%;
  width: 100%;
  margin: 0;
  padding: 0;
  color: #000;
  line-height: 1;
  white-space: normal;
  text-align: center;
  transform: translate(-50%, -50%);
`;

const Label = styled.div`
  font-size: 18px;
`;
