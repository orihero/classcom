import {View, Text} from 'react-native';
import React from 'react';
import DefaultWrapper from '../../../wrappers/default-wrapper/DefaultWrapper';
import InfoButton from '../../../components/Info-button';
import {
  ChatIcon,
  InstalIcon,
  PaymentStatisticIcon,
} from '../../../assets/icons';

const StatisticScreen = () => {
  return (
    <DefaultWrapper hasUser title="Статистика">
      <View>
        <InfoButton
          onPress={() => console.log('Qise')}
          icon={<PaymentStatisticIcon />}
          title="История оплаты"
        />
        <InfoButton
          onPress={() => console.log('Qise')}
          icon={<InstalIcon />}
          title="История скачиваний"
        />
        <InfoButton
          onPress={() => console.log('Qise')}
          icon={<ChatIcon />}
          title="История обращений"
        />
      </View>
    </DefaultWrapper>
  );
};

export default StatisticScreen;
