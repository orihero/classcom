/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState} from 'react';
import {
  Animated,
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
  selectedBackColor?: string;
  selectTextColor?: string;
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
  selectedBackColor,
  selectTextColor,
  light = false,
}: SelectProps) => {
  const [shouldShow, setShouldShow] = useState(false);
  const onChangeValue = (e: SelectItemProps) => {
    setShouldShow(false);
    onChange && onChange(name || '')(e.value);
  };

  // const {theme} = useContext(ThemeContext);
  // let activeColor = COLORS[theme];

  let realValue = '';
  if (!!value && !!items && items.length > 0) {
    realValue = items.find(e => e.value === value)?.label || '';
  }

  const animationController = useRef(new Animated.Value(0)).current;
  const toogleAnimation = () => {
    const config = {
      duration: 300,
      create: {
        type: LayoutAnimation.Types.linear,
        property: LayoutAnimation.Properties.opacity,
      },
      update: {
        type: LayoutAnimation.Types.linear,
      },
    };
    LayoutAnimation.configureNext(config);
    Animated.timing(animationController, {
      toValue: shouldShow ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const animatedStyle = StyleSheet.create({
    animated: {
      borderRadius: 10,
      borderWidth: 1,
      borderColor: COLORS.BLUE2,
      backgroundColor: selectedBackColor,
    },
  });

  return (
    <View style={style}>
      <UiText title={title} type="bookRegular18" style={[styles.text]} />

      <View style={shouldShow && animatedStyle.animated}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={[styles.animated, {backgroundColor: selectedBackColor}]}
          onPress={() => {
            toogleAnimation();
            setShouldShow(!shouldShow);
          }}>
          <View style={{flexDirection: 'row'}}>
            {!light && <StudentIcon style={{marginRight: 10}} />}
            <UiText
              title={realValue || placeholder}
              type="mediumRegular16"
              color="WHITE"
              style={[styles.textSubject, !value && {color: selectTextColor}]}
            />
          </View>
          {shouldShow ? (
            <ArrowDown fill={light ? COLORS.BLUISH_WHITE2 : undefined} />
          ) : (
            <ArrowUp fill={light ? COLORS.BLUISH_WHITE2 : undefined} />
          )}
        </TouchableOpacity>
        <View
          style={[styles.bottomSection, {backgroundColor: selectedBackColor}]}>
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
                    style={[styles.button]}
                    onPress={() => onChangeValue(e)}>
                    <UiText
                      style={[styles.textSubject, {color: selectTextColor}]}
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
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  animatedTwo: {
    borderRadius: 10,
    marginTop: 5,
  },
  text: {},
  textSubject: {
    color: COLORS.GREY_BLACK,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginVertical: 3,
    borderRadius: 10,
  },
  bottomSection: {
    backgroundColor: 'red',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },

  animated: {
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderRadius: 8,
    overflow: 'hidden',
  },
  error: {
    color: COLORS.ORANGE,
  },
});
