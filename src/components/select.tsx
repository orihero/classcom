/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useState} from 'react';
import {
  LayoutAnimation,
  ScrollView,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {ArrowDown, ArrowUp, StudentIcon} from '../assets/icons';
import {COLORS} from '../constants/colors';
import {ThemeContext} from '../utils/themeContext';
import UiText from './text';

export interface SelectItemProps {
  value: any;
  label: string;
}

export interface SelectProps {
  items: SelectItemProps[];
  value?: string | number;
  onChange?: (name: string) => (value: string) => void;
  name?: string;
  title?: string;
  placeholder?: string;
  errors?: any;
  light?: boolean;
  style?: StyleProp<ViewStyle>;
}

const Select = ({
  items,
  onChange,
  value,
  name,
  placeholder,
  title,
  errors,
  style,
  light = false,
}: SelectProps) => {
  const [shouldShow, setShouldShow] = useState(false);
  const onChangeValue = (e: SelectItemProps) => {
    setShouldShow(false);
    onChange && onChange(name || '')(e.value);
  };

  const {theme} = useContext(ThemeContext);
  let activeColor = COLORS[theme];

  let realValue = '';
  if (!!value && !!items && items.length > 0) {
    realValue = items.find(e => e.value === value)?.label || '';
  }
  return (
    <View style={style}>
      <UiText title={title} type="bookRegular18" style={[styles.text]} />
      <TouchableOpacity
        activeOpacity={0.7}
        style={[
          styles.animated,
          light && {backgroundColor: activeColor.selectedBack},
        ]}
        onPress={() => {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
          setShouldShow(!shouldShow);
        }}>
        <View style={{flexDirection: 'row'}}>
          {!light && <StudentIcon style={{marginRight: 10}} />}
          <UiText
            title={realValue || placeholder}
            type="mediumRegular16"
            color="WHITE"
            style={[styles.textSubject, !value && {color: COLORS.WHITE}]}
          />
        </View>
        {shouldShow ? (
          <ArrowDown fill={light ? COLORS.BLUISH_WHITE2 : undefined} />
        ) : (
          <ArrowUp fill={light ? COLORS.BLUISH_WHITE2 : undefined} />
        )}
      </TouchableOpacity>
      <View style={{}}>
        {shouldShow ? (
          <ScrollView
            style={[
              styles.animatedTwo,
              light && {backgroundColor: 'transparent'},
              {
                maxHeight: 200,
                width: '100%',
                zIndex: 10,
                elevation: 1,
              },
            ]}>
            {items.map(e => {
              return (
                <TouchableOpacity
                  key={e.value}
                  style={[
                    styles.button,
                    {backgroundColor: activeColor.selectedBack},
                  ]}
                  onPress={() => onChangeValue(e)}>
                  <UiText
                    style={[
                      styles.textSubject,
                      {color: activeColor.activeTextColor},
                    ]}
                    title={e.label}
                    type="bookRegular14"
                  />
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        ) : null}
      </View>
      {!!errors && !!name && !!errors[name] && (
        <Text style={styles.error}>{errors[name || '']}</Text>
      )}
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  animatedTwo: {
    borderRadius: 10,
    marginTop: 5,
  },
  text: {
    marginVertical: 13,
  },
  textSubject: {
    color: COLORS.GREY_BLACK,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginVertical: 3,
    borderRadius: 10,
  },
  animated: {
    height: 49,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  error: {
    color: COLORS.ORANGE,
  },
});
