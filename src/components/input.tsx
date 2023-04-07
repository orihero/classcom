import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {EyesIcon} from '../assets/icons';
import {COLORS} from '../constants/COLORS';

interface IProps {
  name?: string;
  multiline?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  placeholderColor?: string;
  disablePlaceholder?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  eyes?: boolean;
  icon?: any;
  dark?: boolean;
}

const Input = ({
  value,
  onChange,
  multiline,
  placeholder,
  placeholderColor = COLORS.GREY,
  disablePlaceholder,
  containerStyle,
  inputStyle,
  eyes,
  name,
  icon,
  dark,
}: IProps) => {
  return (
    <View style={{marginHorizontal: 20}}>
      <Text style={[styles.text, dark && styles.darkText]}>{name}</Text>
      <View style={[styles.container, containerStyle]}>
        {icon && icon}
        <TextInput
          multiline={multiline}
          value={value}
          onChangeText={onChange}
          placeholder={!disablePlaceholder ? placeholder : undefined}
          placeholderTextColor={placeholderColor}
          textAlignVertical={'center'}
          style={[styles.input, inputStyle]}
        />
        {eyes ? (
          <TouchableOpacity activeOpacity={0.6}>
            <EyesIcon />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 8,
    backgroundColor: COLORS.WHITE_ONE,
    height: 49,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    flex: 1,
    color: COLORS.GREY_BLACK,
    fontSize: 13,
    fontWeight: '500',
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 4,
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
    color: COLORS.GREY,
    marginVertical: 13,
  },
  darkText: {
    color: COLORS.GREY_BLACK,
  },
});
