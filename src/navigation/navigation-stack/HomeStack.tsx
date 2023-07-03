import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../routes';

import HomeScreen from '../../screens/Main/Home/view';
import SettingCalendar from '../../screens/Main/Setting-calendar/view';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.MAIN.HOME} component={HomeScreen} />
      <Stack.Screen
        name={ROUTES.HOME.SETTING_CALENDAR}
        component={SettingCalendar}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
