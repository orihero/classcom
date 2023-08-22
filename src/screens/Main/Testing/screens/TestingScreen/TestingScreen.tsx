/* eslint-disable react/react-in-jsx-scope */
import {FlatList, ListRenderItem, StyleSheet, View} from 'react-native';
import PlaneButton from '../../../../../components/plane-button';
import useTestingHook from './hook';
import {ScrollViewPadding} from '../../../../../constants/constants';
import {AllTesting} from '../../../../../api/types';
import {PaddingHorizantal} from '../../../../../constants/sizes';

const TestingTabsScreen = () => {
  const {allTesting} = useTestingHook();
  console.log(JSON.stringify(allTesting, null, 2));

  const renderItem: ListRenderItem<AllTesting> = ({item}) => (
    <View style={styles.childContainer}>
      <PlaneButton
        testingTitle={item.testName}
        handledeleted={() => console.log(item.id)}
        lessonTitle={item.subjectName}
        authorTitle={item.createdBy}
        style={{marginHorizontal: PaddingHorizantal}}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={allTesting}
        contentContainerStyle={ScrollViewPadding}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default TestingTabsScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 30,
  },
  childContainer: {},
});
