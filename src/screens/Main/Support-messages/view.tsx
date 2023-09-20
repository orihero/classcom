import {View} from 'react-native';
import React, {useContext} from 'react';
import DefaultWrapper from '../../../wrappers/default-wrapper/DefaultWrapper';
import {styles} from './styles';
import Button from '../../../components/button';
import {SupportMessagesHooks} from './hooks';
import Select from '../../../components/select';
import Input from '../../../components/input';
import {ThemeContext} from '../../../utils/themeContext';
import {COLORS} from '../../../constants/colors';

const SupportMessagesScreen = () => {
  const {
    techServiceItems,
    postTechServiceItems,
    onInputChange,
    handleClickBtn,
    loading,
  } = SupportMessagesHooks();

  const {theme} = useContext(ThemeContext);
  let activeColor = COLORS[theme];

  return (
    <DefaultWrapper hasUser title="Сообщения для службы поддержки">
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
          containerStyle={[styles.postContent]}
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

export default SupportMessagesScreen;
