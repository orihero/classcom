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
  const {
    onSupportMessagePress,
    onAnswerQuestionPress,
    onUsersMaualPress,
    onSupportSuggestPress,
    onChatSupportPress,
    callPhoneNumber,
  } = SupportHooks();
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
        onPress={onUsersMaualPress}
        title="Инструкция пользователя"
        icon={<NoteIconProgram />}
      />
      <InfoButton
        onPress={onSupportSuggestPress}
        title="Ваши предложения"
        icon={<BorderPencelIcon />}
      />
      <InfoButton
        onPress={onChatSupportPress}
        title="Чат службы поддержки"
        icon={<ChatIcon />}
      />
      <InfoButton
        onPress={callPhoneNumber}
        title="Звонок в контакт-центр"
        icon={<PhoneBlueIcon />}
      />
    </DefaultWrapper>
  );
};

export default SupportScreen;
