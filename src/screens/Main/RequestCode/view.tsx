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

const RequestCodeView = () => {
  const {theme} = useContext(ThemeContext);
  const {onInputChange, phoneNumber, clickedBtn} = useChangePhoneNumber();

  let activeColor = COLORS[theme];

  return (
    <WhiteWrapper title="Изменить пароль">
      <View
        style={[Styles.container, {backgroundColor: activeColor.secondary}]}>
        <View style={Styles.inputView}>
          <Input
            name="changeNumber"
            title="Номер телефона"
            icon={<PhoneIcon />}
            type="phone"
            value={phoneNumber.phone}
            onChange={() => onInputChange('phone')}
            containerStyle={[
              {backgroundColor: activeColor?.tertiary},
              Styles.input,
            ]}
          />
        </View>
        <Button
          text="Изменить"
          onPress={clickedBtn}
          style={[{backgroundColor: activeColor.btnBackColor2}, Styles.button]}
          textColor={activeColor.activeTextColor}
        />
      </View>
    </WhiteWrapper>
  );
};

export default RequestCodeView;
