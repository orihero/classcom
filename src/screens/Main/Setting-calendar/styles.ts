import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/COLORS';

export const styles = StyleSheet.create({
  container: {},
  dataContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.WHITE_ONE,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    height: 49,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 8,
  },
  dataText: {
    fontSize: 15,
    fontWeight: '500',
    color: COLORS.GREY,
    marginVertical: 13,
    marginLeft: 20,
  },
  text:{
    fontSize: 15,
    fontWeight:'500',
    color:COLORS.GREY_BLACK,
  },
});
