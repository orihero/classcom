/* eslint-disable react/react-in-jsx-scope */
import {Keyboard, TouchableNativeFeedback} from 'react-native';

const KeyboardAvoidingView = ({children}: any) => {
  return (
    <KeyboardAvoidingView>
      <TouchableNativeFeedback onPress={Keyboard.dismiss}>
        {children}
      </TouchableNativeFeedback>
    </KeyboardAvoidingView>
  );
};
export default KeyboardAvoidingView;
