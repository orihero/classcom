import {createContext} from 'react';
import {ThemeType} from '../types';

export const ThemeContext = createContext({
  theme: ThemeType.DARK,
  updateTheme: (_theme: ThemeType) => {},
});
