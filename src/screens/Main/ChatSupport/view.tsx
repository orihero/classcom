/* eslint-disable react/react-in-jsx-scope */
import {View} from 'react-native';
import DefaultWrapper from '../../../wrappers/default-wrapper/DefaultWrapper';
import {styles} from './styles';
import ChatFooter from './components/chatfooter';
import MessagesContainer from './components/MessagesContainer';

const ChatSupport = () => {
  return (
    <DefaultWrapper hasUser title="Чат со службой поддержки">
      <View style={styles.container}>
        <MessagesContainer />
        <ChatFooter />
      </View>
    </DefaultWrapper>
  );
};

export default ChatSupport;
