import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet} from 'react-native';
import DrawerScreen from '../screens/Drawer/view';
import CalendarSettingScreen from '../screens/Main/Calendar-setting/view';
import CreateTestScreen from '../screens/Main/CreateTest/view';
import HomeScreen from '../screens/Main/Home/view';
import NotificationScreen from '../screens/Main/Notifications/view';
import ElectronicResourcesStack from './navigation-stack/Electronic-resources-stack.';
import PaymentStack from './navigation-stack/Payment-stack';
import ProgramStack from './navigation-stack/Program-stack';
import SettingStack from './navigation-stack/Setting-stack';
import StatisticStack from './navigation-stack/Statistics-stack';
import SupportStack from './navigation-stack/Support-stack';
import TestingStack from './navigation-stack/Testing-stack';
import ThematicPlanStack from './navigation-stack/Thematic-plan-stack';
import {ROUTES} from './routes';
import HomeStack from './navigation-stack/HomeStack';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={DrawerScreen}
      screenOptions={{
        headerShown: false,
        drawerPosition: 'left',
        drawerType: 'front',
        drawerStyle: {
          flex: 1,
          backgroundColor: '#F5FDFF',
        },
      }}>
      <Drawer.Screen name={ROUTES.MAIN.HOME} component={HomeStack} />
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
        name={ROUTES.STACK.ELECTRONIC_STACK}
        component={ElectronicResourcesStack}
      />

      <Drawer.Screen
        name={ROUTES.STACK.PAYMENT_STACK}
        component={PaymentStack}
      />

      <Drawer.Screen
        name={ROUTES.STACK.PROGRAM_STACK}
        component={ProgramStack}
      />

      <Drawer.Screen
        name={ROUTES.STACK.SETTING_STACK}
        component={SettingStack}
      />

      <Drawer.Screen
        name={ROUTES.STACK.STATISTICS_STACK}
        component={StatisticStack}
      />

      <Drawer.Screen
        name={ROUTES.STACK.SUPPORT_STACK}
        component={SupportStack}
      />

      <Drawer.Screen
        name={ROUTES.STACK.TESTING_STACK}
        component={TestingStack}
      />

      <Drawer.Screen
        name={ROUTES.STACK.THEMATIC_STACK}
        component={ThematicPlanStack}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
