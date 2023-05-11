import {View, Text, TextInput} from 'react-native';
import React from 'react';
import DefaultWrapper from '../../../wrappers/default-wrapper/DefaultWrapper';
import DropDownAnimated from '../../../components/drop-down';
import {styles} from './styles';
import {ArrowDown, ArrowUp} from '../../../assets/icons';
import Button from '../../../components/button';

const SupportMessagesScreen = () => {
  return (
    <DefaultWrapper hasUser title="Сообщения для службы поддержки">
      <View style={{flex: 1,}}>
        <DropDownAnimated
          dropDown={<Text style={styles.text}>Выберите тему</Text>}
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

export default SupportMessagesScreen;
