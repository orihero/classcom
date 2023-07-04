import React from 'react';
import DefaultWrapper from '../../../wrappers/default-wrapper/DefaultWrapper';
import AnswerQuestion from './components/Answer-question';
import {AnswersQuestionsHooks} from './hooks';
import {ScrollView} from 'react-native-gesture-handler';
const AnswerQuestionScreen = () => {
  const {allQuestion} = AnswersQuestionsHooks();

  return (
    <DefaultWrapper hasUser title="Ответы на вопросы">
      <ScrollView>
        {allQuestion?.map(item => {
          return (
            <AnswerQuestion
              question={item.question}
              id={item.id}
              answer={item.answer}
              disabled={item.disabled}
            />
          );
        })}
      </ScrollView>
    </DefaultWrapper>
  );
};

export default AnswerQuestionScreen;
