import React, {PropsWithChildren} from 'react';
import {Text, View} from 'react-native';

const MainWrapper = (props: PropsWithChildren<any>) => {
  return (
    <View>
      <Text>MainWrapper</Text>
      {props.children}
    </View>
  );
};

export default MainWrapper;
