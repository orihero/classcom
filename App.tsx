import React from 'react';
import {store} from './src/store/configureStore';
import {Provider} from 'react-redux';
import {Text, View} from 'react-native';
import {UserIcon} from './src/assets/icons';

const App = () => {
  return (
    <Provider store={store}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          backgroundColor: 'blue',
        }}>
        <Text>dsadsadsa</Text>
        <UserIcon />
      </View>
    </Provider>
  );
};

export default App;
