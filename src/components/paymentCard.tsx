/* eslint-disable react/react-in-jsx-scope */
import {StyleSheet, View} from 'react-native';
import UiText from './text';
import {COLORS} from '../constants/colors';
import {WalletIcon} from '../assets/icons';
import {FC, useContext} from 'react';
import {ThemeContext} from '../utils/themeContext';
import {Content} from '../api/types';

const PaymentCard: FC<Partial<Content>> = ({
  amount,
  content,
  endDate,
  startDate,
}) => {
  const {theme} = useContext(ThemeContext);
  let activeColor = COLORS[theme];

  return (
    <View style={[Styles.container, {backgroundColor: activeColor.secondary}]}>
      <WalletIcon />
      <View style={Styles.cardInfo}>
        <View style={Styles.topSection}>
          <UiText
            style={Styles.title}
            title={content ? content : 'Подписка'}
            type="Bold18"
            themeColor={activeColor.textColor}
          />
          <UiText
            style={Styles.title}
            title={`${amount ? amount : '40 000'} сум`}
            type="Bold18"
            themeColor={activeColor.textColor2}
          />
        </View>
        <View style={Styles.bottomSection}>
          <UiText
            style={Styles.title}
            title={`c ${startDate ? startDate : '--.--.----'} `}
            type="mediumRegular16"
            themeColor={activeColor.textColor}
          />
          <UiText
            style={Styles.title}
            title={`до ${endDate ? endDate : '--.--.----'} `}
            type="mediumRegular16"
            themeColor={activeColor.textColor}
          />
        </View>
      </View>
    </View>
  );
};

export default PaymentCard;

const Styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.14,
    shadowRadius: 2.27,
    elevation: 10,
    borderRadius: 10,
    paddingHorizontal: 25,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    width: '100%',
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
