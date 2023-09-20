/* eslint-disable react/react-in-jsx-scope */
import {COLORS} from '../constants/colors';
import {TYPOGRAPHY} from '../constants/typography';
import {FC, memo, useMemo} from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';
import {BaseText, PaddingProps} from '../types';
import {useSelector} from 'react-redux';
import {sliderRangeSelector} from '../store/slices/sliderRange';

type TextProps = BaseText &
  PaddingProps & {
    title?: string;
    style?: StyleProp<TextStyle>;
    isActive?: boolean;
    type?: keyof typeof TYPOGRAPHY;
    color?: keyof typeof COLORS;
    themeColor?: string;
  };

const UiText: FC<TextProps> = ({
  title,
  style,
  themeColor,
  paddingTop,
  paddingLeft,
  paddingRight,
  paddingBottom,
  textTransform,
  color = 'WHITE',
  isActive = true,
  paddingVertical,
  type = 'default',
  paddingHorizontal,
  textPosition = 'auto',
  ...res
}) => {
  const store = useSelector(sliderRangeSelector);

  const fontSize = useMemo(
    () => TYPOGRAPHY[type].fontSize * (store.value / 100 + 1) || 10,
    [store.value, type],
  );

  if (!isActive || !title) {
    return <Text />;
  }

  return (
    <Text
      style={[
        TYPOGRAPHY[type],
        //@ts-ignore
        {
          textAlign: textPosition,
          color: themeColor ? themeColor : COLORS[color],
          fontSize,
          paddingLeft,
          paddingRight,
          paddingBottom,
          paddingTop,
          paddingHorizontal,
          paddingVertical,
          textTransform,
        },
        style,
      ]}
      {...res}>
      {title}
    </Text>
  );
};

export default memo(UiText);
