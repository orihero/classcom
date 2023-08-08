import {ScrollView} from 'react-native';
import React from 'react';
import DefaultWrapper from '../../../wrappers/default-wrapper/DefaultWrapper';
import InfoButton from '../../../components/Info-button';
import {
  ChatIcon,
  InstalIcon,
  PaymentStatisticIcon,
} from '../../../assets/icons';
import {ScrollViewPadding} from '../../../constants/constants';
import {StatisticHooks} from './hooks';

const StatisticScreen = () => {
  const {
    onPressHistoryPayment,
    onPressHistoryPaymentCall,
    onPressHistoryPaymentDownload,
  } = StatisticHooks();
  return (
    <DefaultWrapper hasUser title="Статистика">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={ScrollViewPadding}>
        <InfoButton
          onPress={onPressHistoryPayment}
          icon={<PaymentStatisticIcon />}
          title="История оплаты"
        />
        <InfoButton
          onPress={onPressHistoryPaymentDownload}
          icon={<InstalIcon />}
          title="История скачиваний"
        />
        <InfoButton
          onPress={onPressHistoryPaymentCall}
          icon={<ChatIcon />}
          title="История обращений"
        />
      </ScrollView>
    </DefaultWrapper>
  );
};

export default StatisticScreen;
