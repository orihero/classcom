import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  headerText: {
    marginTop: 15,
    fontSize: 30,
    fontWeight: '700',
    color: COLORS.GREY_BLACK,
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
    color: COLORS.GREY,
    marginHorizontal: 20,
    marginVertical: 20,
  },
});
