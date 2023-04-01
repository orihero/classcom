import {useNavigation} from '@react-navigation/native';
import React, {PropsWithChildren} from 'react';
import {SafeAreaView, TouchableOpacity, View, Text} from 'react-native';
import {ArrowLeftIcon} from '../../assets/icons/index';
import {COLORS} from '../../constants/COLORS';
import {defaultWrapperStyles} from './DefaultWrapper.styles';

const DefaultWrapper = (props: PropsWithChildren<any>) => {
  const navigation = useNavigation();
  const onArrowLeftPress = () => {
    navigation.goBack();
  };

  return (
    <View style={defaultWrapperStyles.container}>
      <SafeAreaView>
        <View style={defaultWrapperStyles.headerContainer}>
          <TouchableOpacity onPress={onArrowLeftPress}>
            <ArrowLeftIcon fill={COLORS.WHITE} />
          </TouchableOpacity>
          <Text style={defaultWrapperStyles.titleText}>Уведомления</Text>
        </View>
      </SafeAreaView>
      <View style={defaultWrapperStyles.childrenContainer}>
        {props.children}
      </View>
    </View>
  );
};

export default DefaultWrapper;
