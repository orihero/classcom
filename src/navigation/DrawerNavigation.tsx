import {createDrawerNavigator} from '@react-navigation/drawer';
import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {ROUTES} from './ROUTES';
import HomeScreen from '../screens/Main/Home/view';
import DrawerScreen from '../screens/Drawer/view';
import CalendarSettingScreen from '../screens/Main/Calendar-setting/view';

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
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({});
