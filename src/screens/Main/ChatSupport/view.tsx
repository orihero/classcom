/* eslint-disable react/react-in-jsx-scope */
import {View} from 'react-native';
import DefaultWrapper from '../../../wrappers/default-wrapper/DefaultWrapper';
import {styles} from './styles';
import ChatFooter from './components/chatfooter';
import {SupportChatHook} from './hooks';

const ChatSupport = () => {
  const {itemChats, itemMessages} = SupportChatHook();
  console.log(itemChats, itemMessages?.content, 'chats');
  return (
    <DefaultWrapper hasUser title="Чат со службой поддержки">
      <View style={styles.container}>
        <ChatFooter />
      </View>
    </DefaultWrapper>
  );
};

export default ChatSupport;
