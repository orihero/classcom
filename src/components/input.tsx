import React, {useContext, useState} from 'react';
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
import {PaddingHorizantal} from '../constants/sizes';
import {ThemeContext} from '../utils/themeContext';
import UiText from './text';

interface IProps {
  name?: string;
  title?: string;
  multiline?: boolean;
  value?: string;
  onChange?: (key?: string) => (value: string) => void;
  placeholder?: string;
  placeholderColor?: string;
  disablePlaceholder?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  parentContainerStyle?: StyleProp<ViewStyle>;
  type?: 'text' | 'password' | 'phone' | 'number';
  inputStyle?: StyleProp<TextStyle>;
  eyes?: string;
  icon?: any;
  dark?: boolean;
  errors?: any;
}

const Input = ({
  value,
  onChange,
  multiline,
  placeholder,
  placeholderColor = COLORS.GREY,
  disablePlaceholder,
  containerStyle,
  parentContainerStyle,
  inputStyle,
  type,
  eyes,
  title,
  icon,
  dark,
  name,
  errors,
}: IProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(!!eyes);
  const {theme} = useContext(ThemeContext);
  let activeColor = COLORS[theme];

  const onEyePress = () => {
    setIsPasswordVisible(e => !e);
  };

  const renderInput = () => {
    switch (type) {
      case 'phone':
        return (
          <TextInput
            keyboardType="phone-pad"
            value={value}
            onChangeText={onChange && onChange(name)}
            placeholder={!disablePlaceholder ? placeholder : undefined}
            placeholderTextColor={placeholderColor}
            textAlignVertical={'center'}
            style={[styles.input, inputStyle, {color: activeColor.textColor}]}
            secureTextEntry={isPasswordVisible}
          />
        );
      case 'password':
        return (
          <TextInput
            value={value}
            onChangeText={onChange && onChange(name)}
            placeholder={!disablePlaceholder ? placeholder : undefined}
            placeholderTextColor={placeholderColor}
            textAlignVertical={'center'}
            style={[styles.input, inputStyle, {color: activeColor.textColor}]}
            secureTextEntry={isPasswordVisible}
          />
        );
      default:
        return (
          <TextInput
            multiline={multiline}
            value={value}
            onChangeText={onChange && onChange(name)}
            placeholder={!disablePlaceholder ? placeholder : undefined}
            placeholderTextColor={placeholderColor}
            textAlignVertical={'center'}
            style={[styles.input, inputStyle, {color: activeColor.textColor}]}
            secureTextEntry={isPasswordVisible}
          />
        );
    }
  };

  return (
    <View style={[styles.parentContainer, parentContainerStyle]}>
      <UiText
        style={[styles.text, dark && styles.darkText]}
        title={title}
        type="bookOblRegular16"
      />
      <View style={[styles.container, containerStyle]}>
        {icon && icon}
        {renderInput()}
        {eyes ? (
          <TouchableOpacity activeOpacity={0.6} onPress={onEyePress}>
            <EyesIcon fill={eyes ?? null} />
          </TouchableOpacity>
        ) : null}
      </View>
      {!!errors && !!name && !!errors[name] && (
        <Text style={styles.error}>{errors[name || '']}</Text>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  parentContainer: {},
  container: {
    flexDirection: 'row',
    borderRadius: 8,
    backgroundColor: COLORS.WHITE_ONE,
    height: 49,
    alignItems: 'center',
    paddingHorizontal: PaddingHorizantal,
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
    color: COLORS.GREY,
    marginVertical: 13,
  },
  darkText: {
    color: COLORS.GREY_BLACK,
  },
  error: {
    color: COLORS.ORANGE,
  },
});
