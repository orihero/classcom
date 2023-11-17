/* eslint-disable react/react-in-jsx-scope */
import {StyleSheet, View} from 'react-native';
import UiText from '../../../../components/text';
import {COLORS} from '../../../../constants/COLORS';
import {FC} from 'react';
import {Content} from '../../../../api/types';

const MessageCard: FC<Content> = ({content, createdBy}) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <UiText
          style={styles.text}
          title={content}
          color="WHITE"
          type="bookRegular16"
        />
      </View>
      <UiText title={createdBy} />
    </View>
  );
};

export default MessageCard;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    width: '100%',
    marginVertical: 10,
  },
  card: {
    maxWidth: 250,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: COLORS.BLUISH_WHITE2,
    alignItems: 'baseline',
    borderBottomLeftRadius: 25,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  text: {
    textAlign: 'center',
  },
});
