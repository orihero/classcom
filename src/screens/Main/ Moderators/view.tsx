import {View, ScrollView} from 'react-native';
import React from 'react';
import DefaultWrapper from '../../../wrappers/default-wrapper/DefaultWrapper';
import ModeratorBox from './components/moderator_box';

const ModeratorsScreen = () => {
  return (
    <DefaultWrapper hasIcon hasUser title="Модераторы">
      <ScrollView>
        <View style={{marginTop: 10, marginBottom: 50}}>
          <ModeratorBox />
        </View>
      </ScrollView>
    </DefaultWrapper>
  );
};

export default ModeratorsScreen;
