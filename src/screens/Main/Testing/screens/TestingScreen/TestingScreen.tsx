/* eslint-disable react/react-in-jsx-scope */
import { FlatList, ListRenderItem, StyleSheet, View } from 'react-native';
import PlaneButton from '../../../../../components/plane-button';
import useTestingHook from './hook';
import { ScrollViewPadding } from '../../../../../constants/constants';
import { AllTesting } from '../../../../../api/types';
import { PaddingHorizantal } from '../../../../../constants/sizes';
import { COLORS } from '../../../../../constants/COLORS';

const TestingTabsScreen = () => {
  const { allTesting, navigateToSolution } = useTestingHook();

  const renderItem: ListRenderItem<AllTesting> = ({ item }) => (
    <View style={styles.childContainer}>
      <PlaneButton
        testingTitle={item.testName}
        authorTitle={item.createdBy}
        lessonTitle={item.subjectName}
        onPress={() => navigateToSolution(item.id)}
        handledeleted={() => console.log(item.id)}
        style={{ marginHorizontal: PaddingHorizantal, backgroundColor: "rgba(255,255,255,0.1)" }}
        textStyle={{ color: COLORS.WHITE }}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={allTesting}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={ScrollViewPadding}
        keyExtractor={(_, index) => index.toString()}
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
