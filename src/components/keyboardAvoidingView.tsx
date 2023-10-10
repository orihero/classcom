/* eslint-disable react/react-in-jsx-scope */
import {Keyboard, StyleSheet, TouchableNativeFeedback} from 'react-native';

const KeyboardAvoidingView = ({children}: any) => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <TouchableNativeFeedback onPress={Keyboard.dismiss}>
        {children}
      </TouchableNativeFeedback>
    </KeyboardAvoidingView>
  );
};
export default KeyboardAvoidingView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
