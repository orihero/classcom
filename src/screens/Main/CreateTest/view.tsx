import React from 'react';
import {View, Text} from 'react-native';
import Input from '../../../components/input';
import DefaultWrapper from '../../../wrappers/default-wrapper/DefaultWrapper';
import {createTestScreenStyles} from './style';
import DropDownAnimated from '../../../components/drop-down';
import {ArrowDown, ArrowUp} from '../../../assets/icons';
import ModalTest from './components/Modal';
import ModalButton from './components/Modal-btn';

const CreateTestScreen = () => {
  return (
    <DefaultWrapper hasUser title="Создать тест">
      <View style={createTestScreenStyles.container}>
        <Input dark name="Наименование" />
        <Text style={createTestScreenStyles.text}>Предмет</Text>
        <DropDownAnimated
          dropDown={<View></View>}
          dropDownInner={<View style={createTestScreenStyles.dropInner}></View>}
          container={createTestScreenStyles.drop}
          iconActive={<ArrowDown />}
          iconNoActive={<ArrowUp />}
        />
        <View style={createTestScreenStyles.btn}>
          <ModalTest
            container={
              <>
                <ModalButton
                  text="Одиночный выбор"
                  onPress={() => console.log('Error')}
                />
                <ModalButton
                  text="Множественный выбор"
                  onPress={() => console.log('Error')}
                />
                <ModalButton
                  text="Последовательность"
                  onPress={() => console.log('Error')}
                />
                <ModalButton
                  text="Соответствие"
                  onPress={() => console.log('Error')}
                />
                <ModalButton
                  text="Истина/Ложь"
                  onPress={() => console.log('Error')}
                />
                <ModalButton
                  text="Пропуски"
                  onPress={() => console.log('Error')}
                />
              </>
            }
          />
        </View>
      </View>
    </DefaultWrapper>
  );
};

export default CreateTestScreen;
