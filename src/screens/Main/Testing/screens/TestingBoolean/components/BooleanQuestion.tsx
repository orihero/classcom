/* eslint-disable react/react-in-jsx-scope */
import {StyleSheet, TextInput, View} from 'react-native';
import ScreenTitle from '../../../../../../components/screenTitle';
import {COLORS} from '../../../../../../constants/COLORS';
import {ShareIcon} from '../../../../../../assets/icons';
import UiText from '../../../../../../components/text';
import BooleanAnswer from './BooleanAnswer';
import {Answer, ICreateNewTest, Question} from '../../../../../../api/types';
import {FC, useCallback, useState} from 'react';
import {map} from 'lodash';

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

const BooleanQuestion: FC<QuestionComponentProps> = ({
  question,
  inputOnChange,
  onAnsverCorrectChange,
}) => {
  const [currentAnswer, setCurrentAnswer] = useState<Answer>({} as Answer);

  const onPressAnswer = useCallback(
    (answer: Answer) => {
      setCurrentAnswer({...answer, correct: !answer.correct});
      onAnsverCorrectChange(answer.questionId, answer.id, !answer.correct);
    },
    [onAnsverCorrectChange],
  );

  const renderAnswer = useCallback(
    (answer: Answer, key: number) => {
      return (
        <BooleanAnswer
          key={key}
          answer={answer}
          currentAnswer={currentAnswer}
          onPressAnswer={onPressAnswer}
        />
      );
    },
    [currentAnswer, onPressAnswer],
  );

  const renderAnswerList = useCallback(() => {
    return map(question.answers, renderAnswer);
  }, [question.answers, renderAnswer]);

  const questionCard = () => (
    <View style={styles.questionCard}>
      <TextInput
        placeholder="Введите вопрос"
        multiline
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

export default BooleanQuestion;

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
    paddingHorizontal: 15,
    marginTop: 10,
    height: 120,
    flexDirection: 'column',
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
    gap: 8,
  },
  shareIcon: {
    width: 40,
    height: 40,
  },
});
