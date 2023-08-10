/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/react-in-jsx-scope */
import {FlatList, ListRenderItem, View} from 'react-native';
import PaymentCard from '../../../components/paymentCard';
import DefaultWrapper from '../../../wrappers/default-wrapper/DefaultWrapper';
import {Styles} from './styles';
import {HistoryPaymentHook} from './hook';
import {Content} from '../../../api/types';
const HistoryPaymentView = () => {
  const {historyPayment} = HistoryPaymentHook();
  // console.log('historyPayment', JSON.stringify(historyPayment, null, 2));
  const Content = historyPayment.content;

  const renderPaymentHistory: ListRenderItem<Content> = ({item}) => (
    <View key={item.id}>
      <PaymentCard
        amount={item.amount}
        content={item.content}
        endDate={item.endDate}
        startDate={item.startDate}
      />
    </View>
  );

  return (
    <DefaultWrapper hasUser title="История оплаты">
      <View style={Styles.container}>
        <FlatList
          data={Content}
          style={Styles.flatlistContainer}
          renderItem={renderPaymentHistory}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
    </DefaultWrapper>
  );
};
export default HistoryPaymentView;
