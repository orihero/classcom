import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 186,
    height: 169,
    marginBottom: 10,
  },
  nameText: {
    fontSize: 29,
    fontWeight: '700',
    color: COLORS.BLUE,
    textAlign: 'center',
    marginVertical: 20,
  },
  text: {
    fontSize: 29,
    fontWeight: '700',
    color: COLORS.GREY_BLACK,
    textAlign: 'center',
  },
});
