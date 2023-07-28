import {useNavigation} from '@react-navigation/native';
import React, {PropsWithChildren, useContext} from 'react';
import {SafeAreaView, TouchableOpacity, View, Text} from 'react-native';
import {ArrowLeftIcon, BellIcon} from '../../assets/icons/index';
import {COLORS} from '../../constants/colors';
import {defaultWrapperStyles} from './DefaultWrapper.styles';
import {ROUTES} from '../../navigation/routes';
import {SettingHooks} from '../../screens/Main/Setting/hooks';
import {ThemeContext} from '../../utils/themeContext';

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
  const {account} = SettingHooks();
  const navigation = useNavigation();
  const onArrowLeftPress = () => {
    navigation.goBack();
  };
  const onNotificationPress = () => {
    navigation.navigate(ROUTES.MAIN.NOTIFICATIONS as never);
  };
  const {theme} = useContext(ThemeContext);
  //@ts-ignore
  let activeColor = COLORS[theme];

  return (
    <View
      style={[
        defaultWrapperStyles.container,
        {backgroundColor: activeColor.secondary},
      ]}>
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
          <Text
            style={[
              defaultWrapperStyles.userText,
              {color: activeColor.textColor2},
            ]}>
            {account?.firstName} {account.lastName}
          </Text>
        )}
      </SafeAreaView>
      <View
        style={[
          defaultWrapperStyles.childrenContainer,
          {backgroundColor: activeColor.secondary},
        ]}>
        {children}
      </View>
    </View>
  );
};

export default DefaultWrapper;
