/* eslint-disable react/react-in-jsx-scope */
import {ScrollView, View} from 'react-native';
import PlaneButton from '../../../../components/plane-button';

const TestingTabsScreen = () => {
  return (
    <View>
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
    </View>
  );
};

export default TestingTabsScreen;
