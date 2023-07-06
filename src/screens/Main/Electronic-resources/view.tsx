import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {ArrowDown, ArrowUp} from '../../../assets/icons';
import DropDownAnimated from '../../../components/drop-down';
import DefaultWrapper from '../../../wrappers/default-wrapper/DefaultWrapper';
import {styles} from './styles';
import {useElectronicResourcesHooks} from './hooks';
import {ScrollViewPadding} from '../../../constants/constants';

const ElectronicResourceScreen = () => {
  const {eResources} = useElectronicResourcesHooks();
  console.log(JSON.stringify(eResources, null, 2));

  return (
    <DefaultWrapper title={'Электронные ресурсы'}>
      <ScrollView
        style={{marginTop: 15}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={ScrollViewPadding}>
        {eResources?.map(item => {
          return (
            <View key={item[0].id}>
              <DropDownAnimated
                container={styles.dropDown}
                iconActive={<ArrowUp />}
                iconNoActive={<ArrowDown />}
                dropDown={
                  <View style={styles.first}>
                    <Text style={styles.title}>{item[0].course_name}</Text>
                  </View>
                }
                containerInner={styles.dropDownInner}
                dropDownInner={
                  <View key={item[0].id}>
                    <View style={styles.second}>
                      <View>
                        <Text style={styles.textName}>{item[0].name}</Text>
                      </View>
                    </View>
                  </View>
                }
              />
            </View>
          );
        })}
      </ScrollView>
    </DefaultWrapper>
  );
};

export default ElectronicResourceScreen;
