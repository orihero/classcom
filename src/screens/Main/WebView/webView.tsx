/* eslint-disable react/react-in-jsx-scope */
import {useRoute} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';
import {WebView} from 'react-native-webview';
import Button from '../../../components/button';
import {COLORS} from '../../../constants/colors';

// interface WebViewProps {
//   uri: string;
// }

const WebViewScreen = () => {
  const route = useRoute();
  const {uri} = route.params as any;
  return (
    <View>
      <WebView source={{uri: uri}} style={styles.wevViewStyle} />
      <Button
        text="Go Back"
        onPress={() => {
          console.log('Go Back');
        }}
        textColor={COLORS.dark}
      />
    </View>
  );
};

export default WebViewScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
  wevViewStyle: {marginTop: 40},
});
