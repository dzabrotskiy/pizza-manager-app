import styled from 'styled-components';

type Props = {
  isChecked?: boolean;
  onCheck?(value: boolean): void;
};

export function Checkbox({ isChecked, onCheck }: Props) {
  return (
    <Container isChecked={isChecked} onClick={() => onCheck?.(!isChecked)}>
      {isChecked && <Indicator />}
    </Container>
  );
}

const Container = styled.div<{ isChecked?: boolean }>`
  width: 24px;
  height: 24px;
  border: 1px solid
    ${props => (props.isChecked ? 'rgb(92, 142, 220)' : '#353535')};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

const Indicator = styled.div`
  width: 14px;
  height: 14px;
  background: rgb(92, 142, 220);
  border-radius: 4px;
`;
