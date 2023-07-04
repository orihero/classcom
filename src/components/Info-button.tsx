import {StyleSheet} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS} from '../constants/colors';
import UiText from './text';

interface ProgramProps {
  title: string;
  icon: any;
  onPress: () => void;
}
const InfoButton = ({title, icon, onPress}: ProgramProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
      activeOpacity={0.7}>
      {icon}
      <UiText style={styles.title} title={title} type="mediumRegular20" />
    </TouchableOpacity>
  );
};

export default InfoButton;
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.14,
    shadowRadius: 2.27,
    elevation: 10,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 25,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  title: {
    fontSize: 17,
    color: COLORS.GREY_BLACK,
    fontWeight: '700',
    marginLeft: 10,
  },
});
