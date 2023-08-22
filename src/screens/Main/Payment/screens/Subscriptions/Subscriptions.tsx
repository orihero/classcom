/* eslint-disable react/react-in-jsx-scope */
import {FlatList, ListRenderItem, StyleSheet, View} from 'react-native';
import {useSubscriptionsHook} from './hook';
import PlateButton from '../../components/Plate-Button';
import {SubscriptionsItemProps} from '../../../../../api/types';

const SubscriptionsScreenItem = () => {
  const {subscriptions, handlePaymentGetID} = useSubscriptionsHook();

  const renderItem: ListRenderItem<SubscriptionsItemProps> = ({item}) => (
    <View key={item.id}>
      <PlateButton
        subscription={item.name}
        day={item.applicableDays}
        amount={item.amount}
        hasButton
        orderBtnPress={() => {
          handlePaymentGetID(item.id);
        }}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={subscriptions}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        style={styles.flatlistContainer}
      />
    </View>
  );
};

export default SubscriptionsScreenItem;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  flatlistContainer: {
    height: '100%',
  },
});
