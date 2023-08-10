/* eslint-disable react/react-in-jsx-scope */
import {useRoute} from '@react-navigation/native';
import {WebView} from 'react-native-webview';

// interface WebViewProps {
//   uri: string;
// }

const WebViewScreen = () => {
  const route = useRoute();
  //@ts-ignore
  console.log('route', route.params.uri);
  //@ts-ignore
  return <WebView source={{uri: route.params.uri}} style={{marginTop: 20}} />;
};

export default WebViewScreen;
