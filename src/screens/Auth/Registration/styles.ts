import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/COLORS';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  headerText: {
    marginTop: 15,
    fontSize: 30,
    fontWeight: '700',
    color: COLORS.GREY_BLACK,
  },
  animated: {
    height: 49,
    backgroundColor: COLORS.WHITE_ONE,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  animatedTwo: {
    backgroundColor: COLORS.WHITE_ONE,
    borderRadius: 10,
    marginTop: 5,
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
    color: COLORS.GREY,
    marginVertical: 13,
  },
  textSubject: {
    color: COLORS.GREY_BLACK,
    fontSize: 15,
    fontWeight: '500',
  },
  button: {
    marginHorizontal: 10,
    paddingVertical: 10,
  },
  checkContainer: {
    marginHorizontal: 20,
    marginVertical: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  checkButton: {
    width: 24,
    height: 24,
    backgroundColor: COLORS.WHITE_ONE,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  checkBox: {
    borderBottomWidth: 1,
    borderColor: COLORS.GREY,
    paddingRight: 20,
    marginLeft: 12,
  },
  checkText: {
    fontSize: 13,
    fontWeight: '500',
    color: COLORS.GREY,
  },
});
