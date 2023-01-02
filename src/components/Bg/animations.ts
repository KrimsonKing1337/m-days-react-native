import { Animated } from 'react-native';

export const playFadeIn = (fadeAnim: Animated.Value, cb?: () => void) => {
  Animated.timing(
    fadeAnim,
    {
      useNativeDriver: true,
      toValue: 1,
      duration: 300,
    }
  ).start(() => {
    if (cb) {
      cb();
    }
  });
};

export const playFadeOut = (fadeAnim: Animated.Value, cb?: () => void) => {
  Animated.timing(
    fadeAnim,
    {
      useNativeDriver: true,
      toValue: 0,
      duration: 300,
    }
  ).start(() => {
    if (cb) {
      cb();
    }
  });
};
