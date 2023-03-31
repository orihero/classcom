import React from 'react';
import {store} from './src/store/configureStore';
import {Provider} from 'react-redux';
import {Text, View} from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <View>
        <Text>dsadsadsa</Text>
      </View>
    </Provider>
  );
};

export default App;
