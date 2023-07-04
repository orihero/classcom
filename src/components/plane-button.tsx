import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  StyleProp,
  TextStyle,
} from 'react-native';
import React from 'react';
import {COLORS} from '../constants/colors';
import UiText from './text';

interface PlaneProps {
  testingTitle?: string;
  deleteTitle?: string;
  authorTitle?: string;
  nameTitle?: string;
  lessonTitle?: string;
  disable?: boolean;
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

const PlaneButton = ({
  testingTitle,
  deleteTitle,
  authorTitle,
  nameTitle,
  lessonTitle,
  disable,
  style,
  textStyle,
  onPress,
}: PlaneProps) => {
  return (
    <TouchableOpacity
      disabled={disable}
      onPress={onPress}
      activeOpacity={0.7}
      style={[styles.container, style]}>
      <View style={styles.first}>
        <UiText
          style={[styles.textName, textStyle]}
          title={testingTitle}
          type="mediumRegular12"
        />
        <TouchableOpacity>
          <Text style={styles.textDelete}>{deleteTitle}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.second}>
        <UiText
          style={styles.text}
          title={authorTitle}
          type="mediumRegular12"
        />
        <View style={styles.box}>
          <UiText
            style={[styles.title, textStyle]}
            title={nameTitle}
            type="mediumRegular12"
          />
          <UiText
            style={[styles.lessonName, textStyle]}
            title={lessonTitle}
            type="mediumRegular12"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PlaneButton;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 20,
    paddingVertical: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.27,

    elevation: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  first: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  second: {
    marginTop: 20,
  },
  lessonName: {
    fontSize: 15,
    fontWeight: '500',
    color: COLORS.BLUE,
  },
  textName: {
    fontSize: 17,
    fontWeight: '700',
    color: COLORS.GREY_BLACK,
  },
  textDelete: {
    fontSize: 17,
    fontWeight: '500',
    color: COLORS.GREY,
  },
  title: {
    fontSize: 17,
    fontWeight: '500',
    color: COLORS.GREY_BLACK,
  },
  text: {
    fontSize: 15,
    fontWeight: '400',
    color: COLORS.GREY,
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
});
