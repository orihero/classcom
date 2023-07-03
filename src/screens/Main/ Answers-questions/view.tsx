import React from 'react';
import DefaultWrapper from '../../../wrappers/default-wrapper/DefaultWrapper';
import AnswerQuestion from './components/Answer-question';

const AnswerQuestionScreen = () => {
  return (
    <DefaultWrapper hasUser title="Ответы на вопросы">
      <AnswerQuestion title="Как пользоваться системой?" number="1" />
      <AnswerQuestion title="Как пользоваться системой?" number="2" />
      <AnswerQuestion title="Как пользоваться системой?" number="3" />
      <AnswerQuestion title="Как пользоваться системой?" number="4" />
    </DefaultWrapper>
  );
};

export default AnswerQuestionScreen;
