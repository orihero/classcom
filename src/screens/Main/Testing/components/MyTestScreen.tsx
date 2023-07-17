/* eslint-disable react/react-in-jsx-scope */
import {StyleSheet, View} from 'react-native';
import PlaneButton from '../../../../components/plane-button';
import Button from '../../../../components/button';
import {TestingHooks} from '../hooks';
import {FlatList} from 'react-native-gesture-handler';
import {useCallback} from 'react';
import {ScrollViewPadding} from '../../../../constants/constants';

const MyTestScreen = () => {
  const {onCreateTestPress, allMyTests, getApiMyTestDelete} = TestingHooks();

  console.log(JSON.stringify(allMyTests, null, 2), 'allMyTests');

  const clicked = useCallback(
    async (id: number) => {
      await getApiMyTestDelete(id);
    },
    [getApiMyTestDelete],
  );

  return (
    <View style={{flex: 1}}>
      <FlatList
        keyExtractor={index => index.toString()}
        contentContainerStyle={ScrollViewPadding}
        data={allMyTests}
        renderItem={({item}) => (
          <View style={styles.childContainer}>
            <PlaneButton
              testingTitle={item.testName}
              deleteTitle="Удалить"
              handledeleted={() => clicked(item.id)}
              lessonTitle={item.subjectName}
            />
          </View>
        )}
      />
      <View style={styles.btn}>
        <Button text="Создать тестирование" onPress={onCreateTestPress} />
      </View>
    </View>
  );
};

export default MyTestScreen;

const styles = StyleSheet.create({
  childContainer: {},
  btn: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
  },
});
