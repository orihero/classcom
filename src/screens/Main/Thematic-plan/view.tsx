import React from 'react';
import {ScrollView, View} from 'react-native';
import DefaultWrapper from '../../../wrappers/default-wrapper/DefaultWrapper';
import Thematic from './components/Thematic-Plane';
import {useThematicPlanHooks} from './hooks';
import {ScrollViewPadding} from '../../../constants/constants';

const ThematicPlanScreen = () => {
  const {onThematicInnerPress, thematicPlans} = useThematicPlanHooks();
  return (
    <DefaultWrapper hasUser title="Тематический план">
      <View style={{}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={ScrollViewPadding}>
          <View style={{marginBottom: 30}}>
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
