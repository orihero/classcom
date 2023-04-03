import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {COLORS} from '../constants/COLORS';

interface IProps {
  text: string;
  onPress: () => void;
  loading?: boolean;
  loadingColor?: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  lineStyle?: StyleProp<ViewStyle>;
}

const Button = ({
  text,
  onPress,
  loading,
  loadingColor = COLORS.WHITE,
  style,
  textStyle,
  lineStyle,
}: IProps) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={[styles.container, style]}>
        {loading ? (
          <ActivityIndicator size={'small'} color={loadingColor} />
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
    shadowColor:'rgba(47, 108, 159, 0.35)',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'center',
    color: COLORS.WHITE,
  },
});
