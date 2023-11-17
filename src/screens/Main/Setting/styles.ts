import {COLORS} from '../../../constants/COLORS';
import {StyleSheet} from 'react-native';
import {PaddingHorizantal} from '../../../constants/sizes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer: {
    marginHorizontal: PaddingHorizantal,
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 200,
    marginVertical: 5,
  },
  imageText: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.BLUE,
    marginLeft: 20,
  },
  dropContainer: {
    flexDirection: 'row',
    borderRadius: 8,
    backgroundColor: COLORS.WHITE_ONE,
    height: 49,
    alignItems: 'center',
    paddingHorizontal: 20,
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  dropText: {
    color: COLORS.GREY,
    fontSize: 15,
    fontWeight: '500',
    marginVertical: 10,
    marginHorizontal: 20,
  },
  dropDown: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
    color: COLORS.GREY_BLACK,
    marginLeft: 10,
  },
  dropInner: {
    backgroundColor: COLORS.WHITE_ONE,
    borderRadius: 8,
    marginHorizontal: 20,
    marginTop: 5,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  textSlider: {
    color: COLORS.GREY_BLACK,
    marginLeft: 10,
  },
  sliderContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  titleSlider: {
    fontWeight: '500',
    color: COLORS.GREY,
    marginVertical: 10,
    marginLeft: 20,
  },
  textStyle: {
    paddingHorizontal: PaddingHorizantal,
    color: COLORS.GREY,
    fontWeight: '500',
  },
  colorContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 5,
    alignItems: 'center',
  },
  color: {
    width: 26,
    height: 26,
    backgroundColor: 'red',
    borderRadius: 100,
  },
  button: {
    marginBottom: 15,
    borderWidth: 1,
    borderColor: COLORS.BLUE,
    backgroundColor: COLORS.WHITE,
  },
  bottomBtns: {
    marginHorizontal: PaddingHorizantal,
  },
  themeBorder: {
    width: 30,
    height: 30,
    backgroundColor: 'transparent',
    borderRadius: 30,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeThemeBorder: {
    width: 30,
    height: 30,
    backgroundColor: 'transparent',
    borderRadius: 30,
    borderWidth: 1.2,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
