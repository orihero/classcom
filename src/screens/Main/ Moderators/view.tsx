import {View, ScrollView} from 'react-native';
import React from 'react';
import DefaultWrapper from '../../../wrappers/default-wrapper/DefaultWrapper';
import ModeratorBox from './components/moderator_box';
import {useModeratorsHooks} from './hooks';

const ModeratorsScreen = () => {
  const {moderators} = useModeratorsHooks();
  console.log('moderatoris', JSON.stringify(moderators, null, 2));
  return (
    <DefaultWrapper hasIcon hasUser title="Модераторы">
      <ScrollView>
        <View style={{marginTop: 10, marginBottom: 50}}>
          {moderators.map(e => {
            return <ModeratorBox key={e.id} item={e} />;
          })}
        </View>
      </ScrollView>
    </DefaultWrapper>
  );
};

export default ModeratorsScreen;
