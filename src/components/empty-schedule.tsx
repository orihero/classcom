import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../constants/colors';
import UiText from './text';

interface Props {
  number: string;
  onPress: () => void;
}

const EmptySchedule = ({number, onPress}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <UiText style={styles.number} title={number} type="Bold18" />
        <UiText style={styles.itemText} title="Нет параметров" type="Bold18" />
      </View>
      <TouchableOpacity onPress={onPress} style={styles.classBox}>
        <UiText style={styles.classText} title="Добавить" type="Bold18" />
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
  card: {
    flexDirection: 'row',
    alignItems: 'center',
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
