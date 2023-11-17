/* eslint-disable react/react-in-jsx-scope */
import {View} from 'react-native';
import WhiteWrapper from '../../../wrappers/white-wrapper/WhiteWrapper';
import Input from '../../../components/input';
import {useContext} from 'react';
import {ThemeContext} from '../../../utils/themeContext';
import {COLORS} from '../../../constants/COLORS';
import {Styles} from './styles';
import Button from '../../../components/button';
import useNewPasswordHook from './hook';
const NewPasswordScreen = () => {
  const {theme} = useContext(ThemeContext);
  let activeColor = COLORS[theme];

  const {onInputChange, password, checkConfirimPassword} = useNewPasswordHook();
  return (
    <WhiteWrapper title="Изменить пароль">
      <View
        style={[Styles.container, {backgroundColor: activeColor.secondary}]}>
        <View style={Styles.inputView}>
          <Input
            name="changeNumber"
            title="Новый пароль"
            value={password.password}
            onChange={() => onInputChange('password')}
            containerStyle={[
              {backgroundColor: activeColor?.tertiary},
              Styles.input,
            ]}
          />
          <Input
            name="changeNumber"
            title="Подтвердите пароль"
            value={password.confirmPassword}
            onChange={() => onInputChange('confirmPassword')}
            containerStyle={[
              {backgroundColor: activeColor?.tertiary},
              Styles.input,
            ]}
          />
        </View>
        <Button
          text="Изменить"
          onPress={checkConfirimPassword}
          style={[{backgroundColor: activeColor.primary}, Styles.button]}
          textColor={activeColor.secondary}
        />
      </View>
    </WhiteWrapper>
  );
};

export default NewPasswordScreen;
