import {Text, StyleSheet} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS} from '../../../../constants/COLORS';

interface ModalProps {
  onPress?: () => void;
  text?: string;
}

const ModalButton = ({onPress, text}: ModalProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ModalButton;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderColor: ' rgba(121, 121, 121, 0.15);',
  },
  text: {
    fontSize: 17,
    fontWeight: '500',
    color: COLORS.GREY_BLACK,
  },
});
