import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {},
  dropInner: {
    marginHorizontal: 20,
    height: 200,
    backgroundColor: COLORS.WHITE_ONE,
    marginTop: 10,
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 10,
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
    color: COLORS.GREY_BLACK,
  },
  btn: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
  },
  innerContainer: {
    backgroundColor: 'red',
    height: 100,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
