import {useNavigation} from '@react-navigation/native';
import React, {PropsWithChildren} from 'react';
import {SafeAreaView, TouchableOpacity, View, Text} from 'react-native';
import {ArrowLeftIcon} from '../../assets/icons/index';
import {COLORS} from '../../constants/COLORS';
import {defaultWrapperStyles} from './DefaultWrapper.styles';

export interface DefaultWrapperProps {
  title: string;
  hasUser?: boolean;
}

const DefaultWrapper = ({
  children,
  hasUser,
  title,
}: PropsWithChildren<DefaultWrapperProps>) => {
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
          <Text style={defaultWrapperStyles.titleText}>{title}</Text>
          <View style={{width: 20}} />
        </View>
        {hasUser && (
          <Text style={defaultWrapperStyles.userText}>
            Ройтман Рафаэль Евгеньевич
          </Text>
        )}
      </SafeAreaView>
      <View style={defaultWrapperStyles.childrenContainer}>{children}</View>
    </View>
  );
};

export default DefaultWrapper;
