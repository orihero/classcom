import {COLORS} from '../../../constants/COLORS';
import {StyleSheet} from 'react-native';
import SIZES, {PaddingHorizantal} from '../../../constants/sizes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: PaddingHorizantal,
  },
  childContainer: {
    height: '90%',
  },
  topCard: {
    flexDirection: 'column',
    paddingVertical: SIZES.height * 0.02,
    gap: -SIZES.height * 0.02,
  },
  predmetCard: {
    paddingVertical: SIZES.height * 0.02,
    gap: -SIZES.height * 0.02,
  },
  drop: {
    backgroundColor: COLORS.WHITE_ONE,
    borderRadius: 10,
    height: 50,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
    marginTop: 15,
    color: COLORS.GREY_BLACK,
  },
  dropInner: {
    height: 40,
    backgroundColor: COLORS.WHITE_ONE,
    marginTop: 5,
    borderRadius: 10,
  },
  btn: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
  },
  btndrop: {
    alignItems: 'center',
    paddingVertical: 10,
    width: '100%',
    height: '100%',
  },
});
