/* eslint-disable react/react-in-jsx-scope */
import {View} from 'react-native';
import {Styles} from './styles';
import WhiteWrapper from '../../../wrappers/white-wrapper/WhiteWrapper';
import Input from '../../../components/input';
import {PhoneIcon} from '../../../assets/icons';
import {useContext} from 'react';
import {ThemeContext} from '../../../utils/themeContext';
import {COLORS} from '../../../constants/colors';
import Button from '../../../components/button';
import useChangePhoneNumber from './hook';

const ChangePasswordView = () => {
  const {theme} = useContext(ThemeContext);

  let activeColor = COLORS[theme];
  const {onNextScreen} = useChangePhoneNumber();

  return (
    <WhiteWrapper title="Изменить пароль">
      <View
        style={[Styles.container, {backgroundColor: activeColor.secondary}]}>
        <View style={Styles.inputView}>
          <Input
            name="changeNumber"
            title="Номер телефона"
            icon={<PhoneIcon />}
            containerStyle={[
              {backgroundColor: activeColor?.tertiary},
              Styles.input,
            ]}
          />
        </View>
        <Button
          text="Изменить"
          onPress={onNextScreen}
          style={[{backgroundColor: activeColor.primary}, Styles.button]}
        />
      </View>
    </WhiteWrapper>
  );
};

export default ChangePasswordView;
