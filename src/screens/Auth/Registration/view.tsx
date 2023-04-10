import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  LayoutAnimation,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {
  ArrowDown,
  ArrowLeftIcon,
  ArrowUp,
  CheckIcon,
  LocationIcon,
  LockIcon,
  PhoneIcon,
  StudentIcon,
  UserIcon,
} from '../../../assets/icons';
import Input from '../../../components/input';
import {RegistrationHooks} from './hooks';
import Button from '../../../components/button';

const RegistrationScreen = () => {
  const {
    goBack,
    onRegisterPress,
    drop,
    setDrop,
    setShouldShow,
    shouldShow,
    state,
    setState,
    onInputChange,
  } = RegistrationHooks();

  return (
    <View style={styles.container}>
      <SafeAreaView style={{marginHorizontal: 15, marginBottom: 10}}>
        <TouchableOpacity onPress={goBack} style={{marginTop: 10}}>
          <ArrowLeftIcon />
        </TouchableOpacity>
        <Text style={styles.headerText}>Регистрация</Text>
      </SafeAreaView>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginBottom: 40}}>
          <Input
            name="firstName"
            title="Имя"
            placeholder="Имя"
            onChange={onInputChange}
            icon={<UserIcon />}
          />
          <Input
            name="lastName"
            title="Фамилия"
            placeholder="Фамилия"
            onChange={onInputChange}
            icon={<UserIcon />}
          />
          <Input
            name="login"
            title="Логин"
            placeholder="Логин"
            onChange={onInputChange}
            icon={<UserIcon />}
          />
          <Input
            name="phone"
            title="Номер телефона"
            placeholder="Номер телефона"
            onChange={onInputChange}
            icon={<PhoneIcon />}
          />
          <Input
            title="Область"
            placeholder="Область"
            icon={<LocationIcon />}
          />
          <Input title="Район" placeholder="Район" icon={<LocationIcon />} />

          <View style={{marginHorizontal: 20}}>
            <Text style={styles.text}>Предмет</Text>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.animated}
              onPress={() => {
                LayoutAnimation.configureNext(
                  LayoutAnimation.Presets.easeInEaseOut,
                );
                setShouldShow(!shouldShow);
              }}>
              <View style={{flexDirection: 'row'}}>
                <StudentIcon style={{marginRight: 10}} />
                <Text style={styles.textSubject}>{drop}</Text>
              </View>
              {!shouldShow ? <ArrowDown /> : <ArrowUp />}
            </TouchableOpacity>
            <View style={{}}>
              {!shouldShow ? (
                <View style={styles.animatedTwo}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => setDrop('Английский')}>
                    <Text style={styles.textSubject}>Английский</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => setDrop('Математика')}>
                    <Text style={styles.textSubject}>Математика</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => setDrop('Русский')}>
                    <Text style={styles.textSubject}>Русский</Text>
                  </TouchableOpacity>
                </View>
              ) : null}
            </View>
          </View>

          <Input
            title="Новый пароль"
            placeholder="Новый пароль"
            icon={<LockIcon />}
            eyes={true}
          />
          <Input
            title="Подтвердите пароль"
            placeholder="Подтвердите пароль"
            icon={<LockIcon />}
          />

          <View style={styles.checkContainer}>
            <TouchableOpacity
              onPress={() => setState(false)}
              activeOpacity={0.7}
              style={styles.checkButton}>
              {!state ? <CheckIcon /> : <View />}
            </TouchableOpacity>
            <View style={styles.checkBox}>
              <Text style={styles.checkText}>Принимаю правила пользования</Text>
            </View>
          </View>

          <Button onPress={onRegisterPress} text="Зарегестрироваться" />
        </View>
      </ScrollView>
    </View>
  );
};

export default RegistrationScreen;
