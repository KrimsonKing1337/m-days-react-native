import { Text, useWindowDimensions } from 'react-native';
import styled from 'styled-components/native';
import { getFontSizePx } from '../../utils/getFontSize';

const Wrapper = styled.View`
  user-select: none;
`;

const Shadow = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
`;

const ContentWrapper = styled.View`
  width: 100%;
  height: 250px;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  color: #fff;
  opacity: 0.65;
`;

const Block = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Left = styled(Block)`
  max-width: 30%;
`;

const Center = styled(Block)`
  flex-shrink: 1;
`;

const Right = styled(Block)`
  max-width: 30%;
`;

const Year = styled.Text`
  // font-family: 'Avenir LT Std 95 Black Oblique';
  font-size: ${getFontSizePx(51)};
  color: #fff;
`;

const Month = styled.Text`
  // font-family: 'Avenir LT Std 35 Light Oblique';
  font-size: ${getFontSizePx(38)};
  // margin-top: 15px;
  padding-top: 8px;
  color: #fff;
  background: #020202;
`;

const Day = styled.Text`
  // margin-top: 15px;
  font-size: ${getFontSizePx(38)};
  // font-family: 'Avenir LT Std 35 Light Oblique';
  color: #fff;
`;

const Time = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

const HoursOrMinutes = styled.Text`
  // font-family: 'Avenir LT Std 95 Black Oblique';
  font-size: ${getFontSizePx(98)};
  color: #fff;
`;

const Seconds = styled.Text`
  // font-family: 'Avenir LT Std 35 Light';
  font-style: italic;
  font-size: ${getFontSizePx(59)};
  padding-left: 10px;
  top: -5px;
  color: #fff;
`;

const Progress = styled.View`
  width: 100%;
  height: 30px;
  background: #3d3d3d;
`;

const ProgressWalking = styled.View`
  height: 30px;
  background: #fff;
`;

const Percent = styled.Text`
  // font-family: 'Avenir LT Std 95 Black Oblique';
  font-size: ${getFontSizePx(51)};
  color: #fff;
`;

const PercentFull = styled.Text`
  // font-family: 'Avenir LT Std 35 Light Oblique';
  font-size: ${getFontSizePx(38)};
  background: #020202;
  // margin-top: 15px;
  padding-top: 8px;
  color: #fff;
`;

export default function ProgressBar() {
  const { width, height } = useWindowDimensions();

  return (
    <Wrapper>
      <Text style={{position: 'absolute'}}>
        width: {width}
        {'\n'}
        height: {height}
      </Text>

      <Shadow>
        <ContentWrapper>
          <Left>
            <Year>
              2022
            </Year>

            <Month>
              31 December
            </Month>
          </Left>

          <Center>
            <Time>
              <HoursOrMinutes>
                22:
              </HoursOrMinutes>

              <HoursOrMinutes>
                22
              </HoursOrMinutes>

              <Seconds>
                22
              </Seconds>
            </Time>

            <Progress>
              <ProgressWalking style={{width: '50%'}} />
            </Progress>

            <Day>
              200 of 365 monochrome&nbsp;days
            </Day>
          </Center>

          <Right>
            <Percent>
              99.34%
            </Percent>

            <PercentFull>
              99.3465263%
            </PercentFull>
          </Right>
        </ContentWrapper>
      </Shadow>
    </Wrapper>
  );
}
