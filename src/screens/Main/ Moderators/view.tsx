import {View, ScrollView} from 'react-native';
import React from 'react';
import DefaultWrapper from '../../../wrappers/default-wrapper/DefaultWrapper';
import ModeratorBox from './components/moderator_box';
import {useModeratorsHooks} from './hooks';
import {styles} from './styles';
import {ScrollViewPadding} from '../../../constants/constants';

const ModeratorsScreen = () => {
  const {moderators, loading} = useModeratorsHooks();
  return (
    <DefaultWrapper hasIcon hasUser title="Модераторы" isLoad={loading}>
      <ScrollView
        contentContainerStyle={ScrollViewPadding}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {moderators.map(e => {
            return <ModeratorBox key={e.id} item={e} />;
          })}
        </View>
      </ScrollView>
    </DefaultWrapper>
  );
};

export default ModeratorsScreen;
