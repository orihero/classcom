import {
  View,
  Text,
  StyleSheet,
  StyleProp,
  TextStyle,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import {COLORS} from '../constants/COLORS';

interface IProps {
  text: string;
  textStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  onPress: () => void;
}

const ButtonSecondary = ({text, containerStyle, onPress}: IProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, containerStyle]}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonSecondary;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    height: 35,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.BLUE,
    borderRadius: 30,
  },
  text: {
    fontSize: 17,
    fontWeight: '700',
    textAlign: 'center',
    color: COLORS.BLUE,
    textAlignVertical: 'center',
  },
});
