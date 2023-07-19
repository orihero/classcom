/* eslint-disable react/react-in-jsx-scope */
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import UiText from '../../../../components/text';
import {ShareIcon} from '../../../../assets/icons';
import {COLORS} from '../../../../constants/colors';
import AnswerOptions from './AnswerOptions';

const QuestionComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardHeader}>
        <UiText title="Вопрос" color="GREY_BLACK" type="Bold16" />
        <TouchableOpacity>
          <UiText title="Удалить" color="BLUE" type="bookRegular16" />
        </TouchableOpacity>
      </View>
      <View style={styles.questionCard}>
        <TextInput
          multiline={true}
          style={styles.postContent}
          placeholder="Введите вопрос"
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

      <AnswerOptions />
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
  },
  questionCard: {},
  postContent: {
    backgroundColor: '#F5F5F5',
    marginVertical: 10,
    borderRadius: 10,
    padding: 12,
    marginTop: 10,
    height: 114,
  },
  shareCard: {
    width: 113,
    height: 103,
    backgroundColor: '#F5F5F5',
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
