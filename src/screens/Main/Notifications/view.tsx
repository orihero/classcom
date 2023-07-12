import React from 'react';
import {ScrollView, View} from 'react-native';
import WhiteWrapper from '../../../wrappers/white-wrapper/WhiteWrapper';
import Notification from './components/Notification';
import {NotifactionHook} from './hooks';
import UiText from '../../../components/text';
import {styles} from './styles';
import {ScrollViewPadding} from '../../../constants/constants';

const NotificationScreen = () => {
  const {allNotifaction} = NotifactionHook();
  const returnNotifaction = () => {
    if (allNotifaction?.length === 0) {
      return (
        <View style={styles.container}>
          <UiText
            title="Нет уведомления"
            type="mediumRegular24"
            color="GREY_BLACK"
          />
        </View>
      );
    } else {
      return allNotifaction?.map(item => {
        return (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={ScrollViewPadding}>
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
          </ScrollView>
        );
      });
    }
  };
  return (
    <WhiteWrapper>
      <View style={styles.toContainer}>{returnNotifaction?.()}</View>
    </WhiteWrapper>
  );
};

export default NotificationScreen;
