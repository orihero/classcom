import {StyleSheet} from 'react-native';

export const FontName = {
  '200': 'FuturaCyrillicLight',
  '400': 'FuturaCyrillicBook',
  '500': 'FuturaCyrillicMedium',
  '600': 'FuturaCyrillicExtraBold',
  '700': 'FuturaCyrillicBold',
};

export const NewFontName = {
  '400': 'Xolonium-Bold',
  '700': 'Xolonium-Regular',
};

export const TYPOGRAPHY = StyleSheet.create({
  default: {
    fontFamily: NewFontName[400],
    fontWeight: '200',
    fontSize: 8,
    lineHeight: 13,
  },
  bookRegular8: {
    fontFamily: NewFontName[400],
    fontWeight: '400',
    fontSize: 8,
    lineHeight: 13,
  },
});
