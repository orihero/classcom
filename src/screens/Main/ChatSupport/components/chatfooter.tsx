/* eslint-disable react/react-in-jsx-scope */
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../../../../constants/colors';
import {ArrowRightIcon, ShareIcon} from '../../../../assets/icons';
import {SupportChatHook} from '../hooks';
interface Props {
  sendBtn?: () => void;
  shareBtn?: () => void;
  text?: string;
  setInputValue?: any;
}

const ChatFooter = ({shareBtn}: Props) => {
  const {onSendNewMessage, handleChangeText, sendMessage} = SupportChatHook();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={shareBtn}>
        <ShareIcon />
      </TouchableOpacity>
      <TextInput
        style={styles.messageInput}
        placeholder="Напишите что-нибудь"
        onChangeText={handleChangeText}
        value={sendMessage}
      />
      <TouchableOpacity style={styles.sendBtn} onPress={onSendNewMessage}>
        <ArrowRightIcon />
      </TouchableOpacity>
    </View>
  );
};
export default ChatFooter;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 25,
    left: 0,
    right: 0,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    gap: 20,
    backgroundColor: COLORS.WHITE,
  },
  messageInput: {
    width: '70%',
    height: '100%',
  },
  sendBtn: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: COLORS.BLUE,
  },
});
