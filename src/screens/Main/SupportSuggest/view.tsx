/* eslint-disable react/react-in-jsx-scope */
import {View} from 'react-native';

import DefaultWrapper from '../../../wrappers/default-wrapper/DefaultWrapper';
import {styles} from './styles';
import Button from '../../../components/button';
import Select from '../../../components/select';
import Input from '../../../components/input';
import {SupportSuggestHooks} from './hooks';

const SupportSuggest = () => {
  const {
    handleClickBtn,
    onInputChange,
    postTechServiceItems,
    techServiceItems,
  } = SupportSuggestHooks();
  return (
    <DefaultWrapper hasUser title="Ваши предложения">
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

export default SupportSuggest;
