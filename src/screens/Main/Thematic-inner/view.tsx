import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {styles} from './styles';
import DefaultWrapper from '../../../wrappers/default-wrapper/DefaultWrapper';
import DropDownAnimated from '../../../components/drop-down';
import PlaneButton from '../../../components/plane-button';
import Button from '../../../components/button';
import {useThematicInnerHooks} from './hooks';

const ThematicInnerScreen = () => {
  const {thematicDetails} = useThematicInnerHooks();

  return (
    <DefaultWrapper title="Тематический план">
      <ScrollView>
        <View style={styles.container}>
          <DropDownAnimated
            container={styles.dropContainer}
            containerInner={styles.dropInnerContainer}
            dropDown={
              <PlaneButton
                disable={true}
                authorTitle="Автор"
                lessonTitle="Конспекты"
                nameTitle="В.Чаплина"
                testingTitle="Крылатый будильник"
                onPress={() => console.log('Hi')}
              />
            }
            dropDownInner={
              <View style={styles.box}>
                <PlaneButton
                  disable={true}
                  textStyle={styles.textStyles}
                  style={styles.inner}
                  authorTitle="Автор"
                  lessonTitle="Конспекты"
                  nameTitle="В.Чаплина"
                  testingTitle="Крылатый будильник"
                />
                <View style={styles.btnContainer}>
                  <Text style={styles.title}>6 класс урок 39.docx</Text>
                  <Text style={styles.text}>20.45 KB</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                  <Button
                    text="Скачать"
                    style={styles.btn}
                    textStyle={styles.btnText}
                  />
                </View>
              </View>
            }
          />
          <DropDownAnimated
            container={styles.dropContainer}
            containerInner={styles.dropInnerContainer}
            dropDown={
              <PlaneButton
                disable={true}
                authorTitle="Автор"
                lessonTitle="Конспекты"
                nameTitle="В.Чаплина"
                testingTitle="Крылатый будильник"
                onPress={() => console.log('Hi')}
              />
            }
            dropDownInner={
              <View style={styles.box}>
                <PlaneButton
                  disable={true}
                  textStyle={styles.textStyles}
                  style={styles.inner}
                  authorTitle="Автор"
                  lessonTitle="Конспекты"
                  nameTitle="В.Чаплина"
                  testingTitle="Крылатый будильник"
                />
                <View style={styles.btnContainer}>
                  <Text style={styles.title}>6 класс урок 39.docx</Text>
                  <Text style={styles.text}>20.45 KB</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                  <Button
                    text="Скачать"
                    style={styles.btn}
                    textStyle={styles.btnText}
                  />
                </View>
              </View>
            }
          />
        </View>
      </ScrollView>
    </DefaultWrapper>
  );
};

export default ThematicInnerScreen;
