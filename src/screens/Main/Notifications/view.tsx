import React from 'react';
import {ScrollView} from 'react-native';
import WhiteWrapper from '../../../wrappers/white-wrapper/WhiteWrapper';
import Notification from './components/Notification';
import {NotifactionHook} from './hooks';
import UiText from '../../../components/text';
const NotificationScreen = () => {
  const {allNotifaction} = NotifactionHook();
  const returnNotifaction = () => {
    if (allNotifaction?.length === 0) {
      return (
        <UiText
          title="No Message"
          type="mediumRegular20"
          color="MIDNIGHT_BLUE"
        />
      );
    } else {
      return allNotifaction?.map(item => {
        return (
          <Notification
            message={item.message}
            id={item.id}
            type={item.type}
            createdDate={item.createdDate}
            entityType={item.entityType}
            userId={item.userId}
            viewed={item.viewed}
            entityTypeId={item.entityTypeId}
          />
        );
      });
    }
  };
  return (
    <WhiteWrapper>
      <ScrollView showsVerticalScrollIndicator={false}>
        {returnNotifaction?.()}
      </ScrollView>
    </WhiteWrapper>
  );
};

export default NotificationScreen;
