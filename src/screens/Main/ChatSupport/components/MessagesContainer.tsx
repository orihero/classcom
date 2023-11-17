/* eslint-disable react/react-in-jsx-scope */
import {ScrollView, StyleSheet, View} from 'react-native';
import {COLORS} from '../../../../constants/COLORS';
import MessageCard from './MessageCard';
import {SupportChatHook} from '../hooks';
import {ScrollViewPadding} from '../../../../constants/constants';

const MessagesContainer = () => {
  const {allMyMessage} = SupportChatHook();
  const renderMyMessages = () => {
    return allMyMessage?.map(item => {
      if (item.content) {
        return (
          <View key={item.id}>
            <MessageCard content={item.content} createdBy={item.createdBy} />
          </View>
        );
      }
    });
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={ScrollViewPadding}
      style={styles.container}>
      {renderMyMessages?.()}
    </ScrollView>
  );
};

export default MessagesContainer;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.WHITE,
    flexDirection: 'column',
  },
});
