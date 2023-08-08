/* eslint-disable react/react-in-jsx-scope */
import {COLORS} from '../constants/colors';
import {TYPOGRAPHY} from '../constants/typography';
import {FC, useMemo} from 'react';
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
  type = 'default',
  isActive = true,
  textPosition = 'auto',
  color = 'WHITE',
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingHorizontal,
  paddingVertical,
  textTransform,
  themeColor,
  ...res
}) => {
  const store = useSelector(sliderRangeSelector);

  const fontSize = useMemo(
    () => TYPOGRAPHY[type].fontSize * (store.value / 100 + 1),
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
          paddingLeft,
          paddingRight,
          paddingBottom,
          paddingTop,
          paddingHorizontal,
          paddingVertical,
          textTransform,
          fontSize,
        },
        style,
      ]}
      testID={title}
      {...res}>
      {title}
    </Text>
  );
};

export default UiText;
