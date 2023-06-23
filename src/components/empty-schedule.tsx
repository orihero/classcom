import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../constants/COLORS';

interface Props {
  number: string;
  onPress: () => void;
}

const EmptySchedule = ({number, onPress}: Props) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={styles.number}>{number}</Text>
        <Text style={styles.itemText}>Нет параметров</Text>
      </View>
      <TouchableOpacity onPress={onPress} style={styles.classBox}>
        <Text style={styles.classText}>Добавить</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EmptySchedule;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderColor: 'rgba(121, 121, 121, 0.15)',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
  },
  timeText: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.WHITE,
  },
  itemText: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.GREY_BLACK,
    marginLeft: 8,
  },
  timeBox: {
    width: 101,
    height: 33,
    borderRadius: 5,
    backgroundColor: COLORS.GREEN,
    alignItems: 'center',
    justifyContent: 'center',
  },
  classBox: {},
  classText: {
    fontSize: 18,
    fontWeight: '800',
    color: COLORS.BLUE,
  },
  number: {
    fontSize: 17,
    fontWeight: '700',
    color: COLORS.GREY_BLACK,
    marginRight: 5,
  },
});
