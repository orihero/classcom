import React, {useState} from 'react';
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
if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}
const activeColor = COLORS.BLUE;
const inActiveColor = COLORS.BLUE;
export default function Active_Button() {
  const [toggleActive, setToggle] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Push уведомления</Text>
      <TouchableOpacity
        style={[styles.toggleContainer]}
        onPress={() => {
          LayoutAnimation.easeInEaseOut();
          setToggle(!toggleActive);
        }}
        activeOpacity={1}>
        <View
          style={[
            styles.toggleBtn,
            toggleActive
              ? {backgroundColor: activeColor, alignSelf: 'flex-end'}
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
