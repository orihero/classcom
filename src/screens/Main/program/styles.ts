import {COLORS} from '../../../constants/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  checkBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  image: {
    width: 32,
    height: 29,
  },
  classcom: {
    fontSize: 30,
    fontWeight: '700',
    color: COLORS.BLUE,
    marginLeft: 15,
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.GREY,
    textAlign: 'center',
    marginVertical: 20,
  },
  programContainer: {
    marginTop: 30,
  },
});
