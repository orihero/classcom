import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
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
import {COLORS} from '../../../constants/COLORS';
import {SettingHooks} from './hooks';
import Active_Button from './components/Active-button';
import Button from '../../../components/button';

const SettingScreen = () => {
  const {range, setRange, account} = SettingHooks();
  return (
    <DefaultWrapper title="Настройки" hasUser>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={Assets.images.user} />
        <TouchableOpacity>
          <Text style={styles.imageText}>Добавить фото</Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginBottom: 40}}>
          <Input
            name="Имя"
            placeholder={account?.firstName}
            icon={<UserIcon />}
          />
          <Input
            name="Фамилия"
            placeholder={account?.lastName}
            icon={<UserIcon />}
          />
          <Input
            name="Логин"
            placeholder={account?.login}
            icon={<UserIcon />}
          />
          <Input
            name="Номер телефона"
            placeholder={account?.phone}
            icon={<PhoneIcon />}
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
            />
            <TouchableOpacity
              activeOpacity={0.7}
              style={[styles.color, {backgroundColor: COLORS.GREY_BLACK}]}
            />
            <TouchableOpacity
              activeOpacity={0.7}
              style={[styles.color, {backgroundColor: COLORS.MIDNIGHT_BLUE}]}
            />
            <TouchableOpacity
              activeOpacity={0.7}
              style={[styles.color, {backgroundColor: COLORS.BLUE}]}
            />
          </View>

          <Active_Button />

          <View>
            <Button
              textStyle={{color: COLORS.BLUE}}
              style={styles.button}
              text="Изменить пароль"
            />
            <Button text="Изменить" />
          </View>
        </View>
      </ScrollView>
    </DefaultWrapper>
  );
};

export default SettingScreen;
