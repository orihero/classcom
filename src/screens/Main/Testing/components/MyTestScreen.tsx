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
import {PaddingHorizantal} from '../../../../constants/sizes';

const MyTestScreen = () => {
  const {onCreateTestPress, allMyTests, getApiMyTestDelete, setAllMyTests} =
    TestingHooks();

  const clicked = useCallback(
    async (id: number) => {
      await getApiMyTestDelete(id);
      setAllMyTests(oldTests => oldTests.filter(test => test.id !== id));
    },
    [getApiMyTestDelete, setAllMyTests],
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
        style={{marginHorizontal: PaddingHorizantal}}
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
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.bottomContainer}>
        <View style={styles.btn}>
          <Button
            text="Создать тестирование"
            onPress={onCreateTestPress}
            textColor={activeColor.activeTextColor}
            style={[
              {
                backgroundColor: activeColor.btnBackColor2,
                marginHorizontal: PaddingHorizantal,
              },
            ]}
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
