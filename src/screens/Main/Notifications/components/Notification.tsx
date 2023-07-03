import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CalendarIcon} from '../../../../assets/icons';
import {COLORS} from '../../../../constants/COLORS';
import {NotifactionType} from '../../../../api/types';

const Notification: FC<NotifactionType> = ({message, type, id}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{message}</Text>
      <Text style={styles.description}>{id}</Text>
      <View style={styles.dateContainer}>
        <CalendarIcon size={16} stroke={COLORS.GREY_ONE} />
        <Text style={styles.date}>{type}</Text>
      </View>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: COLORS.WHITE,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 30,
  },
  title: {
    color: COLORS.GREY_BLACK,
    fontSize: 20,
    fontWeight: '700',
  },
  description: {
    fontSize: 13,
    color: COLORS.GREY,
    fontWeight: '400',
    marginTop: 17,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 23,
  },
  date: {
    fontSize: 15,
    fontWeight: '500',
    color: COLORS.GREY_ONE,
    marginLeft: 8,
  },
});
