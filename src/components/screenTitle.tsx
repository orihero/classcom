/* eslint-disable react/react-in-jsx-scope */
import {FC} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import UiText from './text';
import {COLORS} from '../constants/colors';

interface ScreenTitleProps {
  title: string;
  leftBtnTitle?: string;
  leftBtnPress?: () => void;
  leftTitleColor?: keyof typeof COLORS;
}

const ScreenTitle: FC<ScreenTitleProps> = ({
  title,
  leftBtnPress,
  leftBtnTitle,
  leftTitleColor,
}) => {
  return (
    <View style={styles.container}>
      <UiText title={title} type="mediumRegular20" color="GREY_BLACK" />
      <TouchableOpacity onPress={leftBtnPress} style={styles.leftBtn}>
        <UiText
          title={leftBtnTitle}
          type="bookRegular18"
          color={leftTitleColor}
        />
      </TouchableOpacity>
    </View>
  );
};
export default ScreenTitle;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6,
  },
  leftBtn: {},
});
