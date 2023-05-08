import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';

const windowWidth = Dimensions.get('window').width;

interface TabProps {
  content: Array<{
    title: string;
    content: () => JSX.Element;
    iconActive: JSX.Element;
    iconPassive: JSX.Element;
  }>;
  shift: number;
}

const TopTabs = ({content}: TabProps) => {
  const [active, setActive] = useState(0);
  const [shift, setShift] = useState(0);
  const onTabPress = (i: number) => () => {
    setActive(i);
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
                        borderColor: active === i ? COLORS.BLUE : COLORS.WHITE,
                        paddingVertical: 12,
                      }}
                      activeOpacity={0.7}
                      onPress={onTabPress(i)}
                      key={i}>
                      <View style={{marginRight: 10}}>
                        {active ? (
                          <View>{e.iconActive}</View>
                        ) : (
                          <View>{e.iconPassive}</View>
                        )}
                      </View>
                      <Text
                        style={
                          active === i ? styles.textHeader : styles.headerText
                        }>
                        {e.title}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={styles.shiftTab}>
          <TouchableOpacity
            onPress={() => setShift(0)}
            style={[
              styles.tab,
              shift === 0 ? null : {borderColor: COLORS.WHITE},
            ]}>
            <Text style={shift === 0 ? styles.textHeader : styles.headerText}>
              1-смена
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setShift(1)}
            style={[
              styles.tab,
              shift === 1 ? null : {borderColor: COLORS.WHITE},
            ]}>
            <Text style={shift === 1 ? styles.textHeader : styles.headerText}>
              2-смена
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <View style={{flex: 1}}>
            {content.map((e, i) => {
              const Content: () => JSX.Element = e.content;
              if (i === active) {
                return <Content key={i} />;
              }
            })}
          </View>
        </View>
      </View>
    </View>
  );
};

export default TopTabs;

import {StyleSheet} from 'react-native';
import {COLORS} from '../constants/COLORS';

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
