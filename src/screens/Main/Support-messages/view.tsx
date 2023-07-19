import {View} from 'react-native';
import React from 'react';
import DefaultWrapper from '../../../wrappers/default-wrapper/DefaultWrapper';
import {styles} from './styles';
import Button from '../../../components/button';
import {SupportMessagesHooks} from './hooks';
import Select from '../../../components/select';
import Input from '../../../components/input';

const SupportMessagesScreen = () => {
  const {
    techServiceItems,
    postTechServiceItems,
    onInputChange,
    handleClickBtn,
  } = SupportMessagesHooks();
  console.log('techServiceItems', JSON.stringify(techServiceItems, null, 2));

  return (
    <DefaultWrapper hasUser title="Сообщения для службы поддержки">
      <View style={styles.container}>
        <Select
          items={techServiceItems as never}
          placeholder="Выберите тему"
          value={postTechServiceItems.themeId}
          onChange={() => onInputChange('themeId')}
          name="themeId"
        />
        <Input
          placeholder="Введите сообщение"
          value={postTechServiceItems.content}
          onChange={() => onInputChange('content')}
          containerStyle={styles.postContent}
        />
        <View style={styles.btn}>
          <Button text="Отправить" onPress={handleClickBtn} />
        </View>
      </View>
    </DefaultWrapper>
  );
};

export default SupportMessagesScreen;
