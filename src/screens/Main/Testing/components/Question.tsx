/* eslint-disable react/react-in-jsx-scope */
import {StyleSheet, TextInput, View} from 'react-native';
import UiText from '../../../../components/text';
import {ShareIcon} from '../../../../assets/icons';
import {COLORS} from '../../../../constants/COLORS';
import AnswerOptions from './AnswerOptions';
import {Answer, ICreateNewTest, Question} from '../../../../api/types';
import {FC, useCallback, useState} from 'react';
import {map} from 'lodash';
import ScreenTitle from '../../../../components/screenTitle';

interface QuestionComponentProps {
  question: Question;
  inputOnChange: (id: number, value: string) => void;
  newTest: Omit<ICreateNewTest, 'id'>;
  answerOnChange: (qustionId: number, answerId: number, value: string) => void;
  onAnsverCorrectChange: (
    qustionId: number,
    answerId: number,
    value: boolean,
  ) => void;
}
const QuestionComponent: FC<QuestionComponentProps> = ({
  question,
  inputOnChange,
  answerOnChange,
  onAnsverCorrectChange,
}) => {
  const [currentAnswer, setCurrentAnswer] = useState<Answer>({} as Answer);

  const onPressAnswer = useCallback(
    (answer: Answer) => {
      setCurrentAnswer({...answer, correct: !answer.correct});
      answerOnChange(answer.questionId, answer.id, answer.answer);
      onAnsverCorrectChange(answer.questionId, answer.id, !answer.correct);
    },
    [answerOnChange, onAnsverCorrectChange],
  );

  const renderAnswer = useCallback(
    (answer: Answer, key: number) => {
      return (
        <AnswerOptions
          key={key}
          answer={answer}
          currentAnswer={currentAnswer}
          onPressAnswer={onPressAnswer}
          answerOnChange={answerOnChange}
        />
      );
    },
    [currentAnswer, onPressAnswer, answerOnChange],
  );

  const renderAnswerList = useCallback(() => {
    return map(question.answers, renderAnswer);
  }, [question.answers, renderAnswer]);

  const questionCard = () => (
    <View style={styles.questionCard}>
      <TextInput
        placeholder="Введите вопрос"
        multiline={true}
        value={question.question}
        onChange={value => inputOnChange(question.id, value.nativeEvent.text)}
        style={styles.postContent}
      />

      <View style={styles.shareCard}>
        <ShareIcon
          style={styles.shareIcon}
          color={COLORS.BLUE}
          fill={'#797979'}
          width={30}
          height={40}
        />
        <UiText
          title="Загрузить"
          type="bookRegular14"
          color="NON_ACTIVE_TEXT"
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScreenTitle
        title="Вопрос"
        leftBtnTitle="Удалить"
        leftTitleColor="BLUE"
      />
      {questionCard()}
      <ScreenTitle title="Варианты ответов" leftTitleColor="BLUE" />
      {renderAnswerList()}
    </View>
  );
};

export default QuestionComponent;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },

  questionCard: {},
  postContent: {
    backgroundColor: COLORS.WHITE_TWO,
    marginVertical: 10,
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 5,
    marginTop: 10,
    height: 114,
    alignItems: 'flex-start',
  },
  shareCard: {
    width: 113,
    height: 103,
    backgroundColor: COLORS.WHITE_TWO,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.6,
    gap: 10,
  },
  shareIcon: {
    width: 40,
    height: 40,
  },
});
