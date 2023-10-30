import {ListRenderItem, View, Animated} from 'react-native';
import {PaymentCard} from '../../../components/paymentCard';
import {Styles} from './styles';
import {HistoryPaymentHook} from './hook';
import {Content} from '../../../api/types';
import React from 'react';
import {ScrollViewPadding} from '../../../constants/constants';
import DefaultWrapper from '../../../wrappers/default-wrapper/DefaultWrapper';

const HistoryPaymentView = () => {
  const {historyPayment, loading} = HistoryPaymentHook();
  const Content = historyPayment.content;

  const scrollY = React.useRef(new Animated.Value(0)).current;

  const renderPaymentHistory: ListRenderItem<Content> = ({item, index}) => (
    <PaymentCard item={item} index={index} />
  );

  return (
    <DefaultWrapper hasUser title="История оплаты" isLoad={loading}>
      <View style={Styles.container}>
        <Animated.FlatList
          data={Content}
          style={Styles.flatlistContainer}
          renderItem={renderPaymentHistory}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollY}}}],
            {useNativeDriver: true},
          )}
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={ScrollViewPadding}
        />
      </View>
    </DefaultWrapper>
  );
};
export default HistoryPaymentView;
