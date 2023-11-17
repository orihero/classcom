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
import { COLORS } from '../constants/COLORS';
import UiText from './text';

interface PlaneProps {
  testingTitle?: string;
  deleteBtn?: boolean;
  authorTitle?: string;
  nameTitle?: string;
  lessonTitle?: string;
  disable?: boolean;
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  handledeleted?: () => void;
  onPress?: () => void;
}

const PlaneButton = ({
  testingTitle,
  deleteBtn,
  authorTitle,
  lessonTitle,
  disable,
  style,
  textStyle,
  onPress,
  handledeleted,
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
        {deleteBtn && (
          <TouchableOpacity onPress={handledeleted}>
            <Text style={[styles.textDelete, { color: "#68AEA3" }]}>Удалить</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.second}>
        {authorTitle && (
          <UiText style={[styles.text, { color: "#68AEA3" }]} title="Автор" type="mediumRegular12" />
        )}
        <View style={styles.box}>
          <UiText
            style={[styles.title, textStyle]}
            title={authorTitle}
            type="mediumRegular12"
          />
          <UiText
            style={[styles.lessonName, textStyle]}
            title={lessonTitle}
            type="mediumRegular24"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PlaneButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 15,
    paddingVertical: 15,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.2,
    // shadowRadius: 3.27,

    // elevation: 10,
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
    alignItems: 'center',
  },
});
