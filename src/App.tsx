import styled from 'styled-components/native';

import Bg from './components/Bg';

const Wrapper = styled.View`
  width: 100%;
  height: 100%;
  background: #111;
`;

export default function App() {
  return (
    <Wrapper>
      <Bg />
    </Wrapper>
  );
}
