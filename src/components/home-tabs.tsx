import React from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {IScheduleResponse, IScheduleTemplateResponse} from '../api/types';
import {COLORS} from '../constants/COLORS';
import UiText from './text';

const windowWidth = Dimensions.get('window').width;

interface TabProps {
  content: Array<{
    title: string;
    content: (props: {
      date: Date;
      data: IScheduleResponse | IScheduleTemplateResponse;
    }) => JSX.Element;
    iconActive: JSX.Element;
    iconPassive: JSX.Element;
  }>;
  shift: number;
  setShift: (shift: number) => void;
  data: Array<IScheduleResponse | IScheduleTemplateResponse>;
  date: Date;
  activeTab: number;
  setActiveTab: (e: number) => void;
}

const TopTabs = ({
  content,
  data,
  setShift,
  shift,
  date,
  activeTab,
  setActiveTab,
}: TabProps) => {
  const onTabPress = (i: number) => () => {
    setActiveTab(i);
  };
  return (
    <View style={{flex: 1}}>
      <View style={styles.ShopContainer}>
        <View style={styles.header}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View
              style={{
                width: windowWidth,
                alignItems: 'center',
                paddingBottom: 15,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  borderBottomWidth: 1,
                  borderColor: '#CECECE',
                  width: windowWidth / 1.2,
                }}>
                {content.map((e, i) => {
                  return (
                    <TouchableOpacity
                      style={{
                        flexDirection: 'row',
                        width: '50%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderBottomWidth: 4,
                        borderColor:
                          activeTab === i ? COLORS.BLUE : COLORS.WHITE,
                        paddingVertical: 12,
                      }}
                      activeOpacity={0.7}
                      onPress={onTabPress(i)}
                      key={i}>
                      <View style={{marginRight: 10}}>
                        {activeTab ? (
                          <View>{e.iconActive}</View>
                        ) : (
                          <View>{e.iconPassive}</View>
                        )}
                      </View>
                      <UiText
                        style={
                          activeTab === i
                            ? styles.textHeader
                            : styles.headerText
                        }
                        title={e.title}
                        type="mediumRegular12"
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={styles.shiftTab}>
          <TouchableOpacity
            onPress={() => setShift(1)}
            style={[
              styles.tab,
              shift === 1 ? null : {borderColor: COLORS.WHITE},
            ]}>
            <Text style={shift === 1 ? styles.textHeader : styles.headerText}>
              1-смена
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setShift(2)}
            style={[
              styles.tab,
              shift === 2 ? null : {borderColor: COLORS.WHITE},
            ]}>
            <Text style={shift === 2 ? styles.textHeader : styles.headerText}>
              2-смена
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <View style={{flex: 1}}>
            {content.map((e, i) => {
              const Content: (props: {
                data: IScheduleResponse | IScheduleTemplateResponse;
                date: Date;
              }) => JSX.Element = e.content;
              if (i === activeTab) {
                return <Content data={data[i]} date={date} key={i} />;
              }
            })}
          </View>
        </View>
      </View>
    </View>
  );
};

export default TopTabs;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ShopContainer: {
    flex: 1,
  },
  header: {},
  content: {
    flex: 1,
  },
  textHeader: {
    color: COLORS.BLUE,
    fontSize: 17,
    fontWeight: '700',
  },
  headerText: {
    color: '#757575',
    fontSize: 17,
    fontWeight: '500',
  },
  shiftTab: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  tab: {
    padding: 20,
    borderRadius: 30,
    borderColor: COLORS.BLUE,
    borderWidth: 1,
    paddingVertical: 8,
    marginHorizontal: 3,
  },
  tabText: {
    color: COLORS.BLUE,
    fontWeight: '700',
    fontSize: 17,
  },
});
