import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

import Bg from './components/Bg';
import { useEffect } from 'react';

const Wrapper = styled.View`
  height: 100%;
  width: 100%;
`;

export default function App() {
  useEffect(() => {
    StatusBar.setHidden(true);
  }, []);

  return (
    <Wrapper>
      <Bg />
    </Wrapper>
  );
}
