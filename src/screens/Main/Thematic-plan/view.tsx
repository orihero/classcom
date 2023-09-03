import React from 'react';
import {ScrollView, View} from 'react-native';
import DefaultWrapper from '../../../wrappers/default-wrapper/DefaultWrapper';
import Thematic from './components/Thematic-Plane';
import {useThematicPlanHooks} from './hooks';
import {ScrollViewPadding} from '../../../constants/constants';
import {styles} from './styles';
import {DrawerActions, useNavigation} from '@react-navigation/native';
const ThematicPlanScreen = () => {
  const {onThematicInnerPress, thematicPlans} = useThematicPlanHooks();
  const drawer = useNavigation();

  const onArrowLeftBtnPress = () => {
    drawer.dispatch(DrawerActions.toggleDrawer);
  };
  return (
    <DefaultWrapper
      hasUser
      title="Тематический план"
      onArrowLeftBtnPress={onArrowLeftBtnPress}>
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={ScrollViewPadding}>
          <View style={styles.viewCard}>
            {thematicPlans.map(e => {
              return (
                <Thematic
                  onPress={() => onThematicInnerPress(e)}
                  content={e}
                  key={e.id}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
    </DefaultWrapper>
  );
};

export default ThematicPlanScreen;
