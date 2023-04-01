import {useNavigation} from '@react-navigation/native';
import React, {PropsWithChildren} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {ArrowLeftIcon} from '../../assets/icons';
import {COLORS} from '../../constants/COLORS';
import {defaultWrapperStyles} from '../default-wrapper/DefaultWrapper.styles';
import {whiteWrapperStyles} from './WhiteWrapper.styles';

const WhiteWrapper = (props: PropsWithChildren<any>) => {
  const navigation = useNavigation();
  const onArrowLeftPress = () => {
    navigation.goBack();
  };
  return (
    <View style={whiteWrapperStyles.container}>
      <SafeAreaView>
        <View style={whiteWrapperStyles.headerContainer}>
          <TouchableOpacity onPress={onArrowLeftPress}>
            <ArrowLeftIcon fill={COLORS.GREY_BLACK} />
          </TouchableOpacity>
          <Text style={whiteWrapperStyles.titleText}>Уведомления</Text>
        </View>
      </SafeAreaView>
      <View style={defaultWrapperStyles.childrenContainer}>
        {props.children}
      </View>
    </View>
  );
};

export default WhiteWrapper;
