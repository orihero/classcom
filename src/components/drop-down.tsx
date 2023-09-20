import {
  View,
  TouchableOpacity,
  LayoutAnimation,
  StyleSheet,
  ViewStyle,
  StyleProp,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../constants/colors';
import UiText from './text';

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
      <UiText title={text} type="bookOblRegular16" style={styles.text} />
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
    color: COLORS.GREY,
    marginLeft: 20,
    marginVertical: 15,
  },
});
