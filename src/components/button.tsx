import Lottie from 'lottie-react-native';
import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import animation from '../assets/animations/loading-white.json';
import {COLORS} from '../constants/COLORS';

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
          <Text style={[styles.text, textStyle]}>{text}</Text>
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
