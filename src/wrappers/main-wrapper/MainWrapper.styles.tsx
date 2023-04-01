import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/COLORS';

export const mainWrapperStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BLUE,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 15,
  },
  image: {
    width: 139,
    height: 20,
  },
  useNameBox: {
    marginTop: 10,
    borderBottomWidth: 1,
    borderColor: COLORS.LIGHT_BLUE,
    marginHorizontal: 20,
    paddingBottom: 12,
  },
  nameText: {
    fontSize: 15,
    fontWeight: '500',
    color: COLORS.LIGHT_BLUE,
  },
  calendarBox: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  textData: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.WHITE,
  },
  weeksContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  weekBox: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  week: {
    backgroundColor: COLORS.LIGHT_BLUE,
    paddingHorizontal: 10,
    borderRadius: 10,
    paddingVertical: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textWeek: {
    fontSize: 23,
    fontWeight: '400',
    color: COLORS.WHITE,
  },
  childrenContainer: {
    paddingTop: 15,
    backgroundColor: COLORS.WHITE,
    flex: 1,
    marginTop: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
