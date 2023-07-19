/* eslint-disable react/react-in-jsx-scope */
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import DefaultWrapper from '../../../../../wrappers/default-wrapper/DefaultWrapper';
import QuestionComponent from '../../components/Question';
import {PaddingHorizantal} from '../../../../../constants/sizes';
import UiText from '../../../../../components/text';
import {COLORS} from '../../../../../constants/colors';
import {ScrollViewPadding} from '../../../../../constants/constants';
import {useTestingSingleChoiceHook} from './hook';

const TestingSingleChoice = () => {
  const {questions} = useTestingSingleChoiceHook();
  const renderView = () => {
    return questions.map((item, index) => {
      return (
        <View key={index}>
          <QuestionComponent />
        </View>
      );
    });
  };

  return (
    <DefaultWrapper title="Тестирования" hasUser>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={ScrollViewPadding}>
        <View style={styles.container}>{renderView()}</View>

        <View style={styles.addNewItemCard}>
          <TouchableOpacity style={styles.addNewItem} onPress={addQuestion}>
            <UiText title="Добавить тест" color="BLUE" type="bookRegular16" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </DefaultWrapper>
  );
};

export default TestingSingleChoice;

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
});
