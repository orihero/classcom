/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useState} from 'react';
import {
  LayoutAnimation,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from 'react-native';
import {COLORS} from '../../../../constants/colors';
import {ThemeContext} from '../../../../utils/themeContext';
if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

// const activeColor = COLORS.BLUE;
// const inActiveColor = COLORS.BLUE;
export default function Active_Button() {
  const {theme} = useContext(ThemeContext);
  let activeColor = COLORS[theme];

  const inActiveColor = activeColor?.primary;
  const backActiveColor = activeColor.primary;

  const [toggleActive, setToggle] = useState(false);
  return (
    <View style={[styles.container]}>
      <Text style={styles.text}>Push уведомления</Text>
      <TouchableOpacity
        style={[
          styles.toggleContainer,
          {backgroundColor: activeColor.textColor2},
        ]}
        onPress={() => {
          LayoutAnimation.easeInEaseOut();
          setToggle(!toggleActive);
        }}
        activeOpacity={1}>
        <View
          style={[
            styles.toggleBtn,
            toggleActive
              ? {backgroundColor: backActiveColor, alignSelf: 'flex-end'}
              : {backgroundColor: inActiveColor},
          ]}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'center',
    marginVertical: 25,
    justifyContent: 'space-between',
  },
  status: {
    width: 50,
    marginBottom: 20,
    backgroundColor: 'Red',
  },
  toggleContainer: {
    height: 18,
    width: 51,
    borderRadius: 100,
    backgroundColor: 'rgba(90, 143, 187, 0.55);',
    justifyContent: 'center',
  },
  toggleBtn: {
    height: 23,
    width: 23,
    borderRadius: 100,
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
    color: COLORS.GREY,
  },
});
