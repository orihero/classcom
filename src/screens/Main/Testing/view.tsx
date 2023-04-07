import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {styles} from './styles';
import DefaultWrapper from '../../../wrappers/default-wrapper/DefaultWrapper';
import TopTabs from '../../../components/home-tabs';
import PlaneButton from '../../../components/plane-button';

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
    content: () => (
      <>
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
      </>
    ),
    title: 'Мои тесты',
  },
];

const TestingScreen = () => {
  return (
    <DefaultWrapper hasUser title="Тестирование">
      <TopTabs content={content} />
    </DefaultWrapper>
  );
};

export default TestingScreen;
