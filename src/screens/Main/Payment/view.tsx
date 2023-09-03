import React from 'react';
import DefaultWrapper from '../../../wrappers/default-wrapper/DefaultWrapper';
import TestTopTabs, {TopTabsItem} from '../../../components/test-tabs';

import SubscriptionsScreenItem from './screens/Subscriptions/Subscriptions';
import ActivniyScreenItem from './screens/ActivityItem/Activniy';
import {DrawerActions, useNavigation} from '@react-navigation/native';

const content: TopTabsItem[] = [
  {
    id: 0,
    name: 'Подписки',
    component: SubscriptionsScreenItem,
  },
  {
    id: 1,
    name: 'Активные',
    component: ActivniyScreenItem,
  },
];

const PaymentScreen = () => {
  const drawer = useNavigation();

  const onArrowLeftBtnPress = () => {
    drawer.dispatch(DrawerActions.toggleDrawer);
  };
  return (
    <DefaultWrapper
      hasUser
      title="Оплата"
      onArrowLeftBtnPress={onArrowLeftBtnPress}>
      <TestTopTabs content={content} />
    </DefaultWrapper>
  );
};

export default PaymentScreen;
