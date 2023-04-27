import React from 'react';
import {Text, View} from 'react-native';
import {ArrowDown, ArrowUp} from '../../../assets/icons';
import Button from '../../../components/button';
import DropDownAnimated from '../../../components/drop-down';
import DefaultWrapper from '../../../wrappers/default-wrapper/DefaultWrapper';
import {styles} from './styles';
import {useElectronicResourcesHooks} from './hooks';

const ElectronicResourceScreen = () => {
  const {eResources} = useElectronicResourcesHooks();
  console.log('====================================');
  console.log('RESOURCES', eResources);
  console.log('====================================');
  return (
    <DefaultWrapper title={'Электронные ресурсы'}>
      <View style={{marginTop: 15}}>
        <DropDownAnimated
          container={styles.dropDown}
          iconActive={<ArrowUp />}
          iconNoActive={<ArrowDown />}
          dropDown={
            <View style={styles.first}>
              <Text style={styles.title}>Презентация</Text>
            </View>
          }
          containerInner={styles.dropDownInner}
          dropDownInner={
            <>
              {eResources?.map(e => {
                return (
                  <View key={e.id}>
                    <View style={styles.second}>
                      <View>
                        <Text style={styles.textName}>Презентация</Text>
                      </View>
                      <ArrowDown />
                    </View>
                    <View style={styles.container}>
                      <Text style={styles.lessonText}>
                        6 класс урок 39.docx
                      </Text>
                      <Text style={styles.kbText}>20.45 KB</Text>
                    </View>
                    <Button
                      onPress={() => console.log('Log')}
                      text="Скачать"
                      style={{backgroundColor: '#3673A5'}}
                    />
                    <View style={[styles.container, styles.containerOne]}>
                      <Text style={styles.lessonText}>
                        6 класс урок 39.docx
                      </Text>
                      <Text style={styles.kbText}>20.45 KB</Text>
                    </View>
                    <Button
                      onPress={() => console.log('Log')}
                      text="Скачать"
                      style={{backgroundColor: '#3673A5'}}
                    />
                  </View>
                );
              })}
              <View style={styles.second}>
                <View>
                  <Text style={styles.textName}>Презентация</Text>
                </View>
                <ArrowDown />
              </View>
              <View style={styles.container}>
                <Text style={styles.lessonText}>6 класс урок 39.docx</Text>
                <Text style={styles.kbText}>20.45 KB</Text>
              </View>
              <Button
                onPress={() => console.log('Log')}
                text="Скачать"
                style={{backgroundColor: '#3673A5'}}
              />
              <View style={[styles.container, styles.containerOne]}>
                <Text style={styles.lessonText}>6 класс урок 39.docx</Text>
                <Text style={styles.kbText}>20.45 KB</Text>
              </View>
              <Button
                onPress={() => console.log('Log')}
                text="Скачать"
                style={{backgroundColor: '#3673A5'}}
              />
            </>
          }
        />
      </View>
    </DefaultWrapper>
  );
};

export default ElectronicResourceScreen;
