import styled from 'styled-components';

type Status = 'success' | 'danger' | 'normal';

export const TextButton = styled.div<{ status?: Status }>`
  cursor: pointer;
  text-decoration: underline;
  color: ${props =>
    props.status === 'success'
      ? 'rgb(172, 220, 117)'
      : props.status === 'danger'
      ? '#f00'
      : 'rgb(92, 142, 220)'};
`;
