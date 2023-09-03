import React from 'react';
import DefaultWrapper from '../../../wrappers/default-wrapper/DefaultWrapper';
import TestTopTabs, {TopTabsItem} from '../../../components/test-tabs';
import MyTestScreen from './components/MyTestScreen';
import TestingTabsScreen from './screens/TestingScreen/TestingScreen';
import {DrawerActions, useNavigation} from '@react-navigation/native';

const content: TopTabsItem[] = [
  {
    id: 0,
    name: 'Тестирования',
    component: TestingTabsScreen,
  },
  {
    id: 1,
    name: 'Мои тесты',
    component: MyTestScreen,
  },
];

const TestingScreen = () => {
  const drawer = useNavigation();

  const onArrowLeftBtnPress = () => {
    drawer.dispatch(DrawerActions.toggleDrawer);
  };
  return (
    <DefaultWrapper
      hasUser
      title="Тестирование"
      onArrowLeftBtnPress={onArrowLeftBtnPress}>
      <TestTopTabs content={content} />
    </DefaultWrapper>
  );
};

export default TestingScreen;
