import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../../../../constants/colors';
import {IThematicPlanResource} from '../../../../api/types';

interface props {
  onPress?: () => void;
  content: IThematicPlanResource;
}

const Thematic = ({onPress, content}: props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={styles.container}>
      <View style={styles.firstContainer}>
        <Text style={styles.title}>Предмет</Text>
        <Text style={styles.language}>{content.courseName}</Text>
      </View>
      <View style={styles.secondContainer}>
        <View>
          <Text style={styles.title}>Четверть</Text>
          <Text style={styles.text}>{content.quarter}</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.title}>Класс</Text>
          <Text style={styles.textNumber}>{content.klass}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Thematic;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.27,

    elevation: 10,
    marginHorizontal: 20,
    marginVertical: 5,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  firstContainer: {},
  secondContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  title: {
    fontSize: 15,
    fontWeight: '400',
    color: COLORS.GREY,
  },
  language: {
    fontSize: 17,
    color: COLORS.GREY_BLACK,
    fontWeight: '700',
    marginTop: 5,
  },
  text: {
    fontSize: 17,
    color: COLORS.GREY_BLACK,
    fontWeight: '500',
    marginTop: 5,
  },
  textNumber: {
    fontSize: 17,
    fontWeight: '700',
    color: COLORS.WHITE,
  },
  box: {
    width: 58,
    height: 52,
    borderRadius: 10,
    backgroundColor: COLORS.ORANGE,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
