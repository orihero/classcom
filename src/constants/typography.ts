import {StyleSheet} from 'react-native';

export const FontName = {
  '200': 'FuturaPT-Light',
  '400': 'FuturaPT-Book',
  '500': 'FuturaPT-Medium',
  '600': 'FuturaPT-ExtraBold',
  '700': 'FuturaPT-Bold',
};

export const TYPOGRAPHY = StyleSheet.create({
  default: {
    fontFamily: FontName[200],
    fontWeight: '200',
    fontSize: 8,
    lineHeight: 13,
  },
  regular12: {
    fontFamily: FontName[200],
    fontWeight: '200',
    fontSize: 12,
    lineHeight: 16,
  },
  regular16: {
    fontFamily: FontName[200],
    fontWeight: '200',
    fontSize: 16,
    lineHeight: 22,
  },
  bookRegular8: {
    fontFamily: FontName[400],
    fontWeight: '400',
    fontSize: 8,
    lineHeight: 13,
  },
  bookRegular12: {
    fontFamily: FontName[400],
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
  },
  bookRegular14: {
    fontFamily: FontName[400],
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
  },
  bookRegular16: {
    fontFamily: FontName[400],
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 22,
  },
  bookRegular18: {
    fontFamily: FontName[400],
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 24,
  },
  bookRegular20: {
    fontFamily: FontName[400],
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 26,
  },
  mediumRegular8: {
    fontFamily: FontName[500],
    fontWeight: '400',
    fontSize: 8,
    lineHeight: 13,
  },
  mediumRegular12: {
    fontFamily: FontName[500],
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 16,
  },
  mediumRegular14: {
    fontFamily: FontName[500],
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
  },
  mediumRegular16: {
    fontFamily: FontName[500],
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 22,
  },
  mediumRegular20: {
    fontFamily: FontName[500],
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 24,
  },
  mediumRegular24: {
    fontFamily: FontName[500],
    fontWeight: '500',
    fontSize: 24,
    lineHeight: 28,
  },
  extraBold8: {
    fontFamily: FontName[600],
    fontWeight: '600',
    fontSize: 8,
    lineHeight: 13,
  },
  extraBold12: {
    fontFamily: FontName[600],
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 16,
  },
  extraBold16: {
    fontFamily: FontName[600],
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 22,
  },
  Bold8: {
    fontFamily: FontName[700],
    fontWeight: '700',
    fontSize: 8,
    lineHeight: 13,
  },
  Bold12: {
    fontFamily: FontName[700],
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 16,
  },
  Bold16: {
    fontFamily: FontName[700],
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 22,
  },
  Bold18: {
    fontFamily: FontName[700],
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 20,
  },
  Bold20: {
    fontFamily: FontName[700],
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 20,
  },
  Bold22: {
    fontFamily: FontName[700],
    fontWeight: '700',
    fontSize: 22,
    lineHeight: 28,
  },
});
