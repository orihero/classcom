import {View, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {COLORS} from '../constants/colors';
import UiText from './text';
import SIZES from '../constants/sizes';
import {ThemeContext} from '../utils/themeContext';

interface Props {
  number: string;
  time: string;
  title: string;
  classNumber: string;
}

const Schedule = ({number, classNumber, time, title}: Props) => {
  const {theme} = useContext(ThemeContext);
  //@ts-ignore
  let activeColor = COLORS[theme];

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
      color: activeColor.textColor,
      marginLeft: 8,
      width: SIZES.width * 0.46,
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
      color: activeColor.textColor,
      marginRight: 5,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <UiText style={styles.number} title={number} type="Bold18" />
        <View style={styles.timeBox}>
          <UiText style={styles.timeText} title={time} type="Bold18" />
        </View>
        <UiText style={[styles.itemText]} title={title} type="Bold18" />
      </View>
      <View style={styles.classBox}>
        <UiText style={styles.classText} title={classNumber} type="Bold18" />
      </View>
    </View>
  );
};

export default Schedule;
