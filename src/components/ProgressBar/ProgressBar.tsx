import styled from 'styled-components/native';

const Wrapper = styled.View`
  user-select: none;
`;

const Shadow = styled.View`
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  position: relative;
  z-index: 1;
  border: 1px red solid;
`;

const ContentWrapper = styled.View`
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 250px;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  color: #fff;
  opacity: 0.65;
`;

const Block = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  /* > * {
    flex: 0 0 auto;
    width: 100%;
    text-align: center;
  } */
`;

const Left = styled(Block)`
  width: 262px;
  flex-shrink: 0;
`;

const Center = styled(Block)`
  width: 100%;
`;

const Right = styled(Block)`
  width: 262px;
  flex-shrink: 0;
`;

const Year = styled.Text`
  // font-family: 'Avenir LT Std 95 Black Oblique';
  font-size: 51px;
  color: #fff;
`;

const MonthWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #020202;
  margin-top: 15px;
`;

const Month = styled.Text`
  // font-family: 'Avenir LT Std 35 Light Oblique';
  font-size: 38px;
  margin-top: 8px;
  color: #fff;
`;

const Day = styled.Text`
  margin-top: 15px;
  font-size: 38px;
  // font-family: 'Avenir LT Std 35 Light Oblique';
  color: #fff;
`;

const Time = styled.View`
  display: flex;
  flex-direction: row;
`;

const HoursOrMinutes = styled.Text`
  // font-family: 'Avenir LT Std 95 Black Oblique';
  font-size: 98px;
  color: #fff;
`;

const Seconds = styled.Text`
  // font-family: 'Avenir LT Std 35 Light';
  font-style: italic;
  font-size: 59px;
  padding-left: 10px;
  color: #fff;
`;

const Progress = styled.View`
  position: relative;
  z-index: 2;
`;

const ProgressBg = styled.View`
  width: 100%;
  height: 30px;
  background: #3d3d3d;
`;

const ProgressWalking = styled.View`
  height: 30px;
  background: #fff;
  margin-top: -30px;
`;

const Percent = styled.Text`
  // font-family: 'Avenir LT Std 95 Black Oblique';
  font-size: 51px;
  color: #fff;
`;

const PercentFullWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #020202;
  margin-top: 15px;
`;

const PercentFull = styled.Text`
  // font-family: 'Avenir LT Std 35 Light Oblique';
  font-size: 38px;
  margin-top: 8px;
  color: #fff;
`;

export default function ProgressBar () {
  return (
    <Wrapper>
      <Shadow>
        <ContentWrapper>
          <Left>
            <Year>
              2022
            </Year>

            <MonthWrapper>
              <Month>
                31.12
              </Month>
            </MonthWrapper>
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
              <ProgressBg />

              <ProgressWalking style={{width: '50%'}} />
            </Progress>

            <Day>
              200 of 365 monochrome&nbsp;days
            </Day>
          </Center>

          <Right>
            <Percent>
              99%
            </Percent>

            <PercentFullWrapper>
              <PercentFull>
                99.9999999%
              </PercentFull>
            </PercentFullWrapper>
          </Right>
        </ContentWrapper>
      </Shadow>
    </Wrapper>
  );
};
