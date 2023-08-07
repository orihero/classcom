import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

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
      <Text style={[styles.text, {color: textColor}]}>{text}</Text>
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
    fontSize: 16,
    fontWeight: '700',
  },
});
