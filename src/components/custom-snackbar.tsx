import Snackbar from 'react-native-snackbar';
import {COLORS} from '../constants/COLORS';

export class CustomSnackbar {
  static danger(message: string) {
    Snackbar.show({
      text: `Ошибка сервера:\n${message}`,
      duration: Snackbar.LENGTH_LONG,
      numberOfLines: 2,
      textColor: COLORS.ORANGE,
      backgroundColor: COLORS.GREY,
      action: {
        text: 'X',
        onPress: Snackbar.dismiss,
        textColor: COLORS.ORANGE,
      },
    });
  }
  static success(message: string) {
    Snackbar.show({
      text: message,
      duration: Snackbar.LENGTH_LONG,
      numberOfLines: 2,
      textColor: COLORS.WHITE,
      backgroundColor: COLORS.WHITE,
      action: {
        text: 'X',
        onPress: Snackbar.dismiss,
        textColor: COLORS.WHITE,
      },
    });
  }
}
