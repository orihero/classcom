import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

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
  textData: {},
  weeksContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  weekBox: {
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 15,
  },
  week: {
    paddingHorizontal: 10,
    borderRadius: 10,
    paddingVertical: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textWeek: {},
  childrenContainer: {
    paddingTop: 15,
    flex: 1,
    marginTop: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  calendarIconStyle: {
    marginLeft: 10,
  },
  datePickerBtnStyle: {
    flexDirection: 'row',
  },
});
