import React from 'react';
import {View} from 'react-native';
import Input from '../../../components/input';
import DefaultWrapper from '../../../wrappers/default-wrapper/DefaultWrapper';
import {createTestScreenStyles} from './style';

const CreateTestScreen = () => {
  return (
    <DefaultWrapper hasUser title="Создать тест">
      <View style={createTestScreenStyles.container}>
        <Input dark name="Наименование" />
      </View>
    </DefaultWrapper>
  );
};

export default CreateTestScreen;
