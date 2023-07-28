import React from 'react';
import {ThemeType} from '../types';

export class ThemeHelper {
  private static currentTheme: React.MutableRefObject<{
    theme: ThemeType;
    updateTheme: (newTheme: ThemeType) => void;
  }>;

  static _theme: ThemeType = ThemeType.LIGHT;

  static set = (
    theme: React.MutableRefObject<{
      theme: ThemeType;
      updateTheme: (newTheme: ThemeType) => void;
    }>,
  ) => {
    this.currentTheme = theme;
  };

  static get theme() {
    return this.currentTheme?.current?.theme;
  }

  static update = (newTheme: ThemeType) => {
    this.currentTheme?.current?.updateTheme(newTheme);
  };
}
