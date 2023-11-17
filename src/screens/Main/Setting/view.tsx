/* eslint-disable react-native/no-inline-styles */
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useContext } from 'react';
import { styles } from './styles';
import DefaultWrapper from '../../../wrappers/default-wrapper/DefaultWrapper';
import { Assets } from '../../../utils/requireAssets';
import Input from '../../../components/input';
import Slider from '@react-native-community/slider';
import {
  ArrowDown,
  ArrowUp,
  PhoneIcon,
  UserIcon,
  WorldIcon,
} from '../../../assets/icons';
import DropDownAnimated from '../../../components/drop-down';
import { COLORS } from '../../../constants/COLORS';
import { SettingHooks } from './hooks';
import Active_Button from './components/ActiveButton';
import Button from '../../../components/button';
import { ThemeContext } from '../../../utils/themeContext';
import { ThemeType } from '../../../types';
import UiText from '../../../components/text';
import { DrawerActions, useNavigation } from '@react-navigation/native';

const SettingScreen = () => {
  const { updateTheme, theme } = useContext(ThemeContext);
  let activeColor = COLORS[theme];

  const { range, onChangeRange, account, onChangePasswordPress } = SettingHooks();

  const drawer = useNavigation();

  const onArrowLeftBtnPress = () => {
    drawer.dispatch(DrawerActions.toggleDrawer);
  };

  return (
    <DefaultWrapper
      title="Настройки"
      hasUser
      onArrowLeftBtnPress={onArrowLeftBtnPress}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={Assets.images.user} />
        <TouchableOpacity>
          <UiText
            title="Добавить фото"
            type="bookRegular18"
            style={[styles.imageText, { color: activeColor.textColor2 }]}
          />
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}>
        <View style={{ marginBottom: 40 }}>
          <Input
            title="Имя"
            placeholder={account?.firstName}
            value={account?.firstName}
            icon={<UserIcon />}
            containerStyle={{ backgroundColor: activeColor?.tertiary }}
            parentContainerStyle={styles.inputContainer}
          />
          <Input
            title="Фамилия"
            placeholder={account?.lastName}
            value={account?.lastName}
            icon={<UserIcon />}
            containerStyle={{ backgroundColor: activeColor?.tertiary }}
            parentContainerStyle={styles.inputContainer}
          />
          <Input
            title="Логин"
            placeholder={account?.login}
            value={account?.login}
            icon={<UserIcon />}
            containerStyle={{ backgroundColor: activeColor?.tertiary }}
            parentContainerStyle={styles.inputContainer}
          />
          <Input
            title="Номер телефона"
            placeholder={account?.phone}
            icon={<PhoneIcon />}
            containerStyle={{ backgroundColor: activeColor?.tertiary }}
            parentContainerStyle={styles.inputContainer}
          />
          <DropDownAnimated
            text="Язык"
            iconActive={<ArrowDown />}
            iconNoActive={<ArrowUp />}
            containerInner={[
              styles.dropInner,
              { backgroundColor: activeColor?.tertiary },
            ]}
            container={[
              styles.dropContainer,
              { backgroundColor: activeColor?.tertiary },
            ]}
            dropDown={
              <View style={[styles.dropDown]}>
                <WorldIcon />
                <Text style={[styles.text, { color: activeColor.textColor }]}>
                  Русский
                </Text>
              </View>
            }
            dropDownInner={
              <View style={styles.dropInner}>
                <TouchableOpacity style={styles.btn}>
                  <WorldIcon />
                  <Text style={styles.text}>Русский</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                  <WorldIcon />
                  <Text style={styles.text}>Русский</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                  <WorldIcon />
                  <Text style={styles.text}>Русский</Text>
                </TouchableOpacity>
              </View>
            }
          />
          <UiText
            title="Размер текста"
            type="bookOblRegular16"
            style={styles.titleSlider}
          />
          <View style={styles.sliderContainer}>
            <Slider
              style={{
                width: '80%',
                height: 50,
              }}
              minimumValue={0.5}
              maximumValue={0.75}
              minimumTrackTintColor={activeColor?.primary}
              maximumTrackTintColor={activeColor?.textColor2}
              thumbTintColor={activeColor?.primary}
              aria-valuemax={30}
              onValueChange={value =>
                onChangeRange(parseInt((value * 100) as never, 10) as never)
              }
            />
            <Text style={[styles.textSlider, { color: activeColor.textColor }]}>
              {range}
            </Text>
          </View>

          <UiText
            title="Поменять стилистику"
            type="bookOblRegular16"
            style={styles.textStyle}
          />
          <View style={styles.colorContainer}>
            <View
              style={[
                styles.themeBorder,
                ThemeType.GREEN === theme && styles.activeThemeBorder,
                { borderColor: COLORS.GREEN_ONE },
              ]}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={[styles.color, { backgroundColor: COLORS.GREEN_ONE }]}
                onPress={() => updateTheme(ThemeType.GREEN)}
              />
            </View>
            <View
              style={[
                styles.themeBorder,
                ThemeType.DARK === theme && styles.activeThemeBorder,
                { borderColor: COLORS.GREY_BLACK },
              ]}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={[styles.color, { backgroundColor: COLORS.GREY_BLACK }]}
                onPress={() => updateTheme(ThemeType.DARK)}
              />
            </View>

            <View
              style={[
                styles.themeBorder,
                ThemeType.LIGHT === theme && styles.activeThemeBorder,
                { borderColor: COLORS.BLUE },
              ]}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={[styles.color, { backgroundColor: COLORS.BLUE }]}
                onPress={() => updateTheme(ThemeType.LIGHT)}
              />
            </View>
          </View>
          <Active_Button />
          <View style={styles.bottomBtns}>
            <Button
              textStyle={{ color: activeColor?.noneBackgroundBtn }}
              style={[styles.button, { borderColor: activeColor?.primary }]}
              onPress={onChangePasswordPress}
              text="Изменить пароль"
              textColor={activeColor.primary}
            />
            <Button
              text="Изменить"
              onPress={() => { }}
              style={{ backgroundColor: activeColor.btnBackColor2 }}
              textColor={activeColor.activeTextColor}
              colors={["#4C849C", "#409788"]}
            />
          </View>
        </View>
      </ScrollView>
    </DefaultWrapper>
  );
};

export default SettingScreen;
