import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import DefaultWrapper from '../../../wrappers/default-wrapper/DefaultWrapper';
import Thematic from './components/Thematic-Plane';
import {useThematicPlanHooks} from './hooks';

const ThematicPlanScreen = () => {
  const {onThematicInnerPress, thematicPlans} = useThematicPlanHooks();
  return (
    <DefaultWrapper hasUser title="Тематический план">
      <View style={{}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{marginBottom: 30}}>
            <Thematic onPress={onThematicInnerPress} />
            <Thematic />
            <Thematic />
            <Thematic />
            <Thematic />
            <Thematic />
          </View>
        </ScrollView>
      </View>
    </DefaultWrapper>
  );
};

export default ThematicPlanScreen;
