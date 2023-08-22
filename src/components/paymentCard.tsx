import {StyleSheet, View, ViewToken} from 'react-native';
import UiText from './text';
import {COLORS} from '../constants/colors';
import {WalletIcon} from '../assets/icons';
import React, {FC} from 'react';
import {Content} from '../api/types';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';

type PaymentItemProps = {
  viewableItems: Animated.SharedValue<ViewToken[]>;
  item: Partial<Content>;
};

const PaymentCard: FC<PaymentItemProps> = React.memo(
  ({item, viewableItems}) => {
    const rStyle = useAnimatedStyle(() => {
      const isVisible = Boolean(
        viewableItems.value
          .filter(item => item.isViewable)
          .find(viewableItem => viewableItem.item.id === item.id),
      );

      return {
        opacity: withTiming(isVisible ? 1 : 0.6),
        transform: [
          {
            scale: withTiming(isVisible ? 1 : 0.9),
          },
        ],
      };
    }, []);

    return (
      <Animated.View style={[Styles.container, rStyle]}>
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
  },
);

export {PaymentCard};

const Styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.14,
    shadowRadius: 2.27,
    elevation: 10,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
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
