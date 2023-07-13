import {COLORS} from '../../../constants/colors';
import {StyleSheet} from 'react-native';

export const createTestScreenStyles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  inputTitle: {
    marginHorizontal: 20,
  },
  drop: {
    paddingHorizontal: 15,
    backgroundColor: COLORS.WHITE_ONE,
    marginHorizontal: 20,
    borderRadius: 10,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
    marginTop: 15,
    marginLeft: 20,
    color: COLORS.GREY_BLACK,
  },
  dropInner: {
    marginHorizontal: 20,
    height: 200,
    backgroundColor: COLORS.WHITE_ONE,
    marginTop: 5,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 10,
  },
  btn: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 50,
  },
});
