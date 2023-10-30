import {useNavigation} from '@react-navigation/native';
import React, {PropsWithChildren, useContext} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  Platform,
  ActivityIndicator,
} from 'react-native';
import {
  ArrowLeftIcon,
  ArrowLeftIconForIos,
  BellIcon,
} from '../../assets/icons/index';
import {COLORS} from '../../constants/colors';
import {defaultWrapperStyles} from './DefaultWrapper.styles';
import {ROUTES} from '../../navigation/routes';
import {SettingHooks} from '../../screens/Main/Setting/hooks';
import {ThemeContext} from '../../utils/themeContext';

export interface DefaultWrapperProps {
  title: string;
  hasUser?: boolean;
  hasIcon?: boolean;
  isLoad?: boolean;
  onArrowLeftBtnPress?: () => void;
}

const DefaultWrapper = ({
  children,
  hasUser,
  title,
  hasIcon,
  isLoad = false,
  onArrowLeftBtnPress,
}: PropsWithChildren<DefaultWrapperProps>) => {
  const {account} = SettingHooks();
  const navigation = useNavigation();

  const onArrowLeftPress = () => {
    navigation.goBack();
    onArrowLeftBtnPress && onArrowLeftBtnPress();
  };
  const onNotificationPress = () => {
    navigation.navigate(ROUTES.MAIN.NOTIFICATIONS as never);
  };
  const {theme} = useContext(ThemeContext);
  let activeColor = COLORS[theme];

  return (
    <View
      style={[
        defaultWrapperStyles.container,
        {backgroundColor: activeColor.primary},
      ]}>
      <SafeAreaView>
        <View style={defaultWrapperStyles.headerContainer}>
          <TouchableOpacity
            onPress={onArrowLeftPress}
            style={defaultWrapperStyles.arrowBtn}>
            {Platform.OS === 'ios' ? (
              <ArrowLeftIconForIos fill={COLORS.WHITE} />
            ) : (
              <ArrowLeftIcon fill={COLORS.WHITE} />
            )}
          </TouchableOpacity>
          <Text style={defaultWrapperStyles.titleText}>{title}</Text>
          {!hasIcon ? (
            <View style={defaultWrapperStyles.notifactionView} />
          ) : (
            <View>
              <TouchableOpacity onPress={onNotificationPress}>
                <BellIcon />
              </TouchableOpacity>
            </View>
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
        {isLoad ? (
          <View style={defaultWrapperStyles.activityIndicator}>
            <ActivityIndicator size={'large'} color={COLORS.BLUE} />
          </View>
        ) : (
          children
        )}
      </View>
    </View>
  );
};

export default DefaultWrapper;
