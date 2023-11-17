/* eslint-disable react/react-in-jsx-scope */
import {View} from 'react-native';

import DefaultWrapper from '../../../wrappers/default-wrapper/DefaultWrapper';
import {styles} from './styles';
import Button from '../../../components/button';
import Select from '../../../components/select';
import Input from '../../../components/input';
import {SupportSuggestHooks} from './hooks';
import {useContext} from 'react';
import {ThemeContext} from '../../../utils/themeContext';
import {COLORS} from '../../../constants/COLORS';

const SupportSuggest = () => {
  const {
    handleClickBtn,
    onInputChange,
    postTechServiceItems,
    techServiceItems,
    loading,
  } = SupportSuggestHooks();
  const {theme} = useContext(ThemeContext);
  let activeColor = COLORS[theme];
  return (
    <DefaultWrapper hasUser title="Ваши предложения">
      <View style={styles.container}>
        <Select
          items={techServiceItems as never}
          placeholder="Выберите тему"
          value={postTechServiceItems.themeId}
          onChange={() => onInputChange('themeId')}
          name="themeId"
          light
          selectedBackColor={activeColor.selectBackColor2}
        />
        <Input
          placeholder="Введите сообщение"
          value={postTechServiceItems.content}
          onChange={() => onInputChange('content')}
          containerStyle={styles.postContent}
        />
        <View style={styles.btn}>
          <Button
            loading={loading}
            text="Отправить"
            onPress={handleClickBtn}
            textColor={activeColor.activeTextColor}
            style={{backgroundColor: activeColor.btnBackColor2}}
          />
        </View>
      </View>
    </DefaultWrapper>
  );
};

export default SupportSuggest;
