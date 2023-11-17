import {COLORS} from '../../../constants/COLORS';
import {StyleSheet} from 'react-native';
import {PaddingHorizantal} from '../../../constants/sizes';

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
    borderRadius: 10,
    paddingBottom: 0,
  },
  modalTitle: {
    color: COLORS.BLUISH_WHITE,
    textAlign: 'center',
    marginBottom: 30,
    marginTop: -15,
  },
  row: {
    flexDirection: 'row',
  },
  modalText: {},
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
    marginHorizontal: PaddingHorizantal,
    marginBottom: 24,
  },
});
