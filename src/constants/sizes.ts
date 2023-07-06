import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const getSize = (size: number) => size;

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = (size: number) => (width / guidelineBaseWidth) * size;
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;
// https://medium.com/simform-engineering/create-responsive-design-in-react-native-f84522a44365
export {scale, verticalScale, moderateScale};

const SIZES = {
  width,
  height,
};
export const PaddingHorizantal = SIZES.width * 0.05;

export default SIZES;
