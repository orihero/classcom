import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {styles} from './styles';
import DefaultWrapper from '../../../wrappers/default-wrapper/DefaultWrapper';
import TopTabs from '../../../components/home-tabs';
import PlaneButton from '../../../components/plane-button';
import Button from '../../../components/button';
import {TestingHooks} from './hooks';
import {useNavigation} from '@react-navigation/native';
const content = [
  {
    title: 'Тестирования',

    content: () => (
      <>
        <ScrollView>
          <View style={{marginTop: 10, marginBottom: 30}}>
            <PlaneButton
              testingTitle="Наименование тестирования"
              // deleteTitle="Удалить"
              authorTitle="Автор"
              nameTitle="В.Чаплина"
              lessonTitle="Русский язык"
            />
            <PlaneButton
              testingTitle="Наименование тестирования"
              // deleteTitle="Удалить"
              authorTitle="Автор"
              nameTitle="В.Чаплина"
              lessonTitle="Русский язык"
            />
            <PlaneButton
              testingTitle="Наименование тестирования"
              // deleteTitle="Удалить"
              authorTitle="Автор"
              nameTitle="В.Чаплина"
              lessonTitle="Русский язык"
            />
          </View>
        </ScrollView>
      </>
    ),
  },
  {
    content: ({}) => (
      <View style={{flex: 1}}>
        <ScrollView>
          <View style={{marginTop: 10, marginBottom: 30}}>
            <PlaneButton
              testingTitle="Наименование тестирования"
              deleteTitle="Удалить"
              // authorTitle="Автор"
              // nameTitle="В.Чаплина"
              lessonTitle="Русский язык"
            />
            <PlaneButton
              testingTitle="Наименование тестирования"
              deleteTitle="Удалить"
              // authorTitle="Автор"
              // nameTitle="В.Чаплина"
              lessonTitle="Русский язык"
            />
            <PlaneButton
              testingTitle="Наименование тестирования"
              deleteTitle="Удалить"
              // authorTitle="Автор"
              // nameTitle="В.Чаплина"
              lessonTitle="Русский язык"
            />
          </View>
        </ScrollView>
        <View style={styles.btn}>
          <Button text="Создать тестирование" />
        </View>
      </View>
    ),
    title: 'Мои тесты',
  },
];

const TestingScreen = () => {
  const {onCreateTestPress} = TestingHooks();
  return (
    <DefaultWrapper hasUser title="Тестирование">
      <TopTabs content={content} />
      <Button style={{marginBottom: 70,}} text='Test' onPress={onCreateTestPress} />
    </DefaultWrapper>
  );
};

export default TestingScreen;
