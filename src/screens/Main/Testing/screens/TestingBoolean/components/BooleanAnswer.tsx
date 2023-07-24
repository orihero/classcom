/* eslint-disable react/react-in-jsx-scope */
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import UiText from '../../../../../../components/text';
import {COLORS} from '../../../../../../constants/colors';
import {Answer} from '../../../../../../api/types';
import {FC} from 'react';
import {has} from 'lodash';

interface AnswerOptionsProps {
  answer: Answer;
  currentAnswer: Answer;
  onPressAnswer(answer: Answer): void;
}

const BooleanAnswer: FC<AnswerOptionsProps> = ({
  answer,
  currentAnswer,
  onPressAnswer,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.colItem}>
        <TouchableOpacity
          style={
            has(currentAnswer, 'correct') &&
            currentAnswer.correct &&
            currentAnswer.id === answer.id
              ? styles.correctAnswer
              : styles.checkbox
          }
          onPress={() => onPressAnswer(answer)}
        />
        <UiText
          title={answer.answer}
          color="GREY_BLACK"
          type="mediumRegular16"
        />
      </View>
    </View>
  );
};
export default BooleanAnswer;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 12,
  },
  colItem: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 40,
    padding: 10,
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
});
