import { useNavigation } from '@react-navigation/native';
import React, { PropsWithChildren, useContext } from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  Platform,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import {
  ArrowLeftIcon,
  ArrowLeftIconForIos,
  BellIcon,
} from '../../assets/icons/index';
import { COLORS } from '../../constants/COLORS';
import { defaultWrapperStyles } from './DefaultWrapper.styles';
import { ROUTES } from '../../navigation/routes';
import { SettingHooks } from '../../screens/Main/Setting/hooks';
import { ThemeContext } from '../../utils/themeContext';
import LinearGradient from 'react-native-linear-gradient';

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
  const { account } = SettingHooks();
  const navigation = useNavigation();

  const onArrowLeftPress = () => {
    navigation.goBack();
    onArrowLeftBtnPress && onArrowLeftBtnPress();
  };
  const onNotificationPress = () => {
    navigation.navigate(ROUTES.MAIN.NOTIFICATIONS as never);
  };
  const { theme } = useContext(ThemeContext);
  let activeColor = COLORS[theme];

  return (
    <ImageBackground
      source={require("../../assets/images/background.png")}
      style={[
        defaultWrapperStyles.container,
        // { backgroundColor: activeColor.primary },
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
              { color: activeColor.textColor2 },
            ]}>
            {account?.firstName} {account.lastName}
          </Text>
        )}
      </SafeAreaView>
      <LinearGradient
        colors={["#3D7A88", "#367569"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
        style={[
          defaultWrapperStyles.childrenContainer,
          // { backgroundColor: "rgba(61, 122, 136, 1)" },
        ]}>
        {isLoad ? (
          <View style={defaultWrapperStyles.activityIndicator}>
            <ActivityIndicator size={'large'} color={COLORS.BLUE} />
          </View>
        ) : (
          children
        )}
      </LinearGradient>
    </ImageBackground>
  );
};

export default DefaultWrapper;
