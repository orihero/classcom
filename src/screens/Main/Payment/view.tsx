import React from 'react';
import DefaultWrapper from '../../../wrappers/default-wrapper/DefaultWrapper';
import TestTopTabs, {TopTabsItem} from '../../../components/test-tabs';

import SubscriptionsScreenItem from './screens/Subscriptions/Subscriptions';
import ActivniyScreenItem from './screens/ActivityItem/Activniy';

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
  return (
    <DefaultWrapper hasUser title="Оплата">
      <TestTopTabs content={content} />
    </DefaultWrapper>
  );
};

export default PaymentScreen;
