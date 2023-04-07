import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {COLORS} from '../constants/COLORS';
import ButtonSecondary from './button-secondary';

interface IProps {
  titles: string[];
  active: number;
  setActive: (index: number) => void;
  containerStyle?: StyleProp<ViewStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const ButtonTabs = ({
  titles,
  active,
  setActive,
}: IProps) => (
  <View style={[styles.container]}>
    {titles.map((title, i) => (
      <View>
        {active === i ? (
          <ButtonSecondary
            key={i}
            text={title}
            onPress={() => setActive(i)}
          />
        ) : (
          <TouchableOpacity key={i} onPress={() => setActive(i)}>
            <Text style={styles.inActiveText}>{title}</Text>
          </TouchableOpacity>
        )}
      </View>
    ))}
  </View>
);

export default ButtonTabs;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 24,
    overflow: 'hidden',
    paddingHorizontal: 20,
  },
  inActiveText: {
    fontSize: 17,
    fontWeight: '500',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: COLORS.GREY_ONE,
  },
});
