import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {ArrowDown, ArrowUp} from '../../../assets/icons';
import Button from '../../../components/button';
import DropDownAnimated from '../../../components/drop-down';
import DefaultWrapper from '../../../wrappers/default-wrapper/DefaultWrapper';
import {styles} from './styles';
import {useElectronicResourcesHooks} from './hooks';
import {ScrollViewPadding} from '../../../constants/constants';
import {COLORS} from '../../../constants/colors';
import SIZES from '../../../constants/sizes';

const ElectronicResourceScreen = () => {
  const {eResources} = useElectronicResourcesHooks();
  console.log(JSON.stringify(eResources, null, 2));
  console.log(SIZES.width);

  return (
    <DefaultWrapper title={'Электронные ресурсы'}>
      <ScrollView
        style={{marginTop: 15}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={ScrollViewPadding}>
        {eResources?.map(item => {
          return (
            <View key={item.id}>
              <DropDownAnimated
                container={styles.dropDown}
                iconActive={<ArrowUp />}
                iconNoActive={<ArrowDown />}
                dropDown={
                  <View style={styles.first}>
                    <Text style={styles.title}>{item.course_name}</Text>
                  </View>
                }
                containerInner={styles.dropDownInner}
                dropDownInner={
                  <View key={item.id}>
                    <View style={styles.second}>
                      <View>
                        <Text style={styles.textName}>{item.name}</Text>
                      </View>
                    </View>

                    <Button
                      onPress={() => console.log('Log')}
                      text="Скачать"
                      style={{backgroundColor: COLORS.BLUE3}}
                    />
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
