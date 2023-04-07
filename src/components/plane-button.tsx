import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../constants/COLORS';

interface PlaneProps {
  testingTitle?: string;
  deleteTitle?: string;
  authorTitle?: string;
  nameTitle?: string;
  lessonTitle?: string;
  onPress?: () => void;
}

const PlaneButton = ({
  testingTitle,
  deleteTitle,
  authorTitle,
  nameTitle,
  lessonTitle,
  onPress,
}: PlaneProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={styles.container}>
      <View style={styles.first}>
        <Text style={styles.textName}>{testingTitle}</Text>
        <TouchableOpacity>
          <Text style={styles.textDelete}>{deleteTitle}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.second}>
        <Text style={styles.text}>{authorTitle}</Text>
        <View style={styles.box}>
          <Text style={styles.title}>{nameTitle}</Text>
          <Text style={styles.lessonName}>{lessonTitle}</Text>
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
