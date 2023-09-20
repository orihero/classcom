import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const defaultWrapperStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BLUE,
  },
  headerContainer: {
    flexDirection: 'row',
    marginHorizontal: 30,
    marginVertical: 15,
    justifyContent: 'space-between',
  },
  childrenContainer: {
    paddingTop: 15,
    backgroundColor: COLORS.WHITE,
    flex: 1,
    marginTop: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  titleText: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.WHITE,
    marginLeft: -15,
  },
  userText: {
    fontSize: 15,
    fontWeight: '500',
    color: COLORS.LIGHT_BLUE,
    marginTop: 10,
    marginHorizontal: 30,
  },
  notifactionView: {
    width: 20,
  },
  arrowBtn: {
    marginRight: 17,
  },
});
