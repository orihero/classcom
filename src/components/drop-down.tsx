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
import {ArrowDown, ArrowUp, StudentIcon} from '../assets/icons';
import {COLORS} from '../constants/COLORS';

interface DropDownProps {
  iconActive?: any;
  iconNoActive?: any;
  dropDown: any;
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
}: DropDownProps) => {
  const [state, setState] = useState(true);
  return (
    <View>
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

const styles = StyleSheet.create({});
