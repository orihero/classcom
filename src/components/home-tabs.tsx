import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';

interface Props {
  First?: any;
  Second?: any;
}

const First = ({First}: Props) => {
  return <View style={{flex: 1}}>{First}</View>;
};
const Second = ({Second}: Props) => {
  return <View style={{flex: 1}}>{Second}</View>;
};

const Tabs = [
  {
    content: First,
    title: '',
  },
  {
    content: Second,
    title: '',
  },
];
const windowWidth = Dimensions.get('window').width;

interface TabProps extends Props {
  content: Array<{
    title: string;
    content: () => JSX.Element;
    iconActive: JSX.Element;
    iconPassive: JSX.Element;
  }>;
}

const TopTabs = ({content}: TabProps) => {
  const [active, setActive] = useState(0);
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
        <View style={styles.content}>
          {/* <ScrollView showsVerticalScrollIndicator={false}> */}
            <View style={{flex: 1,}}>
              {content.map((e, i) => {
                const Content: () => JSX.Element = e.content;
                if (i === active) {
                  return <Content key={i} />;
                }
                // return <></>;
              })}
            </View>
          {/* </ScrollView> */}
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
});
