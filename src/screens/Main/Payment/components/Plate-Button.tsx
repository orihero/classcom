import {View, Text, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS} from '../../../../constants/COLORS';
import {WalletIcon} from '../../../../assets/icons';
import Button from '../../../../components/button';
import {ThemeContext} from '../../../../utils/themeContext';

interface PlateProps {
  subscription?: string;
  day?: any;
  data?: string;
  amount?: number;
  onPress?: () => void;
  hasButton?: boolean;
  orderBtnPress?: () => void;
}

const PlateButton = ({
  hasButton,
  subscription,
  data,
  day,
  amount,
  onPress,
  orderBtnPress,
}: PlateProps) => {
  const {theme} = useContext(ThemeContext);
  let activeColor = COLORS[theme];
  return (
    <>
      {hasButton ? (
        <View style={styles.container}>
          <View style={styles.btnTextContainer}>
            <View style={styles.first}>
              <WalletIcon />
              <View style={{marginLeft: 20}}>
                <Text style={styles.firstText}>{subscription}</Text>
                <Text style={styles.secondText}>{`на ${day} дней`}</Text>
              </View>
            </View>
            <View style={styles.second}>
              <Text style={styles.monyText}>{`${amount} сум`}</Text>
              {!hasButton ? (
                <Text style={styles.secondText}>{data}</Text>
              ) : (
                <Text style={styles.secondText} />
              )}
            </View>
          </View>
          <View style={styles.cartBottomSec}>
            {hasButton ? (
              <Button
                text="Купить"
                onPress={orderBtnPress}
                textColor={COLORS.WHITE}
                style={[
                  styles.btn,
                  {backgroundColor: activeColor.selectedBack},
                ]}
              />
            ) : null}
          </View>
        </View>
      ) : (
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={0.7}
          style={styles.container}>
          <View style={styles.btnTextContainer}>
            <View style={styles.first}>
              <WalletIcon />
              <View style={{marginLeft: 20}}>
                <Text style={styles.firstText}>{subscription}</Text>
                <Text style={styles.secondText}>{day}</Text>
              </View>
            </View>
            <View style={styles.second}>
              <Text style={styles.monyText}>{amount}</Text>
              {!hasButton ? (
                <Text style={styles.secondText}>{data}</Text>
              ) : (
                <Text style={styles.secondText} />
              )}
            </View>
          </View>
          <View style={{alignItems: 'flex-end'}}>
            {hasButton ? (
              <Button
                text="Купить"
                onPress={() => console.log('Qsee')}
                style={[
                  styles.btn,
                  {backgroundColor: activeColor.selectedBack},
                ]}
              />
            ) : null}
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

export default PlateButton;

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
    marginHorizontal: 20,
    backgroundColor: COLORS.WHITE,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.27,
    elevation: 10,
  },
  btnTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cartBottomSec: {
    alignItems: 'flex-end',
  },
  first: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  second: {},
  firstText: {
    fontSize: 17,
    fontWeight: '700',
    color: COLORS.GREY_BLACK,
  },
  secondText: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.GREY_BLACK,
    marginTop: 7,
  },
  monyText: {
    fontSize: 17,
    fontWeight: '700',
    color: COLORS.BLUE,
  },
  btn: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    width: 100,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 0,
  },
});
