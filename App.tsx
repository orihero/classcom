import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/store/configureStore';
import MainWrapper from './src/wrappers/main-wrapper/MainWrapper';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainWrapper>
          <View>
            <Text>DSADSADAS</Text>
          </View>
        </MainWrapper>
      </PersistGate>
    </Provider>
  );
};

export default App;
