import Lottie from 'lottie-react-native';
import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import animation from '../assets/animations/loading-white.json';
import {COLORS} from '../constants/COLORS';
import UiText from './text';

interface IProps {
  text: string;
  onPress?: () => void;
  loading?: boolean;
  loadingColor?: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  lineStyle?: StyleProp<ViewStyle>;
}

const Button = ({text, onPress, loading, style, textStyle}: IProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={loading ? undefined : onPress}>
      <View style={[styles.container, style]}>
        {loading ? (
          <Lottie
            style={{transform: [{scale: 3}], height: 16}}
            source={animation}
            autoPlay
            loop={true}
          />
        ) : (
          <UiText
            style={[styles.text, textStyle]}
            title={text}
            type="mediumRegular12"
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: COLORS.BLUE,
    marginHorizontal: 20,
    paddingVertical: 17,
    borderRadius: 8,
    shadowColor: 'rgba(47, 108, 159, 0.35)',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'center',
    color: COLORS.WHITE,
  },
});
