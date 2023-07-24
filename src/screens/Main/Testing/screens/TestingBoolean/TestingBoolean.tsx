/* eslint-disable react/react-in-jsx-scope */
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import UiText from '../../../../../components/text';
import DefaultWrapper from '../../../../../wrappers/default-wrapper/DefaultWrapper';
import {ScrollView} from 'react-native-gesture-handler';
import {COLORS} from '../../../../../constants/colors';
import {PaddingHorizantal} from '../../../../../constants/sizes';
import {ScrollViewPadding} from '../../../../../constants/constants';
import Button from '../../../../../components/button';
import BooleanQuestion from './components/BooleanQuestion';
import {useTestingBooleanChoiceHook} from './hook';
import {useCallback} from 'react';
import {map} from 'lodash';
import {Question} from '../../../../../api/types';
// import {useCallback} from 'react';

const TestingBooleanChoice = () => {
  const {
    newTest,
    addNewQuestion,
    onQustionChange,
    onAnswerChange,
    onAnsverCorrectChange,
    onCreateNewTestBtn,
  } = useTestingBooleanChoiceHook();

  const renderQuestion = useCallback(
    (question: Question, key: number) => {
      return (
        <BooleanQuestion
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
        contentContainerStyle={ScrollViewPadding}
        style={styles.container}>
        {renderQuestionList()}
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

export default TestingBooleanChoice;

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
