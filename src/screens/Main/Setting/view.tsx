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
import Active_Button from './components/Active-button';
import Button from '../../../components/button';
import {ThemeContext} from '../../../utils/themeContext';
import {ThemeType} from '../../../types';
import {ThemeHelper} from '../../../helper/ThemeHelper';

const SettingScreen = () => {
  const {updateTheme} = useContext(ThemeContext);
  //@ts-ignore
  let activeColor = COLORS[ThemeHelper._theme];

  const {range, setRange, account} = SettingHooks();
  return (
    <DefaultWrapper title="Настройки" hasUser>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={Assets.images.user} />
        <TouchableOpacity>
          <Text style={styles.imageText}>Добавить фото</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{backgroundColor: activeColor?.secondary}}>
        <View style={{marginBottom: 40}}>
          <Input
            title="Имя"
            placeholder={account?.firstName}
            icon={<UserIcon />}
            containerStyle={{backgroundColor: activeColor?.tertiary}}
            parentContainerStyle={styles.inputContainer}
          />
          <Input
            title="Фамилия"
            placeholder={account?.lastName}
            icon={<UserIcon />}
            containerStyle={{backgroundColor: activeColor?.tertiary}}
            parentContainerStyle={styles.inputContainer}
          />
          <Input
            title="Логин"
            placeholder={account?.login}
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
            containerInner={styles.dropInner}
            container={styles.dropContainer}
            dropDown={
              <View style={styles.dropDown}>
                <WorldIcon />
                <Text style={styles.text}>Русский</Text>
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
              style={{width: '85%', height: 40}}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor={COLORS.BLUE}
              maximumTrackTintColor={COLORS.WHITE_ONE}
              thumbTintColor={COLORS.BLUE}
              value={0.5}
              onValueChange={value =>
                setRange(parseInt((value * 50) as never) as never)
              }
            />
            <Text style={styles.textSlider}>{range}</Text>
          </View>

          <Text style={styles.titleSlider}>Поменять стилистику</Text>
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
              textStyle={{color: COLORS.BLUE}}
              style={styles.button}
              onPress={() => {
                ThemeHelper.update(ThemeType.LIGHT);
              }}
              text="Изменить пароль"
            />
            <Button
              text="Изменить"
              onPress={() => {
                ThemeHelper.update(ThemeType.GREEN);
              }}
            />
          </View>
        </View>
      </ScrollView>
    </DefaultWrapper>
  );
};

export default SettingScreen;
