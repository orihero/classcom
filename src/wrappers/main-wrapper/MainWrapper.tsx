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
import {dateInRussain, getDaysOfWeek} from '../../utils/dateHelper';
import {useSelector} from 'react-redux';
import {userSelector} from '../../store/slices/user.slice';
import DatePicker from 'react-native-date-picker';
import {COLORS} from '../../constants/colors';
import {useContext} from 'react';
import {ThemeContext} from '../../utils/themeContext';
import {notifactionCountSelector} from '../../store/slices/notifactionCounter';
import UiText from '../../components/text';

const MainWrapper = ({
  date,
  onDateChange,
  children,
}: PropsWithChildren<{date: Date; onDateChange: (date: Date) => void}>) => {
  const [datePickerShown, setDatePickerShown] = useState(false);

  const drawer = useNavigation();

  const user = useSelector(userSelector);
  const notifactionCount = useSelector(notifactionCountSelector);

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
      backgroundColor: activeColor.acriveBox,
      shadowOffset: {
        width: 2,
        height: 4,
      },
      shadowOpacity: 1,
      shadowRadius: 20,
      shadowColor: 'rgba(64, 93, 117, 0.52)',
      elevation: 15,
    },
    activeTextWeek: {
      color: activeColor.secondary,
    },
    textWeek: {
      color: activeColor.noneActiveTextColor,
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
    noticBtn: {
      position: 'relative',
    },
    counterNotifaction: {
      position: 'absolute',
      top: -6,
      right: -6,
      backgroundColor: COLORS.YELLOW,
      width: 20,
      height: 20,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2,
    },
    counterNotifactionText: {
      color: COLORS.WHITE,
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
          <View style={styles.noticBtn}>
            {notifactionCount > 0 && (
              <View style={styles.counterNotifaction}>
                <Text style={styles.counterNotifactionText}>2</Text>
              </View>
            )}
            <TouchableOpacity onPress={onBellPress}>
              <BellIcon />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>

      <View style={styles.useNameBox}>
        <Text style={styles.nameText}>
          {user.firstName} {user.lastName}
        </Text>
      </View>

      <View style={mainWrapperStyles.calendarBox}>
        <TouchableOpacity
          onPress={onDatePress}
          style={mainWrapperStyles.datePickerBtnStyle}>
          <UiText type="Bold16" title="Выберите дату" />
          <CalendarIcon style={mainWrapperStyles.calendarIconStyle} />
        </TouchableOpacity>
        <DatePicker
          date={date}
          open={datePickerShown}
          locale="ru"
          confirmText="Принять"
          cancelText="Отмена"
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
          <UiText title={dateInRussain(date)} type="Bold16" />
        </View>
      </View>

      <View style={mainWrapperStyles.weeksContainer}>
        {getDaysOfWeek(date).map(e => {
          return (
            <TouchableOpacity
              onPress={() => onDateChange(e._date)}
              key={e.day}
              style={e.current ? styles.activeCard : mainWrapperStyles.weekBox}>
              <UiText
                style={e.current ? styles.activeTextWeek : styles.textWeek}
                type="bookRegular23"
                title={e.day}
              />
              <UiText
                style={e.current ? styles.activeTextWeek : styles.textWeek}
                type="bookRegular20"
                title={e.date as never}
              />
            </TouchableOpacity>
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
