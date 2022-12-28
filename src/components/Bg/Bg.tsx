import styled from 'styled-components/native';
import ProgressBar from '../ProgressBar';

const bg = require('../../public/img_bg/1920/0-_t5Je_L9.jpg');

const Wrapper = styled.ImageBackground`
  height: 100%;
  width: 100%;
  background: #fff;
`;

export default function Bg() {
  return (
    <Wrapper source={bg} resizeMode="cover" style={{bottom: 0}}>
      <ProgressBar />
    </Wrapper>
  );
}
