import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IScheduleResponse, IScheduleTemplateResponse} from '../api/types';
import {COLORS} from '../constants/colors';
import UiText from './text';
import SIZES from '../constants/sizes';

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
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.childView}>
          {content.map((e, i) => {
            return (
              <TouchableOpacity
                style={[
                  {
                    borderColor: activeTab === i ? COLORS.BLUE : COLORS.WHITE,
                  },
                  styles.touchAbleBtn,
                ]}
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
                      ? styles.activeTabText
                      : styles.nonActiveText
                  }
                  title={e.title}
                  type="mediumRegular16"
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <View style={styles.shiftTab}>
        <TouchableOpacity
          onPress={() => setShift(1)}
          style={[
            styles.tab,
            shift === 1 ? null : {borderColor: COLORS.WHITE},
          ]}>
          <UiText
            style={shift === 1 ? styles.textHeader : styles.headerText}
            title="1-смена"
            type={shift === 1 ? 'Bold16' : 'mediumRegular16'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setShift(2)}
          style={[
            styles.tab,
            shift === 2 ? null : {borderColor: COLORS.WHITE},
          ]}>
          <UiText
            style={shift === 2 ? styles.textHeader : styles.headerText}
            title="2-смена"
            type={shift === 2 ? 'Bold16' : 'mediumRegular16'}
          />
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
  );
};

export default TopTabs;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  // =========== component header styles =================

  header: {},

  childView: {
    width: SIZES.width,
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: COLORS.BORDER_COLOR,
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

  //============== component shift Tab styles  ================== //

  shiftTab: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textHeader: {
    color: COLORS.BLUE,
  },
  headerText: {
    color: COLORS.NON_ACTIVE_TEXT,
  },

  //============== component Content styles  ================== //

  content: {
    flex: 1,
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
