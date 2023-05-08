import {COLORS} from './../../../constants/COLORS';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    borderBottomWidth: 1,
    borderColor: COLORS.GREY_ONE,
    paddingVertical: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: '400',
    color: COLORS.GREY_ONE,
  },
});
