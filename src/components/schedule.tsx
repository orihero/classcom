import { View, StyleSheet, Animated } from 'react-native';
import React, { useContext } from 'react';
import { COLORS } from '../constants/COLORS';
import UiText from './text';
import SIZES from '../constants/sizes';
import { ThemeContext } from '../utils/themeContext';

interface Props {
  number: string;
  time: string;
  title: string;
  classNumber: string;
  scale: Animated.Value
}

const Schedule = ({ number, classNumber, time, title, scale }: Props) => {
  const { theme } = useContext(ThemeContext);
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

  const newStyle = StyleSheet.create({
    container: {
      padding: 18,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      borderRadius: 20,
      flexDirection: 'row',
      paddingRight: 5,
      marginVertical: 3.5,
      marginHorizontal: 30,
      alignItems: 'center'
    },
    middle: {
      flex: 1,
      marginLeft: 20,

    },
    rightPill: {
      height: 40,
      maxHeight: 100,
      width: 5,
      borderRadius: 20,
      backgroundColor: COLORS.GREEN,
      marginLeft: 20
    },
    number: {
      color: COLORS.WHITE,
      fontSize: 23,
      lineHeight: 30

    },
    right: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    lessonName: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    timeText: {
      fontSize: 18,
      marginTop: 20
    }
  })


  return <Animated.View style={[newStyle.container, /*{ transform: [{ scale }] }*/]}>
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <UiText style={newStyle.number} title={number} type="default" />
    </View>
    <View style={newStyle.middle}>
      <UiText style={[newStyle.lessonName]} title={title} type="Bold18" />
      <UiText style={newStyle.timeText} title={time} type="bookOblRegular18" />
    </View>
    <View style={newStyle.right}>
      <UiText style={newStyle.lessonName} title={classNumber} type="Bold18" />
      <View style={newStyle.rightPill}></View>
    </View>
  </Animated.View>

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
