import {
  View,
  StyleSheet,
  StyleProp,
  TextStyle,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import {COLORS} from '../constants/COLORS';
import UiText from './text';

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
        <UiText style={styles.text} title={text} type="mediumRegular12" />
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
