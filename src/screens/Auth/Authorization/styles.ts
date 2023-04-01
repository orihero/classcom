import {COLORS} from './../../../constants/COLORS';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 0.45,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: 'hidden',
  },
  imageCheck: {
    width: 123,
    height: 113,
    marginBottom: 20,
  },
  textClassCom: {
    fontSize: 45,
    fontWeight: '700',
    color: COLORS.WHITE,
    marginVertical: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.WHITE,
  },
  registerContainer: {
    flex: 0.55,
    justifyContent:'center',
  },
  textLogin: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.BLUE,
    textAlign: 'right',
    right: 20,
    marginTop: 11,
  },
  textRegister: {
    fontSize: 17,
    fontWeight: '600',
    color: COLORS.GREY_ONE,
    textAlign:'center',
  },
});
