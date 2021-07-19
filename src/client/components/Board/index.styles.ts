import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 1rem solid #14bdac;
  background: #14bdac;
  width: 500px;
  height: 500px;
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  gap: 1rem;
  margin: auto;
`;