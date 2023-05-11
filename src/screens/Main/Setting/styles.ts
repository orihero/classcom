import {COLORS} from './../../../constants/COLORS';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
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
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.GREY_BLACK,
    marginLeft: 10,
  },
  sliderContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  titleSlider: {
    fontSize: 15,
    fontWeight: '500',
    color: COLORS.GREY,
    marginVertical: 10,
    marginLeft: 20,
  },
  colorContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 5,
  },
  color: {
    width: 28,
    height: 28,
    backgroundColor: 'red',
    borderRadius: 100,
    marginLeft: 10,
  },
  button: {
    marginBottom: 15,
    borderWidth: 1,
    borderColor: COLORS.BLUE,
    backgroundColor: COLORS.WHITE,
  },
});
