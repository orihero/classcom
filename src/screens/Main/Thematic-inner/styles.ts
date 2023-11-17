import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/COLORS';
import {PaddingHorizantal} from '../../../constants/sizes';

export const styles = StyleSheet.create({
  container: {},
  dropContainer: {
    marginHorizontal: PaddingHorizantal,
  },
  dropInnerContainer: {},
  box: {
    backgroundColor: COLORS.BLUE,
    marginHorizontal: 20,
    borderRadius: 10,
    marginTop: 5,
    overflow: 'hidden',
  },
  textStyles: {
    color: COLORS.WHITE,
  },
  inner: {
    backgroundColor: COLORS.BLUE,
    borderRadius: 0,
    borderBottomWidth: 1,
    borderColor: COLORS.LIGHT_BLUE,
    marginHorizontal: 0,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  btnContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.WHITE,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.LIGHT_BLUE,
  },
  btn: {
    backgroundColor: '#3673A5',
    width: 216,
    height: 42,
    paddingHorizontal: 0,
    paddingVertical: 0,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
  },
  btnText: {},
});
