import {View, Text} from 'react-native';
import React from 'react';
import MainWrapper from '../../../wrappers/main-wrapper/MainWrapper';
import Schedule from '../../../components/ schedule';

const HomeScreen = () => {
  return (
    <MainWrapper>
      <Schedule number={'1.'} />
      <Schedule number={'2.'} />
    </MainWrapper>
  );
};

export default HomeScreen;
