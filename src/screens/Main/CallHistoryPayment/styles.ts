import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/COLORS';

export const Styles = StyleSheet.create({
  container: {},
  dropDown: {
    backgroundColor: COLORS.WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    shadowColor: 'rgba(105, 105, 105, 0.18)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1.58,
    shadowRadius: 16.0,
  },
  dropDownInner: {
    overflow: 'hidden',
    backgroundColor: COLORS.BLUE,
    borderRadius: 10,
    marginTop: 10,
    shadowColor: 'rgba(105, 105, 105, 0.18)',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  first: {
    flexDirection: 'column',
    gap: 5,
  },
  button: {},
  innerView: {
    paddingVertical: 10,
  },
});
