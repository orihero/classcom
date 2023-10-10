import React, {useContext} from 'react';
import {SafeAreaView, Text, View, Image} from 'react-native';
import {
  BookIcon,
  CalendarDrawerIcon,
  ChartIcon,
  ExitIcon,
  HomeIcon,
  NoteIcon,
  PayIcon,
  SettingDrawerIcon,
  SupportIcon,
  TestingIcon,
} from '../../assets/icons';
import DrawerButton from '../../components/drawer-button';
import {DrawerHook} from './hooks';
import {styles} from './styles';
import {Assets} from '../../utils/requireAssets';
import {ThemeContext} from '../../utils/themeContext';
import {COLORS} from '../../constants/colors';

const DrawerScreen = () => {
  const {
    onElectronicPress,
    onHomePress,
    onPaymentPress,
    onProgramPress,
    onSettingPress,
    onStatisticPress,
    onSupportPress,
    onTestingPress,
    onThematicPress,
    onLogout,
    account,
  } = DrawerHook();

  const {theme} = useContext(ThemeContext);
  let activeColor = COLORS[theme];

  return (
    <View style={[styles.container, {backgroundColor: activeColor.secondary}]}>
      <View
        style={[
          styles.userContainer,
          {backgroundColor: activeColor.drawerBackColor},
        ]}>
        <SafeAreaView />
        <Image source={Assets.images.user} style={styles.image} />
        <Text style={[styles.userText, {color: activeColor.textColor2}]}>
          {account?.firstName}
        </Text>
      </View>

      <View
        style={[
          {backgroundColor: activeColor.secondary},
          styles.screenContainer,
        ]}>
        <DrawerButton
          onPress={onHomePress}
          icon={<HomeIcon fill={activeColor.acriveBox} />}
          text="Главная страница"
          textColor={activeColor.textColor}
        />
        <DrawerButton
          onPress={onElectronicPress}
          icon={<BookIcon stroke={activeColor.acriveBox} />}
          text="Электронные ресурсы"
          textColor={activeColor.textColor}
        />
        <DrawerButton
          onPress={onThematicPress}
          icon={<CalendarDrawerIcon fill={activeColor.acriveBox} />}
          text="Тематический план"
          textColor={activeColor.textColor}
        />
        <DrawerButton
          onPress={onTestingPress}
          icon={<TestingIcon fill={activeColor.acriveBox} />}
          text="Тестирование"
          textColor={activeColor.textColor}
        />
        <DrawerButton
          onPress={onProgramPress}
          icon={<NoteIcon fill={activeColor.acriveBox} />}
          text="О программе"
          textColor={activeColor.textColor}
        />
        <DrawerButton
          onPress={onStatisticPress}
          icon={<ChartIcon fill={activeColor.acriveBox} />}
          text="Статистика"
          textColor={activeColor.textColor}
        />
        <DrawerButton
          onPress={onPaymentPress}
          icon={<PayIcon fill={activeColor.acriveBox} />}
          text="Оплата"
          textColor={activeColor.textColor}
        />
        <DrawerButton
          onPress={onSupportPress}
          icon={<SupportIcon stroke={activeColor.acriveBox} />}
          text="Служба поддержки"
          textColor={activeColor.textColor}
        />
        <DrawerButton
          onPress={onSettingPress}
          icon={<SettingDrawerIcon fill={activeColor.acriveBox} />}
          text="Настройки"
          textColor={activeColor.textColor}
        />
        <DrawerButton
          onPress={onLogout}
          icon={<ExitIcon fill={activeColor.acriveBox} />}
          text="Выйти"
          textColor={activeColor.textColor}
        />
      </View>
    </View>
  );
};

export default DrawerScreen;
