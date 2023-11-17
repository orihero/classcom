/* eslint-disable react/react-in-jsx-scope */
import {FC} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Answer} from '../../../../../../api/types';
import {COLORS} from '../../../../../../constants/COLORS';
interface AnswerOptionsProps {
  answer: Answer;
  currentAnswer: Answer;
  onPressAnswer(answer: Answer): void;
  answerOnChange(qustionId: number, answerId: number, value: string): void;
}
const OmissionsAnswerOptions: FC<AnswerOptionsProps> = ({
  answer,
  answerOnChange,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContent}>
        <View style={styles.answerCard}>
          <TextInput
            style={styles.inputStyle}
            placeholder="Answer"
            value={answer.answer}
            onChangeText={value =>
              answerOnChange(answer.questionId, answer.id, value)
            }
          />
        </View>
      </View>
    </View>
  );
};

export default OmissionsAnswerOptions;
const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  cardContent: {},

  answerCard: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: COLORS.LIGHT_GREY,
  },
  correctAnswer: {
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: COLORS.LIGHT_BLUE,
  },
  inputStyle: {
    width: '100%',
    backgroundColor: COLORS.LIGHT_GREY,
    height: 45,
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    borderRadius: 6,
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
});
