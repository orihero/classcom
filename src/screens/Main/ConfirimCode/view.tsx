/* eslint-disable react/react-in-jsx-scope */
import {View} from 'react-native';
import WhiteWrapper from '../../../wrappers/white-wrapper/WhiteWrapper';
import Input from '../../../components/input';
import {PhoneIcon} from '../../../assets/icons';
import {useContext} from 'react';
import {ThemeContext} from '../../../utils/themeContext';
import {COLORS} from '../../../constants/colors';
import Button from '../../../components/button';
import {Styles} from './style';
import UiText from '../../../components/text';
import useSendSmsToPhoneNumber from './hook';

const ConfirimCodeView = () => {
  const {theme} = useContext(ThemeContext);
  let activeColor = COLORS[theme];

  const {clickedBtn, onInputChange, confirimCode} = useSendSmsToPhoneNumber();

  return (
    <WhiteWrapper title="Изменить пароль">
      <View
        style={[Styles.container, {backgroundColor: activeColor.secondary}]}>
        <View style={Styles.inputView}>
          <Input
            name="changeNumber"
            title="Номер телефона"
            value={confirimCode.phone}
            icon={<PhoneIcon />}
            containerStyle={[
              {backgroundColor: activeColor?.tertiary},
              Styles.input,
            ]}
          />
          <Input
            name="code"
            title="Код из смс"
            value={confirimCode.code}
            onChange={() => onInputChange('code')}
            containerStyle={[
              {backgroundColor: activeColor?.tertiary},
              Styles.input,
            ]}
          />
        </View>
        <View style={Styles.bottomView}>
          <Button
            text="Подтвердить код"
            onPress={clickedBtn}
            style={[{backgroundColor: activeColor.primary}, Styles.button]}
            textColor={activeColor.secondary}
          />
          <UiText
            title="Запросить еще раз ( 0:50 )"
            color="GREEN_ONE"
            type="Bold16"
            style={Styles.text}
          />
        </View>
      </View>
    </WhiteWrapper>
  );
};

export default ConfirimCodeView;
