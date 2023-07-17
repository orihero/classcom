import {COLORS} from '../../../constants/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  space: {
    width: 12,
  },
  container: {},

  scroolViewStyle: {
    marginBottom: 10,
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
  modalContainer: {
    padding: 25,
    paddingVertical: 36,
    borderRadius: 10,
    backgroundColor: COLORS.BLUE,
    paddingBottom: 0,
  },
  modalTitle: {
    color: COLORS.BLUISH_WHITE,
    fontSize: 21,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 30,
  },
  row: {
    flexDirection: 'row',
  },
  modalText: {
    color: COLORS.WHITE,
    fontSize: 14,
    fontWeight: '500',
  },
  flex: {
    flex: 1,
  },
  emptyInput: {
    fontSize: 15,
    backgroundColor: COLORS.BLUE2,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginVertical: 12,
    borderRadius: 8,
  },
  emptyInputText: {
    color: COLORS.BLUISH_WHITE2,
  },
  bottomBtn: {
    paddingVertical: 8,
    paddingHorizontal: 30,
    marginBottom: 24,
  },
});
