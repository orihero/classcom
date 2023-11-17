import { View, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import { COLORS } from '../constants/COLORS';
import UiText from './text';
import { ThemeContext } from '../utils/themeContext';

interface Props {
  number: string;
  onPress: (e: any) => void;
}

const EmptySchedule = ({ number, onPress }: Props) => {
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


  return <View style={newStyle.container}>
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <UiText style={newStyle.number} title={number} type="default" />
    </View>
    <View style={newStyle.middle}>
      <UiText style={[newStyle.lessonName]} title={"Нет параметров"} type="Bold18" />
    </View>
    <View style={newStyle.right}>
      <TouchableOpacity onPress={() => onPress(number)} style={styles.classBox}>
        <UiText style={newStyle.lessonName} title={"Добавить"} type="Bold18" />
      </TouchableOpacity>
      {/* <View style={newStyle.rightPill}></View> */}
    </View>
  </View>

  return (
    <View style={[styles.container,]}>
      <View style={styles.card}>
        <UiText style={styles.number} title={number + '.'} type="Bold18" />
        <UiText style={styles.itemText} title="Нет параметров" type="Bold18" />
      </View>
      <TouchableOpacity onPress={() => onPress(number)} style={styles.classBox}>
        <UiText style={styles.classText} title="Добавить" type="Bold18" />
      </TouchableOpacity>
    </View>
  );
};

export default EmptySchedule;
