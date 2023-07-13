/* eslint-disable react/react-in-jsx-scope */
import {ScrollView, View} from 'react-native';
import {styles} from './styles';
import DefaultWrapper from '../../../wrappers/default-wrapper/DefaultWrapper';
import {useDirectoryHook} from './hook';
import AnswerQuestion from '../ Answers-questions/components/Answer-question';
const DirectoryScreen = () => {
  const {allItems} = useDirectoryHook();
  console.log(JSON.stringify(allItems, null, 2));
  return (
    <DefaultWrapper hasIcon hasUser title="Справочник">
      <ScrollView style={styles.container}>
        {allItems?.map(item => {
          return (
            <View key={item.id}>
              <AnswerQuestion
                question={item.question}
                id={item.id}
                answer={item.answer}
                disabled={item.disabled}
              />
            </View>
          );
        })}
      </ScrollView>
    </DefaultWrapper>
  );
};

export default DirectoryScreen;
