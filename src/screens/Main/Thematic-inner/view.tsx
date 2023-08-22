import {View, Text, ScrollView} from 'react-native';
import React, {useContext} from 'react';
import {styles} from './styles';
import DefaultWrapper from '../../../wrappers/default-wrapper/DefaultWrapper';
import DropDownAnimated from '../../../components/drop-down';
import PlaneButton from '../../../components/plane-button';
import Button from '../../../components/button';
import {useThematicInnerHooks} from './hooks';
import {ThemeContext} from '../../../utils/themeContext';
import {COLORS} from '../../../constants/colors';

const ThematicInnerScreen = () => {
  const {subjectsData, paramsData} = useThematicInnerHooks();
  console.log(subjectsData, ' subgectdata');

  const {theme} = useContext(ThemeContext);
  let activeColor = COLORS[theme];
  const renderView = () => {
    return subjectsData?.map(item => {
      return (
        <DropDownAnimated
          key={item.id}
          container={styles.dropContainer}
          containerInner={styles.dropInnerContainer}
          dropDown={
            <PlaneButton
              disable={true}
              authorTitle="Автор"
              lessonTitle={item.name}
              nameTitle={paramsData}
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
                nameTitle={paramsData}
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
                  textColor={activeColor.activeTextColor}
                  onPress={() => console.log(item)}
                />
              </View>
            </View>
          }
        />
      );
    });
  };

  return (
    <DefaultWrapper title="Тематический план">
      <ScrollView>
        <View style={styles.container}>{renderView?.()}</View>
      </ScrollView>
    </DefaultWrapper>
  );
};

export default ThematicInnerScreen;
