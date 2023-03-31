import React from 'react';
import {persistor, store} from './src/store/configureStore';
import {Provider} from 'react-redux';
import {Text, View} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View>
          <Text>DSADSADAS</Text>
        </View>
      </PersistGate>
    </Provider>
  );
};

export default App;
