import {StyleSheet, View, Animated} from 'react-native';
import UiText from './text';
import {COLORS} from '../constants/colors';
import {WalletIcon} from '../assets/icons';
import React, {FC} from 'react';
import {Content} from '../api/types';

type PaymentItemProps = {
  item: Partial<Content>;
  itemSize?: number;
  index: number;
};

const PaymentCard: FC<PaymentItemProps> = React.memo(({item, index}) => {
  const SPACING = 10;
  const ITEM_SIZE = SPACING * 4 - 10;
  const scrollY = React.useRef(new Animated.Value(0)).current;

  const inputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 2)];
  const scale = scrollY.interpolate({
    inputRange,
    outputRange: [1, 1, 1, 0],
  });

  return (
    <Animated.View style={[Styles.container, {transform: [{scale}]}]}>
      <WalletIcon />
      <View style={Styles.cardInfo}>
        <View style={Styles.topSection}>
          <UiText
            style={Styles.title}
            title={item.content ? item.content : 'Подписка'}
            type="Bold18"
            color="GREY_BLACK"
          />
          <UiText
            style={Styles.title}
            title={`${item.amount ? item.amount : '40 000'} сум`}
            type="Bold18"
            color="BLUE2"
          />
        </View>
        <View style={Styles.bottomSection}>
          <UiText
            style={Styles.title}
            title={`c ${item.startDate ? item.startDate : '--.--.----'} `}
            type="mediumRegular16"
            color="GREY_BLACK"
          />
          <UiText
            style={Styles.title}
            title={`до ${item.endDate ? item.endDate : '--.--.----'} `}
            type="mediumRegular16"
            color="GREY_BLACK"
          />
        </View>
      </View>
    </Animated.View>
  );
});

export {PaymentCard};

const Styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    marginHorizontal: 20,
    shadowColor: '#000',
    height: 70,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.14,
    shadowRadius: 2.27,
    elevation: 10,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    gap: 15,
  },
  cardInfo: {
    flexDirection: 'column',
    width: '85%',
    gap: 5,
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 15,
  },
  title: {},
});
