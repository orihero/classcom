import {useNavigation} from '@react-navigation/native';
import React, {PropsWithChildren} from 'react';
import {SafeAreaView, TouchableOpacity, View, Text} from 'react-native';
import {ArrowLeftIcon, BellIcon} from '../../assets/icons/index';
import {COLORS} from '../../constants/COLORS';
import {defaultWrapperStyles} from './DefaultWrapper.styles';
import {ROUTES} from '../../navigation/routes';

export interface DefaultWrapperProps {
  title: string;
  hasUser?: boolean;
  hasIcon?: boolean;
}

const DefaultWrapper = ({
  children,
  hasUser,
  title,
  hasIcon,
}: PropsWithChildren<DefaultWrapperProps>) => {
  const navigation = useNavigation();
  const onArrowLeftPress = () => {
    navigation.goBack();
  };
  const onNotificationPress = () => {
    navigation.navigate(ROUTES.MAIN.NOTIFICATIONS as never);
  };

  return (
    <View style={defaultWrapperStyles.container}>
      <SafeAreaView>
        <View style={defaultWrapperStyles.headerContainer}>
          <TouchableOpacity onPress={onArrowLeftPress}>
            <ArrowLeftIcon fill={COLORS.WHITE} />
          </TouchableOpacity>
          <Text style={defaultWrapperStyles.titleText}>{title}</Text>
          {!hasIcon ? (
            <View style={{width: 20}} />
          ) : (
            <TouchableOpacity onPress={onNotificationPress}>
              <BellIcon />
            </TouchableOpacity>
          )}
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
