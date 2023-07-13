/* eslint-disable react/react-in-jsx-scope */
import {TextInput, View} from 'react-native';
import {ArrowDown, ArrowUp} from '../../../assets/icons';
import DropDownAnimated from '../../../components/drop-down';
import UiText from '../../../components/text';
import DefaultWrapper from '../../../wrappers/default-wrapper/DefaultWrapper';
import {styles} from './styles';
import Button from '../../../components/button';

const SupportSuggest = () => {
  return (
    <DefaultWrapper hasUser title="Ваши предложения">
      <View style={{flex: 1}}>
        <DropDownAnimated
          dropDown={
            <UiText
              style={styles.text}
              title="Выберите тему"
              type="bookRegular16"
            />
          }
          dropDownInner={
            <TextInput multiline={true} style={styles.dropInner} />
          }
          container={styles.drop}
          iconActive={<ArrowDown />}
          iconNoActive={<ArrowUp />}
        />
        <View style={styles.btn}>
          <Button text="Отправить" />
        </View>
      </View>
    </DefaultWrapper>
  );
};

export default SupportSuggest;
