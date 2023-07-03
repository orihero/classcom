import {useEffect, useState} from 'react';
import {REQUESTS} from '../../../api/requests';
import {Content, ReferenceChatItems} from '../../../api/types';

export const SupportChatHook = () => {
  const [itemChats, setItemChats] = useState<ReferenceChatItems>();
  const [itemMessages, setItemmessages] = useState<Content>();
  const [chatContent, setChatContent] = useState<string>();

  useEffect(() => {
    const getMyAllMessages = async () => {
      try {
        const res = await REQUESTS.support.getTechServiceChatItems();
        setItemChats(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getMyAllMessages();
  }, []);

  useEffect(() => {
    itemChats?.contents?.map(e => {
      setItemmessages(e);
    });
  }, [itemChats]);

  const onSendNewMessage = async () => {
    try {
      const request = await REQUESTS.support.postTechServiceChat({
        content: 'hello',
      });
      console.log(request, ' request');
    } catch (error) {
      console.log(error);
    }
  };

  return {
    itemChats,
    itemMessages,
    onSendNewMessage,
    setChatContent,
    chatContent,
  };
};
