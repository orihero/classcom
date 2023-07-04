import {
  View,
  Text,
  TouchableOpacity,
  LayoutAnimation,
  StyleSheet,
  ViewStyle,
  StyleProp,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../constants/colors';

interface DropDownProps {
  iconActive?: any;
  iconNoActive?: any;
  dropDown: any;
  text?: string;
  dropDownInner: any;
  container?: StyleProp<ViewStyle>;
  containerInner?: StyleProp<ViewStyle>;
}

const DropDownAnimated = ({
  iconActive,
  iconNoActive,
  dropDown,
  dropDownInner,
  container,
  containerInner,
  text,
}: DropDownProps) => {
  const [state, setState] = useState(true);
  return (
    <View>
      <Text style={styles.text}>{text}</Text>
      <TouchableOpacity
        activeOpacity={0.7}
        style={[container]}
        onPress={() => {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
          setState(!state);
        }}>
        {dropDown}
        {!state ? iconActive : iconNoActive}
      </TouchableOpacity>

      {!state ? <View style={[containerInner]}>{dropDownInner}</View> : null}
    </View>
  );
};

export default DropDownAnimated;

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    fontWeight: '500',
    color: COLORS.GREY,
    marginLeft: 20,
    marginVertical: 15,
  },
});
