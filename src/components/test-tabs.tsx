import {StyleSheet, TouchableOpacity, View} from 'react-native';
import UiText from './text';
import React, {FC, useState} from 'react';
import {COLORS} from '../constants/colors';
import SIZES from '../constants/sizes';

export type TopTabsItem = {
  id: number;
  name: string;
  component: React.FC;
};

interface TopTabsProps {
  content: TopTabsItem[];
}

const TestTopTabs: FC<TopTabsProps> = ({content}) => {
  const [activeTab, setActiveTab] = useState(0);
  const [component, setComponent] = useState<{
    comp: React.FC;
  }>({
    comp: content[0].component,
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.childView}>
          {content.map((item, index) => {
            return (
              <TouchableOpacity
                style={[
                  {
                    borderColor:
                      activeTab === item.id ? COLORS.BLUE : COLORS.WHITE,
                  },
                  styles.touchAbleBtn,
                ]}
                activeOpacity={0.7}
                onPress={() => {
                  setComponent({
                    comp: content[index].component,
                  });
                  setActiveTab(item.id);
                }}
                key={item.id}>
                <UiText
                  style={
                    activeTab === item.id
                      ? styles.activeTabText
                      : styles.nonActiveText
                  }
                  title={item.name}
                  type="mediumRegular16"
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <View style={styles.contentCard}>
        <component.comp />
      </View>
    </View>
  );
};

export default TestTopTabs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {},
  contentCard: {
    flex: 1,
  },
  childView: {
    width: SIZES.width,
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: COLORS.BORDER_COLOR,
  },
  renderView: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.GREY,
  },
  touchAbleBtn: {
    flexDirection: 'row',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 4,
    paddingVertical: 10,
  },
  activeTabText: {
    color: COLORS.BLUE,
  },
  nonActiveText: {
    color: COLORS.NON_ACTIVE_TEXT,
  },
});
