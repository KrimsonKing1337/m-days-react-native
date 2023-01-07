// import { Dimensions } from 'react-native';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

// const baseWidth = 1080;
// const baseHeight = 1920;

// const windowWidth = Dimensions.get('window').width;

export const getDpWithoutSuffix = (n: number, baseWidth = 1080) => {
  const normSize = n / baseWidth * 100;

  return wp(normSize);
};

export const getDp = (n: number, baseWidth = 1080) => {
  const size = getDpWithoutSuffix(n, baseWidth);

  return `${size}px`;
};
