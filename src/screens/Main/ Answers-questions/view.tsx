import React from 'react';
import DefaultWrapper from '../../../wrappers/default-wrapper/DefaultWrapper';
import AnswerQuestion from './components/Answer-question';

const AnswerQuestionScreen = () => {
  return (
    <DefaultWrapper hasUser title="Ответы на вопросы">
      <AnswerQuestion />
    </DefaultWrapper>
  );
};

export default AnswerQuestionScreen;
