import {DrawerActions, useNavigation} from '@react-navigation/native';
import React, {PropsWithChildren, useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {BellIcon, CalendarIcon, MenuIcon} from '../../assets/icons';
import {ROUTES} from '../../navigation/routes';
import {Assets} from '../../utils/requireAssets';
import {mainWrapperStyles} from './MainWrapper.styles';
import {dateInRussain, getWeekDays} from '../../utils/dateHelper';
import {useSelector} from 'react-redux';
import {userSelector} from '../../store/slices/user.slice';
import DatePicker from 'react-native-date-picker';
import {COLORS} from '../../constants/colors';
import {useContext} from 'react';
import {ThemeContext} from '../../utils/themeContext';

const MainWrapper = ({
  date,
  onDateChange,
  children,
}: PropsWithChildren<{date: Date; onDateChange: (date: Date) => void}>) => {
  const [datePickerShown, setDatePickerShown] = useState(false);

  const drawer = useNavigation();

  const user = useSelector(userSelector);

  const onPress = () => {
    drawer.dispatch(DrawerActions.toggleDrawer);
  };

  const navigation = useNavigation();

  const onBellPress = () => {
    navigation.navigate(ROUTES.MAIN.NOTIFICATIONS as never);
  };

  const onDatePress = () => {
    setDatePickerShown(e => !e);
  };

  const {theme} = useContext(ThemeContext);
  let activeColor = COLORS[theme];

  const styles = StyleSheet.create({
    activeCard: {
      paddingHorizontal: 10,
      borderRadius: 10,
      paddingVertical: 2,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'red',
    },
    activeTextWeek: {
      fontSize: 23,
      fontWeight: '400',
      color: activeColor.activeTextColor,
    },
    nameText: {
      fontSize: 15,
      fontWeight: '500',
      color: activeColor.textColor2,
    },
    useNameBox: {
      marginTop: 10,
      borderBottomWidth: 1,
      borderColor: activeColor.textColor2,
      marginHorizontal: 20,
      paddingBottom: 12,
    },
  });

  return (
    <View
      style={[
        mainWrapperStyles.container,
        {backgroundColor: activeColor.primary},
      ]}>
      <SafeAreaView>
        <View style={mainWrapperStyles.headerContainer}>
          <TouchableOpacity onPress={onPress}>
            <MenuIcon />
          </TouchableOpacity>

          <Image
            style={mainWrapperStyles.image}
            source={Assets.images.classPhoto}
          />

          <TouchableOpacity onPress={onBellPress}>
            <BellIcon />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <View style={styles.useNameBox}>
        <Text style={styles.nameText}>
          {user.firstName} {user.lastName}
        </Text>
      </View>

      <View style={mainWrapperStyles.calendarBox}>
        <TouchableOpacity onPress={onDatePress} style={{flexDirection: 'row'}}>
          <Text style={mainWrapperStyles.textData}>Выберите дату</Text>
          <CalendarIcon style={{marginLeft: 10}} />
        </TouchableOpacity>
        <DatePicker
          date={date}
          open={datePickerShown}
          onConfirm={d => {
            onDateChange(d);
            setDatePickerShown(false);
          }}
          onCancel={() => {
            setDatePickerShown(false);
          }}
          modal={true}
          mode="date"
        />
        <View>
          <Text style={mainWrapperStyles.textData}>{dateInRussain(date)}</Text>
        </View>
      </View>

      <View style={mainWrapperStyles.weeksContainer}>
        {getWeekDays(date).map(e => {
          return (
            <View
              key={e.day}
              style={e.current ? styles.activeCard : mainWrapperStyles.weekBox}>
              <Text
                style={
                  e.current ? styles.activeTextWeek : mainWrapperStyles.textWeek
                }>
                {e.day}
              </Text>
              <Text
                style={
                  e.current ? styles.activeTextWeek : mainWrapperStyles.textWeek
                }>
                {e.date}
              </Text>
            </View>
          );
        })}
      </View>
      <View
        style={[
          mainWrapperStyles.childrenContainer,
          {backgroundColor: activeColor?.secondary},
        ]}>
        {children}
      </View>
    </View>
  );
};

export default MainWrapper;
