import React from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import Input from '../../../components/input';
import DefaultWrapper from '../../../wrappers/default-wrapper/DefaultWrapper';
import {styles} from './style';
import DropDownAnimated from '../../../components/drop-down';
import {ArrowDown, ArrowUp} from '../../../assets/icons';
import UiText from '../../../components/text';
import {useCreateNewTestHook} from './hook';
import {ScrollViewPadding} from '../../../constants/constants';
import Button from '../../../components/button';

const CreateTestScreen = () => {
  const {courses, getSubjectId, createTest, onInputChange, addNewTest} =
    useCreateNewTestHook();
  return (
    <DefaultWrapper hasUser title="Создать тест">
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={ScrollViewPadding}>
        <View style={styles.childContainer}>
          <View style={styles.topCard}>
            <UiText
              title="Наименование"
              color="GREY_BLACK"
              type="mediumRegular20"
            />
            <Input
              dark
              name="testName"
              value={createTest?.testName}
              placeholder="Введите наименование тестирования"
              onChange={onInputChange}
            />
          </View>
          <View style={styles.predmetCard}>
            <UiText title="Предмет" type="mediumRegular20" color="GREY_BLACK" />
            <DropDownAnimated
              dropDown={<View />}
              dropDownInner={courses?.map(item => {
                return (
                  <View key={item.id} style={styles.dropInner}>
                    <TouchableOpacity
                      style={styles.btndrop}
                      onPress={() => getSubjectId(item.id)}>
                      <UiText
                        title={item.name}
                        type="mediumRegular16"
                        color="GREY_BLACK"
                      />
                    </TouchableOpacity>
                  </View>
                );
              })}
              container={styles.drop}
              iconActive={<ArrowDown />}
              iconNoActive={<ArrowUp />}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.btn}>
        <Button text="Продолжить" onPress={addNewTest} />
        {/* <ModalTest
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
        /> */}
      </View>
    </DefaultWrapper>
  );
};

export default CreateTestScreen;
