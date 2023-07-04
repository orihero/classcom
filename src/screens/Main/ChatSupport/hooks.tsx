import {useIsFocused} from '@react-navigation/native';
import {useCallback, useEffect, useState} from 'react';
import {REQUESTS} from '../../../api/requests';
import {Content} from '../../../api/types';

export const SupportChatHook = () => {
  const [allMyMessage, setAllMyMessages] = useState<Content[]>([]);
  const [sendMessage, setSendMessage] = useState<string>('');
  const isFocused = useIsFocused();

  const getMyAllMessages = useCallback(async () => {
    try {
      const res = await REQUESTS.support.getTechServiceChatItems();
      const firstUser = res.data[0];
      setAllMyMessages(() => firstUser.contents);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleChangeText = (text: string) => {
    setSendMessage(text);
  };

  const onSendNewMessage = useCallback(async () => {
    try {
      await REQUESTS.support.postTechServiceChat({
        content: sendMessage,
      });
      setSendMessage('');
    } catch (error) {
      console.log(error);
    }
  }, [sendMessage]);

  useEffect(() => {
    isFocused && getMyAllMessages();
  }, [getMyAllMessages, isFocused]);

  const reverced = allMyMessage.reverse();

  return {
    allMyMessage,
    reverced,
    onSendNewMessage,
    handleChangeText,
    sendMessage,
  };
};
