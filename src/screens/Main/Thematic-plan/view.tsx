import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import DefaultWrapper from '../../../wrappers/default-wrapper/DefaultWrapper';
import Thematic from './components/Thematic-Plane';

const ThematicPlanScreen = () => {
  return (
    <DefaultWrapper hasUser title="Тематический план">
      <View style={{}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{marginBottom: 30,}}>
            <Thematic />
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
