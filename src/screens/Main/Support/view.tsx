import React from 'react';
import DefaultWrapper from '../../../wrappers/default-wrapper/DefaultWrapper';
import InfoButton from '../../../components/Info-button';
import {
  BorderPencelIcon,
  ChatIcon,
  ExclamationIcon,
  MessageIcon,
  NoteIconProgram,
  PhoneBlueIcon,
} from '../../../assets/icons';
import {SupportHooks} from './hooks';

const SupportScreen = () => {
  const {onSupportMessagePress, onAnswerQuestionPress} = SupportHooks();
  return (
    <DefaultWrapper hasUser title="Служба поддержки">
      <InfoButton
        onPress={onSupportMessagePress}
        title="Сообщения для службы поддержки"
        icon={<MessageIcon />}
      />
      <InfoButton
        onPress={onAnswerQuestionPress}
        title="Ответы на вопросы"
        icon={<ExclamationIcon />}
      />
      <InfoButton
        onPress={() => console.log('Qise')}
        title="Инструкция пользователя"
        icon={<NoteIconProgram />}
      />
      <InfoButton
        onPress={() => console.log('Qise')}
        title="Ваши предложения"
        icon={<BorderPencelIcon />}
      />
      <InfoButton
        onPress={() => console.log('Qise')}
        title="Чат службы поддержки"
        icon={<ChatIcon />}
      />
      <InfoButton
        onPress={() => console.log('Qise')}
        title="Звонок в контакт-центр"
        icon={<PhoneBlueIcon />}
      />
    </DefaultWrapper>
  );
};

export default SupportScreen;
