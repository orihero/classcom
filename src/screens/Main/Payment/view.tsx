import {View, Text} from 'react-native';
import React from 'react';
import DefaultWrapper from '../../../wrappers/default-wrapper/DefaultWrapper';
import TopTabs from '../../../components/home-tabs';
import PlateButton from './components/Plate-Button';

const content = [
  {
    title: 'Подписки',
    content: () => (
      <>
        <PlateButton
          onPress={() => console.log('Qissse')}
          hasButton
          subscription="Подписка"
          data=""
          day="на 30 дней"
          mony="40.000 сум"
        />
      </>
    ),
  },
  {
    content: () => (
      <>
        <PlateButton
          onPress={() => console.log('Qissse')}
          // hasButton
          subscription="Подписка"
          data="до 25.02.2023"
          day="c 25.01.2023"
          // mony="40.000 сум"
        />
      </>
    ),
    title: 'Активные',
  },
];
const PaymentScreen = () => {
  return (
    <DefaultWrapper hasUser title="Оплата">
      <TopTabs content={content} />
    </DefaultWrapper>
  );
};

export default PaymentScreen;
