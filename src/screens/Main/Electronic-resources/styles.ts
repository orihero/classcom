import {COLORS} from './../../../constants/COLORS';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
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
    paddingVertical: 10,
  },
  second: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    color: COLORS.GREY_BLACK,
  },
  textData: {
    fontSize: 16,
    fontWeight: '500',
    color: '#5F93BD',
    marginTop: 5,
  },
  textName: {
    fontSize: 17,
    fontWeight: '700',
    color: COLORS.WHITE,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  lessonText: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.WHITE,
    marginTop: 5,
  },
  kbText: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.GREY_ONE,
  },
  containerOne: {
    borderTopWidth: 1,
    marginTop: 30,
    paddingTop: 20,
    borderColor: 'rgba(153, 153, 153, 0.2)',
  },
});
