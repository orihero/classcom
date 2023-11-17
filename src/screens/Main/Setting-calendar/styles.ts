import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/COLORS';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  dataContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.WHITE_ONE,
    paddingHorizontal: 20,
    height: 49,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 8,
  },
  dataText: {
    fontSize: 15,
    fontWeight: '500',
    color: COLORS.GREY,
    marginVertical: 13,
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
    color: COLORS.GREY_BLACK,
  },
});
