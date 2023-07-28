import React, {useLayoutEffect} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/store/configureStore';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigator';
import {ThemeContext} from './src/utils/themeContext';
import {ThemeType} from './src/types';
import {ThemeHelper} from './src/helper/ThemeHelper';
import {ThemeProvider, createTheme} from '@rneui/themed';

const App = () => {
  // const [theme, setTheme] = React.useState<ThemeType>(ThemeType.DARK);

  const theme = createTheme({
    lightColors: {
      primary: '#e7e7e8',
    },
    darkColors: {
      primary: '#000',
    },
    mode: 'light',
  });

  // const updateTheme = (newTheme: ThemeType) => {
  //   setTheme(newTheme);
  // };

  // const themeRef = React.useRef({
  //   theme,
  //   updateTheme,
  // });

  // useLayoutEffect(() => {
  //   ThemeHelper.set(themeRef);
  //   ThemeHelper._theme = theme;
  // }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
