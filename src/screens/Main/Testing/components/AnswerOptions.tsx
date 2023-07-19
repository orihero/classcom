/* eslint-disable react/react-in-jsx-scope */
import {StyleSheet, TextInput, View} from 'react-native';
import UiText from '../../../../components/text';
import {COLORS} from '../../../../constants/colors';

const AnswerOptions = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardHeader}>
        <UiText title="Варианты ответов" color="GREY_BLACK" type="Bold16" />
      </View>
      <View style={styles.cardContent}>
        <View style={styles.answerCard}>
          <View style={styles.checkbox} />
          <UiText title="A." type="mediumRegular16" color="GREY_BLACK" />
          <TextInput style={styles.inputStyle} placeholder="Answer 1" />
        </View>
        <View style={styles.answerCard}>
          <View style={styles.checkbox} />
          <UiText title="B." type="mediumRegular16" color="GREY_BLACK" />

          <TextInput style={styles.inputStyle} placeholder="Answer 1" />
        </View>
        <View style={styles.answerCard}>
          <View style={styles.checkbox} />
          <UiText title="D." type="mediumRegular16" color="GREY_BLACK" />

          <TextInput style={styles.inputStyle} placeholder="Answer 1" />
        </View>
        <View style={styles.answerCard}>
          <View style={styles.checkbox} />
          <UiText title="C." type="mediumRegular16" color="GREY_BLACK" />
          <TextInput style={styles.inputStyle} placeholder="Answer 1" />
        </View>
      </View>
    </View>
  );
};

export default AnswerOptions;
const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
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
    backgroundColor: '#0074e1',
  },
  inputStyle: {
    width: '85%',
    backgroundColor: COLORS.GREY_ONE,
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
