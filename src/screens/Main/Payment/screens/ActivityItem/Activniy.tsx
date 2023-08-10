/* eslint-disable react/react-in-jsx-scope */
import {FlatList, ListRenderItem, StyleSheet, View} from 'react-native';
import {useActivityItemHook} from './hook';
import PaymentCard from '../../../../../components/paymentCard';
import {Content} from '../../../../../api/types';
import {PaddingHorizantal} from '../../../../../constants/sizes';

const ActivniyScreenItem = () => {
  const {subscription} = useActivityItemHook();
  const {content} = subscription;
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
    <View style={styles.container}>
      <FlatList
        data={content}
        style={styles.flatlistContainer}
        renderItem={renderPaymentHistory}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

export default ActivniyScreenItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: PaddingHorizantal,
  },
  flatlistContainer: {
    height: '100%',
  },
});
