/* eslint-disable react/react-in-jsx-scope */
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import DefaultWrapper from '../../../../../wrappers/default-wrapper/DefaultWrapper';
import QuestionComponent from '../../components/Question';
import {PaddingHorizantal} from '../../../../../constants/sizes';
import UiText from '../../../../../components/text';
import {COLORS} from '../../../../../constants/COLORS';
import {ScrollViewPadding} from '../../../../../constants/constants';
import {useTestingMultipleChoiceHook} from './hook';
import {useCallback} from 'react';
import {map} from 'lodash';
import {Question} from '../../../../../api/types';
import Button from '../../../../../components/button';

const TestingMultipleChoice = () => {
  const {
    newTest,
    addNewQuestion,
    onQustionChange,
    onAnswerChange,
    onAnsverCorrectChange,
    onCreateNewTestBtn,
  } = useTestingMultipleChoiceHook();

  const renderQuestion = useCallback(
    (question: Question, key: number) => {
      return (
        <QuestionComponent
          key={key}
          question={question}
          inputOnChange={onQustionChange}
          newTest={newTest}
          answerOnChange={onAnswerChange}
          onAnsverCorrectChange={onAnsverCorrectChange}
        />
      );
    },
    [onQustionChange, newTest, onAnswerChange, onAnsverCorrectChange],
  );

  const renderQuestionList = useCallback(() => {
    return map(newTest.questions, renderQuestion);
  }, [newTest.questions, renderQuestion]);

  return (
    <DefaultWrapper title="Тестирования" hasUser>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={ScrollViewPadding}>
        <View style={styles.container}>{renderQuestionList()}</View>

        <View style={styles.addNewItemCard}>
          <TouchableOpacity style={styles.addNewItem} onPress={addNewQuestion}>
            <UiText title="Добавить тест" color="BLUE" type="bookRegular16" />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.bottomContainer}>
        <View style={styles.btn}>
          <Button text="Создать тестирование" onPress={onCreateNewTestBtn} />
        </View>
      </View>
    </DefaultWrapper>
  );
};

export default TestingMultipleChoice;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: PaddingHorizantal,
  },
  addNewItemCard: {
    width: '100%',
    alignItems: 'center',
  },
  addNewItem: {
    height: 40,
    width: 180,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.BLUE,
  },
  btn: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
  },
  bottomContainer: {
    height: 100,
    width: '100%',
    backgroundColor: COLORS.WHITE,
  },
});
