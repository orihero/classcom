import React from 'react';
import Schedule from '../../../components/ schedule';
import MainWrapper from '../../../wrappers/main-wrapper/MainWrapper';

const HomeScreen = () => {
  return (
    <MainWrapper>
      <Schedule number={'1.'} />
      <Schedule number={'2.'} />
    </MainWrapper>
  );
};

export default HomeScreen;
