import {createDrawerNavigator} from '@react-navigation/drawer';
import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import HomeScreen from '../screens/Main/Home/view';
import DrawerScreen from '../screens/Drawer/view';
import CalendarSettingScreen from '../screens/Main/Calendar-setting/view';
import {ROUTES} from './routes';
import NotificationScreen from '../screens/Main/Notifications/view';
import CreateTestScreen from '../screens/Main/CreateTest/view';
import ElectronicResourceScreen from '../screens/Main/Electronic-resources/view';
import PlateScreen from '../screens/Main/Plate/view';
import ProgramScreen from '../screens/Main/program/view';
import SettingScreen from '../screens/Main/Setting/view';
import StatisticScreen from '../screens/Main/Statistics/view';
import SupportScreen from '../screens/Main/Support/view';
import TestingScreen from '../screens/Main/Testing/view';
import ThematicPlanScreen from '../screens/Main/Thematic-plan/view';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  let dispatch = useDispatch();

  return (
    <Drawer.Navigator
      drawerContent={() => <DrawerScreen />}
      screenOptions={{
        headerShown: false,
        drawerPosition: 'left',
        drawerType: 'front',
        drawerStyle: {
          flex: 1,
          backgroundColor: '#F5FDFF',
        },
      }}>
      <Drawer.Screen name={ROUTES.MAIN.HOME} component={HomeScreen} />
      <Drawer.Screen
        name={ROUTES.MAIN.CALENDAR_SETTING}
        component={CalendarSettingScreen}
      />
      <Drawer.Screen
        name={ROUTES.MAIN.NOTIFICATIONS}
        component={NotificationScreen}
      />
      <Drawer.Screen
        name={ROUTES.MAIN.CREATE_TEST}
        component={CreateTestScreen}
      />
      <Drawer.Screen
        name={ROUTES.DRAWER.ELECTRONIC_RESOURCES}
        component={ElectronicResourceScreen}
      />
      <Drawer.Screen name={ROUTES.DRAWER.PAYMENT} component={PlateScreen} />
      <Drawer.Screen name={ROUTES.DRAWER.PROGRAM} component={ProgramScreen} />
      <Drawer.Screen name={ROUTES.DRAWER.SETTING} component={SettingScreen} />
      <Drawer.Screen
        name={ROUTES.DRAWER.STATISTIC}
        component={StatisticScreen}
      />
      <Drawer.Screen name={ROUTES.DRAWER.SUPPORT} component={SupportScreen} />
      <Drawer.Screen name={ROUTES.DRAWER.TESTING} component={TestingScreen} />
      <Drawer.Screen
        name={ROUTES.DRAWER.THEMATIC_PLANE}
        component={ThematicPlanScreen}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({});
