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
  titleList: string[];
  iconActive: any[];
  iconNoActive: any[];
}
const TopTabs = ({
  First,
  Second,
  titleList,
  iconNoActive,
  iconActive,
}: TabProps) => {
  const [active, setActive] = useState(0);
  const onTabPress = (i: number) => () => {
    setActive(i);
  };
  return (
    <View style={{flex: 1}}>
      <View style={styles.ShopContainer}>
        <View style={styles.header}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{width: windowWidth, alignItems: 'center'}}>
              <View
                style={{
                  flexDirection: 'row',
                  borderBottomWidth: 1,
                  borderColor: '#CECECE',
                  width: windowWidth / 1.2,
                }}>
                {Tabs.map((e, i) => {
                  return (
                    <TouchableOpacity
                      style={{
                        flexDirection: 'row',
                        width: '50%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderBottomWidth: 4,
                        borderColor: active === i ? COLORS.BLUE:COLORS.WHITE,
                        paddingVertical: 12,
                      }}
                      activeOpacity={0.7}
                      onPress={onTabPress(i)}
                      key={i}>
                      <View style={{marginRight: 10,}}>
                        {active ? (
                          <View>{iconActive[i]}</View>
                        ) : (
                          <View>{iconNoActive[i]}</View>
                        )}
                      </View>
                      <Text
                        style={
                          active === i ? styles.textHeader : styles.headerText
                        }>
                        {titleList[i]}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{}}>
              {Tabs.map((e, i) => {
                const Content = e.content;
                return i === active ? (
                  <Content First={First} Second={Second} />
                ) : null;
              })}
            </View>
          </ScrollView>
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
