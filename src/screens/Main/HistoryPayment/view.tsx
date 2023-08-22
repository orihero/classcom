/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/react-in-jsx-scope */
import {FlatList, ListRenderItem, View, ViewToken} from 'react-native';
import {PaymentCard} from '../../../components/paymentCard';
import DefaultWrapper from '../../../wrappers/default-wrapper/DefaultWrapper';
import {Styles} from './styles';
import {HistoryPaymentHook} from './hook';
import {Content} from '../../../api/types';
import {useSharedValue} from 'react-native-reanimated';
import {useCallback, useRef} from 'react';
import {ScrollViewPadding} from '../../../constants/constants';
const HistoryPaymentView = () => {
  const {historyPayment} = HistoryPaymentHook();
  console.log(historyPayment);

  const Content = historyPayment.content;

  const viewableItems = useSharedValue<ViewToken[]>([]);
  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});

  const onViewCallBack = useCallback(
    //@ts-ignore
    ({viewableItems: vItems}) => {
      viewableItems.value = vItems;
    },
    [viewableItems],
  );

  const renderPaymentHistory: ListRenderItem<Content> = ({item}) => (
    <View key={item.id}>
      <PaymentCard item={item} viewableItems={viewableItems} />
    </View>
  );
  console.log(JSON.stringify(viewableItems.value, null, 2));

  return (
    <DefaultWrapper hasUser title="История оплаты">
      <View style={Styles.container}>
        <FlatList
          data={Content}
          style={Styles.flatlistContainer}
          renderItem={renderPaymentHistory}
          keyExtractor={(_, index) => index.toString()}
          onViewableItemsChanged={onViewCallBack}
          viewabilityConfig={viewConfigRef.current}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={ScrollViewPadding}
        />
      </View>
    </DefaultWrapper>
  );
};
export default HistoryPaymentView;
