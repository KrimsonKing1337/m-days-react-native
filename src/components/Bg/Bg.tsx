import RNFS from 'react-native-fs';
import { useEffect, useRef, useState } from 'react';
import { Animated } from 'react-native';

import styled from 'styled-components/native';

import { randomInt } from 'utils/randomInt';

import ProgressBar from 'components/ProgressBar';
import { playFadeIn, playFadeOut } from './animations';

const AnimationWrapper = styled(Animated.View)`
  height: 100%;
  width: 100%;
`;

const Wrapper = styled.ImageBackground`
  height: 100%;
  width: 100%;
`;

let interval: ReturnType<typeof setInterval> | null = null;

export default function Bg() {
  const [imgs, setImgs] = useState<string[]>([]);
  const [img, setImg] = useState('');

  const imgPrevRef = useRef('');

  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    (async () => {
      const images = await RNFS.readDirAssets('img/1920');
      const paths = images.map(({ path }) => path);

      setImgs(paths);
    })();
  }, []);

  useEffect(() => {
    if (!imgs.length) {
      return;
    }

    const imgChange = async () => {
      const random = randomInt(0, imgs.length);
      const fileName = imgs[random].substring(imgs[random].lastIndexOf('/'));
      const dest = `${RNFS.CachesDirectoryPath}/${fileName}`;

      await RNFS.copyFileAssets(imgs[random], dest);

      if (!imgPrevRef.current) {
        imgPrevRef.current = dest;
      } else {
        await RNFS.unlink(imgPrevRef.current);

        imgPrevRef.current = dest;
      }

      playFadeOut(fadeAnim, () => {
        setImg(dest);

        playFadeIn(fadeAnim);
      });
    };

    imgChange();

    interval = setInterval(() => {
      imgChange();
    }, 12000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [imgs, fadeAnim]);

  if (!img) {
    return null;
  }

  return (
    <AnimationWrapper style={{opacity: fadeAnim}}>
      <Wrapper source={{uri: `file://${img}`}} resizeMode="cover" style={{bottom: 0}}>
        <ProgressBar />
      </Wrapper>
    </AnimationWrapper>
  );
}
