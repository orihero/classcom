import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {ArrowDown, ArrowUp} from '../../../assets/icons';
import DropDownAnimated from '../../../components/drop-down';
import DefaultWrapper from '../../../wrappers/default-wrapper/DefaultWrapper';
import {styles} from './styles';
import {useElectronicResourcesHooks} from './hooks';
import {ScrollViewPadding} from '../../../constants/constants';
import Button from '../../../components/button';
import {COLORS} from '../../../constants/colors';
import {map} from 'lodash';
import {IElectronicRecCategories} from '../../../api/types';

const ElectronicResourceScreen = () => {
  const {eResources, getFileAttechment} = useElectronicResourcesHooks();
  console.log(JSON.stringify(eResources, null, 2));

  return (
    <DefaultWrapper title={'Электронные ресурсы'}>
      <ScrollView
        style={styles.scroolViewContainer}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={ScrollViewPadding}>
        {map(eResources, (currentValue: IElectronicRecCategories[], key) => (
          <View key={key}>
            <DropDownAnimated
              container={styles.dropDown}
              iconActive={<ArrowUp />}
              iconNoActive={<ArrowDown />}
              dropDown={
                <View style={styles.first}>
                  <Text style={styles.title}>{key}</Text>
                </View>
              }
              containerInner={styles.dropDownInner}
              dropDownInner={
                <View>
                  {currentValue.map((item, childKey) => (
                    <View key={childKey}>
                      <View style={styles.second}>
                        <View>
                          <Text style={styles.textName}>{item.name}</Text>
                        </View>
                        <View>
                          <Text style={styles.textName}>
                            {item.book?.attachmentSize}
                          </Text>
                        </View>
                      </View>
                      <Button
                        onPress={() =>
                          getFileAttechment(item?.book?.attachmentId ?? 0)
                        }
                        text="Скачать"
                        style={{backgroundColor: COLORS.BLUE3}}
                      />
                    </View>
                  ))}
                </View>
              }
            />
          </View>
        ))}
      </ScrollView>
    </DefaultWrapper>
  );
};

export default ElectronicResourceScreen;
