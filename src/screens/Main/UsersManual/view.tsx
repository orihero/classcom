/* eslint-disable react/react-in-jsx-scope */
import {View} from 'react-native';
import UiText from '../../../components/text';
import DefaultWrapper from '../../../wrappers/default-wrapper/DefaultWrapper';
import {styles} from './styles';

const UsersMaual = () => {
  return (
    <DefaultWrapper hasUser title="Инструкция пользователя">
      <View style={styles.container}>
        <UiText
          title="Как пользоваться системой?"
          color="GREY_BLACK"
          type="Bold18"
        />
        <UiText
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          color="GREY_TWO"
          type="bookRegular16"
          style={styles.maualSubtitle}
        />
        <UiText
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          color="GREY_TWO"
          type="bookRegular16"
          style={styles.maualSubtitle}
        />
      </View>
    </DefaultWrapper>
  );
};
export default UsersMaual;
