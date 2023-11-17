import {useNavigation} from '@react-navigation/native';
import React, {FC, useContext} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {ArrowLeftIcon} from '../../assets/icons';
import {COLORS} from '../../constants/COLORS';
import {defaultWrapperStyles} from '../default-wrapper/DefaultWrapper.styles';
import {whiteWrapperStyles} from './WhiteWrapper.styles';
import {ThemeContext} from '../../utils/themeContext';

interface Props {
  title: string;
  children?: React.ReactNode;
}

const WhiteWrapper: FC<Props> = ({title, children}) => {
  const navigation = useNavigation();
  const onArrowLeftPress = () => {
    navigation.goBack();
  };
  const {theme} = useContext(ThemeContext);
  let activeColor = COLORS[theme];

  return (
    <View
      style={[
        whiteWrapperStyles.container,
        {backgroundColor: activeColor.secondary},
      ]}>
      <SafeAreaView>
        <View style={whiteWrapperStyles.headerContainer}>
          <TouchableOpacity onPress={onArrowLeftPress}>
            <ArrowLeftIcon fill={activeColor.textColor} />
          </TouchableOpacity>
          <Text
            style={[
              whiteWrapperStyles.titleText,
              {color: activeColor.textColor},
            ]}>
            {title}
          </Text>
        </View>
      </SafeAreaView>
      <View
        style={
          (defaultWrapperStyles.childrenContainer,
          {backgroundColor: activeColor.secondary})
        }>
        {children}
      </View>
    </View>
  );
};

export default WhiteWrapper;
