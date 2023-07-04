/* eslint-disable react/react-in-jsx-scope */
import {StyleSheet, View} from 'react-native';
import UiText from '../../../../components/text';
import {COLORS} from '../../../../constants/colors';

const OtherMessageCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <UiText
          style={styles.text}
          title="Message jdslfgj lsdglkjsdlk gnsdngj nlj sdjkfjsdlkfjlk dsjfnjksdnkfj h"
          color="WHITE"
          type="bookRegular16"
        />
      </View>
    </View>
  );
};

export default OtherMessageCard;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    width: '100%',
    marginVertical: 10,
  },
  card: {
    maxWidth: 250,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: COLORS.ORANGE,
    alignItems: 'baseline',
    borderBottomRightRadius: 25,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  text: {
    textAlign: 'center',
  },
});
