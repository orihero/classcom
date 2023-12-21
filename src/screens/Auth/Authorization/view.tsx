import React, {useContext} from 'react';
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
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
import {ThemeContext} from '../../../utils/themeContext';
import {COLORS} from '../../../constants/COLORS';

const AuthorizationScreen = () => {
  const {onRegisterPress, onInputChange, onLogin, loading} =
    AuthorizationHooks();
  const {theme} = useContext(ThemeContext);
  let activeColor = COLORS[theme];

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ImageBackground
        style={{flex: 1}}
        source={require('../../../assets/images/background.png')}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <ImageBackground
              style={styles.image}
              source={Assets.images.authPhoto}>
              <Image
                style={styles.imageCheck}
                source={Assets.images.checkPhoto}
              />
              <Text style={styles.textClassCom}>CLASSCOM</Text>
              <Text style={styles.text}>Виртуальный кабинет учителя</Text>
            </ImageBackground>
          </View>

          <View style={styles.registerContainer}>
            <Input
              name="username"
              title="Логин"
              placeholder="Логин"
              icon={<UserIcon fill={'white'} />}
              onChange={onInputChange}
              containerStyle={{backgroundColor: 'rgba(248, 249, 250, 0.08)'}}
              placeholderColor="white"
              inputStyle={{color: 'white'}}
            />
            <Input
              name="password"
              title="Пароль"
              placeholder="Пароль"
              icon={<LockIcon fill={'white'} stroke={'white'} />}
              eyes={'white'}
              onChange={onInputChange}
              inputStyle={{color: 'white'}}
              placeholderColor="white"
              containerStyle={{backgroundColor: 'rgba(248, 249, 250, 0.08)'}}
            />

            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.textLogin}>Забыли пароль?</Text>
            </TouchableOpacity>

            <Button
              loading={loading}
              style={{marginVertical: 30}}
              onPress={onLogin}
              text="Войти"
              textColor={activeColor.activeTextColor}
            />

            <TouchableOpacity onPress={onRegisterPress} activeOpacity={0.7}>
              <Text style={styles.textRegister}>Регистрация</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default AuthorizationScreen;
