/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {useContext} from 'react';
import {styles} from './styles';
import DefaultWrapper from '../../../wrappers/default-wrapper/DefaultWrapper';
import {Assets} from '../../../utils/requireAssets';
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
import {COLORS} from '../../../constants/colors';
import {SettingHooks} from './hooks';
import Active_Button from './components/ActiveButton';
import Button from '../../../components/button';
import {ThemeContext} from '../../../utils/themeContext';
import {ThemeType} from '../../../types';
import {useSelector} from 'react-redux';
import {sliderRangeSelector} from '../../../store/slices/sliderRange';
import UiText from '../../../components/text';

const SettingScreen = () => {
  const {updateTheme, theme} = useContext(ThemeContext);
  let activeColor = COLORS[theme];

  const {range, onChangeRange, account, onChangePasswordPress} = SettingHooks();
  console.log('range', range);

  const store = useSelector(sliderRangeSelector);

  return (
    <DefaultWrapper title="Настройки" hasUser>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={Assets.images.user} />
        <TouchableOpacity>
          <Text style={[styles.imageText, {color: activeColor.textColor2}]}>
            Добавить фото
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{backgroundColor: activeColor?.secondary}}>
        <View style={{marginBottom: 40}}>
          <Input
            title="Имя"
            placeholder={account?.firstName}
            value={account?.firstName}
            icon={<UserIcon />}
            containerStyle={{backgroundColor: activeColor?.tertiary}}
            parentContainerStyle={styles.inputContainer}
          />
          <Input
            title="Фамилия"
            placeholder={account?.lastName}
            value={account?.lastName}
            icon={<UserIcon />}
            containerStyle={{backgroundColor: activeColor?.tertiary}}
            parentContainerStyle={styles.inputContainer}
          />
          <Input
            title="Логин"
            placeholder={account?.login}
            value={account?.login}
            icon={<UserIcon />}
            containerStyle={{backgroundColor: activeColor?.tertiary}}
            parentContainerStyle={styles.inputContainer}
          />
          <Input
            title="Номер телефона"
            placeholder={account?.phone}
            icon={<PhoneIcon />}
            containerStyle={{backgroundColor: activeColor?.tertiary}}
            parentContainerStyle={styles.inputContainer}
          />
          <DropDownAnimated
            text="Язык"
            iconActive={<ArrowDown />}
            iconNoActive={<ArrowUp />}
            containerInner={[
              styles.dropInner,
              {backgroundColor: activeColor?.tertiary},
            ]}
            container={[
              styles.dropContainer,
              {backgroundColor: activeColor?.tertiary},
            ]}
            dropDown={
              <View style={[styles.dropDown]}>
                <WorldIcon />
                <Text style={[styles.text, {color: activeColor.textColor}]}>
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
          <Text style={styles.titleSlider}>Размер текста</Text>
          <View style={styles.sliderContainer}>
            <Slider
              style={{
                width: '85%',
                height: 40,
              }}
              minimumValue={0.5}
              maximumValue={1}
              minimumTrackTintColor={activeColor?.primary}
              maximumTrackTintColor={activeColor?.textColor2}
              thumbTintColor={activeColor?.primary}
              value={(store.value + 50) / 100}
              onValueChange={value =>
                onChangeRange(parseInt((value * 100) as never, 10) as never)
              }
            />
            <Text style={[styles.textSlider, {color: activeColor.textColor}]}>
              {range}
            </Text>
          </View>

          <UiText
            title="Поменять стилистику"
            type="bookRegular18"
            style={styles.textStyle}
          />
          <View style={styles.colorContainer}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={[styles.color, {backgroundColor: COLORS.GREEN_ONE}]}
              onPress={() => updateTheme(ThemeType.GREEN)}
            />
            <TouchableOpacity
              activeOpacity={0.7}
              style={[styles.color, {backgroundColor: COLORS.GREY_BLACK}]}
              onPress={() => updateTheme(ThemeType.DARK)}
            />
            <TouchableOpacity
              activeOpacity={0.7}
              style={[styles.color, {backgroundColor: COLORS.BLUE}]}
              onPress={() => updateTheme(ThemeType.LIGHT)}
            />
          </View>
          <Active_Button />
          <View>
            <Button
              textStyle={{color: activeColor?.noneBackgroundBtn}}
              style={[
                styles.button,
                {borderColor: activeColor?.noneBackgroundBtn},
              ]}
              onPress={onChangePasswordPress}
              text="Изменить пароль"
            />
            <Button
              text="Изменить"
              onPress={() => {}}
              style={{backgroundColor: activeColor.primary}}
            />
          </View>
        </View>
      </ScrollView>
    </DefaultWrapper>
  );
};

export default SettingScreen;
