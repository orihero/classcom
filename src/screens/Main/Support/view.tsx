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
import { SupportHooks } from './hooks';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { COLORS } from '../../../constants/COLORS';

const SupportScreen = () => {
  const {
    onSupportMessagePress,
    onAnswerQuestionPress,
    onUsersMaualPress,
    onSupportSuggestPress,
    onChatSupportPress,
    callPhoneNumber,
  } = SupportHooks();
  const drawer = useNavigation();

  const onArrowLeftBtnPress = () => {
    drawer.dispatch(DrawerActions.toggleDrawer);
  };

  return (
    <DefaultWrapper
      hasUser
      title="Служба поддержки"
      onArrowLeftBtnPress={onArrowLeftBtnPress}>
      <InfoButton
        onPress={onSupportMessagePress}
        title="Сообщения для службы поддержки"
        icon={<MessageIcon stroke={COLORS.WHITE} />}
      />
      <InfoButton
        onPress={onAnswerQuestionPress}
        title="Ответы на вопросы"
        icon={<ExclamationIcon fill={COLORS.WHITE} />}
      />
      <InfoButton
        onPress={onUsersMaualPress}
        title="Инструкция пользователя"
        icon={<NoteIconProgram fill={COLORS.WHITE}  stroke={COLORS.WHITE} />}
      />
      <InfoButton
        onPress={onSupportSuggestPress}
        title="Ваши предложения"
        icon={<BorderPencelIcon stroke={COLORS.WHITE} />}
      />
      <InfoButton
        onPress={onChatSupportPress}
        title="Чат службы поддержки"
        icon={<ChatIcon fill={COLORS.WHITE} />}
      />
      <InfoButton
        onPress={callPhoneNumber}
        title="Звонок в контакт-центр"
        icon={<PhoneBlueIcon stroke={COLORS.WHITE} />}
      />
    </DefaultWrapper>
  );
};

export default SupportScreen;
