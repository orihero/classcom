import React, {useContext} from 'react';
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
import {ThemeContext} from '../../../utils/themeContext';
import UiText from '../../../components/text';

const ElectronicResourceScreen = () => {
  const {eResources, getFileAttechment} = useElectronicResourcesHooks();
  console.log('eResources', JSON.stringify(eResources, null, 2));

  const {theme} = useContext(ThemeContext);
  let activeColor = COLORS[theme];

  return (
    <DefaultWrapper title={'Электронные ресурсы'}>
      <ScrollView
        style={styles.scroolViewContainer}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={ScrollViewPadding}>
        {map(eResources, (currentValue: IElectronicRecCategories[], key) => (
          <View key={key}>
            <DropDownAnimated
              container={[
                styles.dropDown,
                {backgroundColor: activeColor.btnBackColor2},
              ]}
              iconActive={<ArrowDown />}
              iconNoActive={<ArrowUp />}
              dropDown={
                <View style={styles.first}>
                  <UiText
                    title={key}
                    type="Bold16"
                    style={{color: activeColor.textColor2}}
                  />
                </View>
              }
              containerInner={[
                styles.dropDownInner,
                {backgroundColor: activeColor.noneBackgroundBtn},
              ]}
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
                        onPress={() => getFileAttechment(item.book as never)}
                        text="Скачать"
                        style={{backgroundColor: activeColor.btnBackColor2}}
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
