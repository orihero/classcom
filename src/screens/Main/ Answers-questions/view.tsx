import React from 'react';
import DefaultWrapper from '../../../wrappers/default-wrapper/DefaultWrapper';
import AnswerQuestion from './components/Answer-question';
import {AnswersQuestionsHooks} from './hooks';
import {ScrollView} from 'react-native-gesture-handler';
import {View} from 'react-native';

const AnswerQuestionScreen = () => {
  const {allQuestion, loading} = AnswersQuestionsHooks();

  return (
    <DefaultWrapper hasUser title="Ответы на вопросы" isLoad={loading}>
      <ScrollView>
        {allQuestion?.map(item => {
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

export default AnswerQuestionScreen;
