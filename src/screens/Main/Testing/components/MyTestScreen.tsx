/* eslint-disable react/react-in-jsx-scope */
import {ListRenderItem, StyleSheet, View} from 'react-native';
import PlaneButton from '../../../../components/plane-button';
import Button from '../../../../components/button';
import {TestingHooks} from '../hooks';
import {FlatList} from 'react-native-gesture-handler';
import {useCallback, useContext} from 'react';
import {ScrollViewPadding} from '../../../../constants/constants';
import {ICreateTests} from '../../../../api/types';
import {COLORS} from '../../../../constants/colors';
import {ThemeContext} from '../../../../utils/themeContext';

const MyTestScreen = () => {
  const {onCreateTestPress, allMyTests, getApiMyTestDelete} = TestingHooks();

  const clicked = useCallback(
    async (id: number) => {
      await getApiMyTestDelete(id);
    },
    [getApiMyTestDelete],
  );

  const {theme} = useContext(ThemeContext);
  let activeColor = COLORS[theme];

  const renderItem: ListRenderItem<ICreateTests> = ({item}) => (
    <View style={styles.childContainer}>
      <PlaneButton
        testingTitle={item.testName}
        handledeleted={() => clicked(item.id)}
        lessonTitle={item.subjectName}
        deleteBtn
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={ScrollViewPadding}
        data={allMyTests}
        renderItem={renderItem}
      />
      <View style={styles.bottomContainer}>
        <View style={styles.btn}>
          <Button
            text="Создать тестирование"
            onPress={onCreateTestPress}
            style={[{backgroundColor: activeColor.btnBackColor2}]}
          />
        </View>
      </View>
    </View>
  );
};

export default MyTestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },

  childContainer: {},
  btn: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  },
  bottomContainer: {
    height: 80,
    width: '100%',
  },
});
