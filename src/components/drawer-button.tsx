import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import UiText from './text';

interface DrawerProps {
  text: string;
  icon: any;
  onPress: () => void;
  textColor?: string;
}

const DrawerButton = ({text, icon, onPress, textColor}: DrawerProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {icon}
      <UiText
        title={text}
        themeColor={textColor}
        type="Bold16"
        style={styles.text}
      />
    </TouchableOpacity>
  );
};

export default DrawerButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'center',
    paddingVertical: 10,
    marginVertical: 5,
  },
  text: {
    marginLeft: 10,
  },
});
