import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {getData, persistor, store} from './src/store/configureStore';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigator';
import {ThemeType} from './src/types';
import {ThemeContext} from './src/utils/themeContext';
import {storeData} from './src/store/configureStore';
import {StatusBar} from 'react-native';

const App = () => {
  const [theme, setTheme] = React.useState<ThemeType>(ThemeType.LIGHT);

  const updateTheme = (newTheme: ThemeType) => {
    setTheme(newTheme);
    storeData('theme', newTheme);
  };

  const fetchStoredTheme = async () => {
    const storedTheme = await getData('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    }
  };

  React.useEffect(() => {
    fetchStoredTheme();
  }, []);

  return (
    <ThemeContext.Provider value={{theme, updateTheme}}>
      <StatusBar
        barStyle={theme === ThemeType.DARK ? 'light-content' : 'dark-content'}
      />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </ThemeContext.Provider>
  );
};

export default App;
