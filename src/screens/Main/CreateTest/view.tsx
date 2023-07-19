import React from 'react';
import {ScrollView, View} from 'react-native';
import Input from '../../../components/input';
import DefaultWrapper from '../../../wrappers/default-wrapper/DefaultWrapper';
import {styles} from './style';
import UiText from '../../../components/text';
import {useCreateNewTestHook} from './hook';
import {ScrollViewPadding} from '../../../constants/constants';
import Select from '../../../components/select';
import ModalButton from './components/Modal-btn';
import ModalTest from './components/Modal';

const CreateTestScreen = () => {
  const {
    courses,
    createTest,
    onInputChange,
    navigateToBoolean,
    navigateToCorrespondence,
    navigateToMultipleChoice,
    navigateToSingleChoice,
    navigateToOmissions,
    navigateToSubsequence,
    isModalVisible,
    toggleModal,
  } = useCreateNewTestHook();

  const renderModalView = () => {
    return (
      <View style={styles.btn}>
        <ModalTest
          toggleModal={toggleModal}
          isModalVisible={isModalVisible}
          container={
            <>
              <ModalButton
                text="Одиночный выбор"
                onPress={navigateToSingleChoice}
              />
              <ModalButton
                text="Множественный выбор"
                onPress={navigateToMultipleChoice}
              />
              <ModalButton
                text="Последовательность"
                onPress={navigateToCorrespondence}
              />
              <ModalButton
                text="Соответствие"
                onPress={navigateToSubsequence}
              />
              <ModalButton text="Истина/Ложь" onPress={navigateToBoolean} />
              <ModalButton text="Пропуски" onPress={navigateToOmissions} />
            </>
          }
        />
      </View>
    );
  };

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
              onChange={() => onInputChange('testName')}
            />
          </View>
          <View style={styles.predmetCard}>
            <UiText title="Предмет" type="mediumRegular20" color="GREY_BLACK" />
            <Select
              items={courses}
              onChange={() => onInputChange('subjectId')}
              value={createTest.subjectId}
              name="subjectId"
              placeholder="Выберите предмет"
            />
          </View>
        </View>
      </ScrollView>
      {renderModalView()}
    </DefaultWrapper>
  );
};

export default CreateTestScreen;
