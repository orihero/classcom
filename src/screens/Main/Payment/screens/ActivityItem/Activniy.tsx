import {
  Animated,
  ListRenderItem,
  StyleSheet,
  View,
  ViewToken,
} from 'react-native';
import {useActivityItemHook} from './hook';
import {PaymentCard} from '../../../../../components/paymentCard';
import {Content} from '../../../../../api/types';
import {ScrollViewPadding} from '../../../../../constants/constants';
import React, {useCallback, useRef} from 'react';
import {useSharedValue} from 'react-native-reanimated';

const ActivniyScreenItem = () => {
  const {subscription} = useActivityItemHook();
  console.log('subscription', JSON.stringify(subscription, null, 2));
  const {content} = subscription;
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const SPACING = 20;
  const ITEM_SIZE = 80 + SPACING / 2;
  console.log(ITEM_SIZE);
  const viewableItems = useSharedValue<ViewToken[]>([]);
  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});

  const onViewCallBack = useCallback(
    //@ts-ignore
    ({viewableItems: vItems}) => {
      viewableItems.value = vItems;
    },
    [viewableItems],
  );

  const renderPaymentHistory: ListRenderItem<Content> = ({item, index}) => {
    const inputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 2)];
    const opacityInputRange = [
      -1,
      0,
      ITEM_SIZE * index,
      ITEM_SIZE * (index + 1),
    ];
    const scale = scrollY.interpolate({
      inputRange,
      outputRange: [1, 1, 1, 0],
    });
    const opacity = scrollY.interpolate({
      inputRange: opacityInputRange,
      outputRange: [1, 1, 1, 0],
    });

    return (
      <Animated.View
        key={item.id}
        style={{
          transform: [{scale}],
          opacity,
        }}>
        <PaymentCard item={item} index={index} />
      </Animated.View>
    );
  };
  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={content}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {
            useNativeDriver: true,
          },
        )}
        style={styles.flatlistContainer}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={ScrollViewPadding}
        renderItem={renderPaymentHistory}
        viewabilityConfig={viewConfigRef.current}
        onViewableItemsChanged={onViewCallBack}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

export default ActivniyScreenItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  flatlistContainer: {
    height: '100%',
  },
});
