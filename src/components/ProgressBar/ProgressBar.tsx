import { useEffect, useState } from 'react';
import { Text, useWindowDimensions } from 'react-native';

import styled from 'styled-components/native';

import { getDp } from 'utils/getDp';
import { twoDigitsAlways } from 'utils/twoDigitsAlways';

import { getValues } from './utils';

const Wrapper = styled.View`
  user-select: none;
  
  position: absolute;
  z-index: 2;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

const Shadow = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
`;

const ContentWrapper = styled.View`
  width: 100%;
  height: ${getDp(250)};
  max-width: ${getDp(1200)};
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
  font-size: ${getDp(51)};
  color: #fff;
`;

const Month = styled.Text`
  // font-family: 'Avenir LT Std 35 Light Oblique';
  font-size: ${getDp(38)};
  margin-top: ${getDp(15)};
  padding-top: ${getDp(8)};
  color: #fff;
  background: #020202;
`;

const Day = styled.Text`
  // font-family: 'Avenir LT Std 35 Light Oblique';
  font-size: ${getDp(38)};
  margin-top: ${getDp(15)};
  color: #fff;
`;

const Time = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

const HoursOrMinutes = styled.Text`
  // font-family: 'Avenir LT Std 95 Black Oblique';
  font-size: ${getDp(98)};
  color: #fff;
`;

const Seconds = styled.Text`
  // font-family: 'Avenir LT Std 35 Light';
  font-size: ${getDp(59)};
  font-style: italic;
  padding-left: ${getDp(10)};
  top: -5px;
  color: #fff;
`;

const Progress = styled.View`
  width: 100%;
  // height: 30px;
  height: ${getDp(45)};
  background: #3d3d3d;
`;

const ProgressWalking = styled.View`
  // height: 30px;
  height: ${getDp(45)};
  background: #fff;
`;

const Percent = styled.Text`
  // font-family: 'Avenir LT Std 95 Black Oblique';
  font-size: ${getDp(51)};
  color: #fff;
`;

const PercentFull = styled.Text`
  // font-family: 'Avenir LT Std 35 Light Oblique';
  font-size: ${getDp(38)};
  background: #020202;
  margin-top: ${getDp(15)};
  padding-top: ${getDp(8)};
  color: #fff;
`;

let interval: ReturnType<typeof setInterval> | null = null;

export default function ProgressBar() {
  const initValues = getValues();

  const { width, height } = useWindowDimensions();
  const [values, setValues] = useState(initValues);

  useEffect(() => {
    interval = setInterval(() => {
      const newValues = getValues();

      setValues(newValues);
    }, 100);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, []);

  const {
    year,
    day,
    monthText,
    hours,
    minutes,
    seconds,
    progressFull,
    dayCount,
    daysInYear,
    progressShort,
  } = values;

  const hoursToPrint = twoDigitsAlways(hours);
  const minutesToPrint = twoDigitsAlways(minutes);
  const secondsToPrint = twoDigitsAlways(seconds);

  return (
    <Wrapper>
      <Shadow>
        <ContentWrapper>
          <Left>
            <Year>
              {year}
            </Year>

            <Month>
              {`${day} ${monthText}`}
            </Month>
          </Left>

          <Center>
            <Time>
              <HoursOrMinutes>
                {`${hoursToPrint}:`}
              </HoursOrMinutes>

              <HoursOrMinutes>
                {minutesToPrint}
              </HoursOrMinutes>

              <Seconds>
                {secondsToPrint}
              </Seconds>
            </Time>

            <Progress>
              <ProgressWalking style={{ width: `${progressFull}%` }} />
            </Progress>

            <Day>
              {`${dayCount} of ${daysInYear} monochrome days`}
            </Day>
          </Center>

          <Right>
            <Percent>
              {`${progressShort}%`}
            </Percent>

            <PercentFull>
              {`${progressFull}%`}
            </PercentFull>
          </Right>
        </ContentWrapper>
      </Shadow>
    </Wrapper>
  );
}
