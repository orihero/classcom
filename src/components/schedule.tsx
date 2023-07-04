import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../constants/colors';

interface Props {
  number: string;
  time: string;
  title: string;
  classNumber: string;
}

const Schedule = ({number, classNumber, time, title}: Props) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={styles.number}>{number}</Text>
        <View style={styles.timeBox}>
          <Text style={styles.timeText}>{time}</Text>
        </View>
        <Text style={styles.itemText}>{title}</Text>
      </View>
      <View style={styles.classBox}>
        <Text style={styles.classText}>{classNumber}</Text>
      </View>
    </View>
  );
};

export default Schedule;

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
  classBox: {
    width: 41,
    height: 33,
    backgroundColor: COLORS.GREEN,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  classText: {
    fontSize: 18,
    fontWeight: '800',
    color: COLORS.WHITE,
  },
  number: {
    fontSize: 17,
    fontWeight: '700',
    color: COLORS.GREY_BLACK,
    marginRight: 5,
  },
});
