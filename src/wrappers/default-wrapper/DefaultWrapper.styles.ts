import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/COLORS';

export const defaultWrapperStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BLUE,
  },
  headerContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 15,
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
    marginLeft: 15,
  },
});
