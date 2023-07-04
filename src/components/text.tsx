import {COLORS} from '../constants/colors';
import {TYPOGRAPHY} from '../constants/typography';
import {FC} from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';
import {BaseText, PaddingProps} from '../types';

type TextProps = BaseText &
  PaddingProps & {
    title?: string;
    style?: StyleProp<TextStyle>;
    isActive?: boolean;
    type?: keyof typeof TYPOGRAPHY;
    color?: keyof typeof COLORS;
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
  ...res
}) => {
  if (!isActive || !title) {
    // eslint-disable-next-line react/react-in-jsx-scope
    return <Text />;
  }

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <Text
      style={[
        TYPOGRAPHY[type],
        {
          textAlign: textPosition,
          color: COLORS[color],
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
      testID={title}
      {...res}>
      {title}
    </Text>
  );
};

export default UiText;
