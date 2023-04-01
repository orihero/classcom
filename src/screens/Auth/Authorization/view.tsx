import {
  View,
  Text,
  Image,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Assets} from '../../../utils/requireAssets';
import Input from '../../../components/input';
import {LockIcon, UserIcon} from '../../../assets/icons';
import Button from '../../../components/button';
import {AuthorizationHooks} from './hooks';

const AuthorizationScreen = () => {
  const {onRegisterPress} = AuthorizationHooks();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground style={styles.image} source={Assets.images.authPhoto}>
          <Image style={styles.imageCheck} source={Assets.images.checkPhoto} />
          <Text style={styles.textClassCom}>CLASSCOM</Text>
          <Text style={styles.text}>Виртуальный кабинет учителя</Text>
        </ImageBackground>
      </View>

      <View style={styles.registerContainer}>
        <Input placeholder="Логин" icon={<UserIcon />} name="Логин" />
        <Input
          placeholder="Пароль"
          icon={<LockIcon />}
          eyes={true}
          name="Пароль"
        />

        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.textLogin}>Забыли пароль?</Text>
        </TouchableOpacity>

        <Button
          style={{marginVertical: 30}}
          onPress={() => console.log('onPress')}
          text="Войти"
        />

        <TouchableOpacity onPress={onRegisterPress} activeOpacity={0.7}>
          <Text style={styles.textRegister}>Регистрация</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AuthorizationScreen;
