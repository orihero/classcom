/* eslint-disable react/react-in-jsx-scope */
import {View} from 'react-native';
import UiText from '../../../components/text';
import DefaultWrapper from '../../../wrappers/default-wrapper/DefaultWrapper';
import {SolutrionStyles} from './styles';
import TestSolutionHook from './hooks';
const TestSolutionView = () => {
  const {currentTest} = TestSolutionHook();
  console.log('========" ============================');
  console.log(currentTest, 'test id');
  console.log('====================================');
  return (
    <DefaultWrapper title="Тестирование" hasUser>
      <View style={SolutrionStyles.contnainer}>
        <UiText title="Test solution" color="GREY_BLACK" />
      </View>
    </DefaultWrapper>
  );
};

export default TestSolutionView;
