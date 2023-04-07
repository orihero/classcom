import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS} from '../../../../constants/COLORS';
import {WalletIcon} from '../../../../assets/icons';
import Button from '../../../../components/button';

interface PlateProps {
  subscription?: string;
  day?: string;
  data?: string;
  mony?: string;
  onPress: () => void;
  hasButton?: boolean;
}

const PlateButton = ({
  hasButton,
  subscription,
  data,
  day,
  mony,
  onPress,
}: PlateProps) => {
  return (
    <>
      {hasButton ? (
        <View style={styles.container}>
          <View style={styles.btnTextContainer}>
            <View style={styles.first}>
              <WalletIcon />
              <View style={{marginLeft: 20}}>
                <Text style={styles.firstText}>{subscription}</Text>
                <Text style={styles.secondText}>{day}</Text>
              </View>
            </View>
            <View style={styles.second}>
              <Text style={styles.monyText}>{mony}</Text>
              {!hasButton ? (
                <Text style={styles.secondText}>{data}</Text>
              ) : (
                <Text style={styles.secondText}></Text>
              )}
            </View>
          </View>
          <View style={{alignItems: 'flex-end'}}>
            {hasButton ? (
              <Button
                text="Купить"
                onPress={() => console.log('Qsee')}
                style={styles.btn}
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
              <Text style={styles.monyText}>{mony}</Text>
              {!hasButton ? (
                <Text style={styles.secondText}>{data}</Text>
              ) : (
                <Text style={styles.secondText}></Text>
              )}
            </View>
          </View>
          <View style={{alignItems: 'flex-end'}}>
            {hasButton ? (
              <Button
                text="Купить"
                onPress={() => console.log('Qsee')}
                style={styles.btn}
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
    marginVertical: 5,
    paddingHorizontal: 20,
    paddingVertical: 20,
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
    marginTop: 10,
  },
});
