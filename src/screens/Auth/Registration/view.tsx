import React, {useContext} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  ArrowLeftIcon,
  CheckIcon,
  LockIcon,
  PhoneIcon,
  UserIcon,
} from '../../../assets/icons';
import Button from '../../../components/button';
import Input from '../../../components/input';
import Select from '../../../components/select';
import {useCoursesHook} from '../../general-hooks/courses-hook';
import {useRegionsHook} from '../../general-hooks/regions-hook';
import {RegistrationHooks} from './hooks';
import {styles} from './styles';
import {ThemeContext} from '../../../utils/themeContext';
import {COLORS} from '../../../constants/colors';

const RegistrationScreen = () => {
  const {
    goBack,
    onRegisterPress,
    state,
    setState,
    onInputChange,
    values,
    loading,
    validationErrors,
  } = RegistrationHooks();

  const {regions, districts} = useRegionsHook(values.regionId);
  const {courses} = useCoursesHook();
  const {theme} = useContext(ThemeContext);
  let activeColor = COLORS[theme];

  return (
    <View style={styles.container}>
      <SafeAreaView style={{marginHorizontal: 15, marginBottom: 10}}>
        <TouchableOpacity onPress={goBack} style={{marginTop: 10}}>
          <ArrowLeftIcon />
        </TouchableOpacity>
        <Text style={styles.headerText}>Регистрация</Text>
      </SafeAreaView>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginBottom: 40, marginHorizontal: 30}}>
          <Input
            name="firstName"
            title="Имя"
            placeholder="Имя"
            onChange={onInputChange}
            icon={<UserIcon />}
            errors={validationErrors}
          />
          <Input
            name="lastName"
            title="Фамилия"
            placeholder="Фамилия"
            onChange={onInputChange}
            icon={<UserIcon />}
            errors={validationErrors}
          />
          <Input
            name="login"
            title="Логин"
            placeholder="Логин"
            onChange={onInputChange}
            icon={<UserIcon />}
            errors={validationErrors}
          />
          <Input
            name="phone"
            title="Номер телефона"
            placeholder="Номер телефона"
            onChange={onInputChange}
            icon={<PhoneIcon />}
            errors={validationErrors}
          />
          <Select
            items={regions}
            name="regionId"
            value={values.regionId}
            title="Область"
            placeholder="Область"
            onChange={onInputChange}
            errors={validationErrors}
            selectedBackColor={activeColor.selectBackColor2}
            selectTextColor={activeColor.textColor}
            light
          />
          <Select
            items={districts}
            name="districtId"
            value={values.districtId}
            title="Район"
            placeholder="Район"
            onChange={onInputChange}
            errors={validationErrors}
            selectedBackColor={activeColor.selectBackColor2}
            selectTextColor={activeColor.textColor}
            light
          />
          <Select
            items={courses}
            name="courseId"
            value={values.courseId}
            title="Предмет"
            placeholder="Предмет"
            onChange={onInputChange}
            errors={validationErrors}
            selectedBackColor={activeColor.selectBackColor2}
            selectTextColor={activeColor.textColor}
            light
          />
          <Input
            name="password"
            title="Новый пароль"
            placeholder="Новый пароль"
            icon={<LockIcon />}
            eyes
            onChange={onInputChange}
            errors={validationErrors}
          />
          <Input
            title="Подтвердите пароль"
            placeholder="Подтвердите пароль"
            icon={<LockIcon />}
            eyes
          />

          <View style={styles.checkContainer}>
            <TouchableOpacity
              onPress={() => setState(e => !e)}
              activeOpacity={0.7}
              style={styles.checkButton}>
              {!state ? <CheckIcon /> : <View />}
            </TouchableOpacity>
            <View style={styles.checkBox}>
              <Text style={styles.checkText}>Принимаю правила пользования</Text>
            </View>
          </View>

          <Button
            loading={loading}
            onPress={onRegisterPress}
            text="Зарегестрироваться"
            textColor={activeColor.activeTextColor}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default RegistrationScreen;
