import {DrawerActions, useNavigation} from '@react-navigation/native';
import React, {PropsWithChildren, useState} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {BellIcon, CalendarIcon, MenuIcon} from '../../assets/icons';
import {ROUTES} from '../../navigation/routes';
import {Assets} from '../../utils/requireAssets';
import {mainWrapperStyles} from './MainWrapper.styles';
import {dateInRussain, getWeekDays} from '../../utils/dateHelper';
import {useSelector} from 'react-redux';
import {userSelector} from '../../store/slices/user.slice';
import DatePicker from 'react-native-date-picker';

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

  return (
    <View style={mainWrapperStyles.container}>
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

      <View style={mainWrapperStyles.useNameBox}>
        <Text style={mainWrapperStyles.nameText}>
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
              style={
                e.current ? mainWrapperStyles.week : mainWrapperStyles.weekBox
              }>
              <Text style={mainWrapperStyles.textWeek}>{e.date}</Text>
              <Text style={mainWrapperStyles.textWeek}>{e.day}</Text>
            </View>
          );
        })}
      </View>
      <View style={mainWrapperStyles.childrenContainer}>{children}</View>
    </View>
  );
};

export default MainWrapper;
