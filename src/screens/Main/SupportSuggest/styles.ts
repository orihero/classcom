import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/COLORS';
import {PaddingHorizantal} from '../../../constants/sizes';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: PaddingHorizantal,
    flex: 1,
  },
  postContent: {
    height: 200,
    backgroundColor: COLORS.WHITE_ONE,
    marginTop: 10,
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 10,
    alignItems: 'flex-start',
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
  dropInner: {
    backgroundColor: COLORS.WHITE_ONE,
    borderRadius: 8,
    marginHorizontal: 20,
    marginTop: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
  },
  text: {
    color: COLORS.GREY_BLACK,
  },
  btndrop: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  btn: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
  },
  innerContainer: {},
});
