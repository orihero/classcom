import {Icons} from 'assets/icons';
import {TYPOGRAPHY} from 'constants/typography';
import {StyleProp, ViewStyle} from 'react-native';
import {CountryCode} from 'react-native-country-picker-modal';

// Button
export enum ButtonSize {
  LARGE,
  MEDIUM,
  SMALL,
}

export enum ButtonType {
  FILLED,
  OUTLINED,
  SHADED,
}

export interface BaseText {
  textPosition?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
}
// Text
export type TextType = keyof typeof TYPOGRAPHY;

// Icon
export type IconProps = {
  color: string;
  width?: number;
  height?: number;
  size?: number;
  style?: StyleProp<ViewStyle>;
};
export type ColoredIconProps = Omit<IconProps, 'color'>;

export type IconType = keyof typeof Icons;

export interface Phone {
  countryCode: CountryCode;
  countryCodeNumber: string;
  phoneNumber: string;
}

export interface PaddingProps {
  paddingLeft?: number | string;
  paddingTop?: number | string;
  paddingRight?: number | string;
  paddingBottom?: number | string;
  padding?: number | string;
  paddingVertical?: number | string;
  paddingHorizontal?: number | string;
}
