import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {LockIcon, UserIcon} from '../../../assets/icons';
import Button from '../../../components/button';
import Input from '../../../components/input';
import {Assets} from '../../../utils/requireAssets';
import {AuthorizationHooks} from './hooks';
import {styles} from './styles';

const AuthorizationScreen = () => {
  const {onRegisterPress, onInputChange, onLogin, loading} =
    AuthorizationHooks();

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
        <Input
          name="username"
          title="Логин"
          placeholder="Логин"
          icon={<UserIcon />}
          onChange={onInputChange}
        />
        <Input
          name="password"
          title="Пароль"
          placeholder="Пароль"
          icon={<LockIcon />}
          eyes
          onChange={onInputChange}
        />

        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.textLogin}>Забыли пароль?</Text>
        </TouchableOpacity>

        <Button
          loading={loading}
          style={{marginVertical: 30}}
          onPress={onLogin}
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
