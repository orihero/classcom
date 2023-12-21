import {View, Text, ScrollView} from 'react-native';
import React, {useContext} from 'react';
import {styles} from './styles';
import DefaultWrapper from '../../../wrappers/default-wrapper/DefaultWrapper';
import DropDownAnimated from '../../../components/drop-down';
import PlaneButton from '../../../components/plane-button';
import Button from '../../../components/button';
import {useThematicInnerHooks} from './hooks';
import {ThemeContext} from '../../../utils/themeContext';
import {COLORS} from '../../../constants/COLORS';

const ThematicInnerScreen = () => {
  const {subjectsData, paramsData} = useThematicInnerHooks();

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
          dropDownInner={item.subjectResourceDTOs.map((e, index) => {
            console.log(JSON.stringify(e, null, 2));

            return (
              <View style={styles.box} key={index}>
                <View style={styles.btnContainer}>
                  <Text style={styles.title}>{e.name}</Text>
                  <Text style={styles.text}>{e.attachment?.fullSize} </Text>
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
            );
          })}
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
