import React from 'react';
import {ScrollView} from 'react-native';
import data from '../../../tempData/notifications.json';
import WhiteWrapper from '../../../wrappers/white-wrapper/WhiteWrapper';
import Notification from './components/Notification';

const NotificationScreen = () => {
  return (
    <WhiteWrapper>
      <ScrollView showsVerticalScrollIndicator={false}>
        {data.map(e => {
          return <Notification {...e} />;
        })}
      </ScrollView>
    </WhiteWrapper>
  );
};

export default NotificationScreen;
