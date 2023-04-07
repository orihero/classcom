import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/COLORS';

export const whiteWrapperStyles = StyleSheet.create({
  headerContainer: {
    backgroundColor: COLORS.WHITE,
    marginHorizontal: 30,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  titleText: {
    color: COLORS.GREY_BLACK,
    fontSize: 30,
    fontWeight: '700',
    marginTop: 35,
  },
});
