import React, {useState} from 'react';
import {
  LayoutAnimation,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ArrowDown, ArrowUp, StudentIcon} from '../assets/icons';
import {COLORS} from '../constants/colors';

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
}

const Select = ({
  items,
  onChange,
  value,
  name,
  placeholder,
  title,
  errors,
  light = false,
}: SelectProps) => {
  const [shouldShow, setShouldShow] = useState(false);
  const onChangeValue = (e: SelectItemProps) => {
    setShouldShow(false);
    onChange && onChange(name || '')(e.value);
  };

  let realValue = '';
  if (!!value && !!items && items.length > 0) {
    realValue = items.find(e => e.value === value)?.label || '';
  }
  return (
    <View>
      <Text style={[styles.text, light && {color: COLORS.WHITE}]}>{title}</Text>
      <TouchableOpacity
        activeOpacity={0.7}
        style={[styles.animated, light && {backgroundColor: COLORS.BLUE2}]}
        onPress={() => {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
          setShouldShow(!shouldShow);
        }}>
        <View style={{flexDirection: 'row'}}>
          {!light && <StudentIcon style={{marginRight: 10}} />}
          <Text
            style={[
              styles.textSubject,
              !value && {color: COLORS.GREY},
              light && {color: COLORS.BLUISH_WHITE2},
            ]}>
            {realValue || placeholder}
          </Text>
        </View>
        {!shouldShow ? (
          <ArrowDown fill={light ? COLORS.BLUISH_WHITE2 : undefined} />
        ) : (
          <ArrowUp fill={light ? COLORS.BLUISH_WHITE2 : undefined} />
        )}
      </TouchableOpacity>
      <View style={{}}>
        {!!shouldShow ? (
          <ScrollView
            style={[
              styles.animatedTwo,
              light && {backgroundColor: COLORS.BLUE2},
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
                  style={styles.button}
                  onPress={() => onChangeValue(e)}>
                  <Text
                    style={[
                      styles.textSubject,
                      light && {color: COLORS.WHITE},
                    ]}>
                    {e.label}
                  </Text>
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
    backgroundColor: COLORS.WHITE_ONE,
    borderRadius: 10,
    marginTop: 5,
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
    color: COLORS.GREY,
    marginVertical: 13,
  },
  textSubject: {
    color: COLORS.GREY_BLACK,
    fontSize: 15,
    fontWeight: '500',
  },
  button: {
    marginHorizontal: 10,
    paddingVertical: 10,
  },
  animated: {
    height: 49,
    backgroundColor: COLORS.WHITE_ONE,
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
