import React, {PropsWithChildren} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {mainWrapperStyles} from './MainWrapper.styles';
import {BellIcon, CalendarIcon, MenuIcon} from '../../assets/icons';
import {Assets} from '../../utils/requireAssets';
import {useNavigation, DrawerActions} from '@react-navigation/native';

const MainWrapper = (props: PropsWithChildren<any>) => {
  const drawer = useNavigation();
  const onPress = () => {
    drawer.dispatch(DrawerActions.toggleDrawer);
  };
  return (
    <View style={mainWrapperStyles.container}>
      <SafeAreaView>
        <View style={mainWrapperStyles.headerContainer}>
          <TouchableOpacity onPress={onPress}>
            <MenuIcon />
          </TouchableOpacity>
          
          <Image
            style={mainWrapperStyles.image}
            source={Assets.images.classPhoto}
          />

          <TouchableOpacity>
            <BellIcon />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <View style={mainWrapperStyles.useNameBox}>
        <Text style={mainWrapperStyles.nameText}>
          Ройтман Рафаэль Евгеньевич
        </Text>
      </View>

      <View style={mainWrapperStyles.calendarBox}>
        <View style={{flexDirection: 'row'}}>
          <Text style={mainWrapperStyles.textData}>Выберите дату</Text>
          <CalendarIcon style={{marginLeft: 10}} />
        </View>
        <View>
          <Text style={mainWrapperStyles.textData}>18 январь 2022</Text>
        </View>
      </View>

      <View style={mainWrapperStyles.weeksContainer}>
        <View style={mainWrapperStyles.weekBox}>
          <Text style={mainWrapperStyles.textWeek}>Пн</Text>
          <Text style={mainWrapperStyles.textWeek}>10</Text>
        </View>
        <View style={mainWrapperStyles.weekBox}>
          <Text style={mainWrapperStyles.textWeek}>Вт</Text>
          <Text style={mainWrapperStyles.textWeek}>11</Text>
        </View>
        <View style={mainWrapperStyles.week}>
          <Text style={mainWrapperStyles.textWeek}>Ср</Text>
          <Text style={mainWrapperStyles.textWeek}>12</Text>
        </View>
        <View style={mainWrapperStyles.weekBox}>
          <Text style={mainWrapperStyles.textWeek}>Чт</Text>
          <Text style={mainWrapperStyles.textWeek}>13</Text>
        </View>
        <View style={mainWrapperStyles.weekBox}>
          <Text style={mainWrapperStyles.textWeek}>Пт</Text>
          <Text style={mainWrapperStyles.textWeek}>14</Text>
        </View>
        <View style={mainWrapperStyles.weekBox}>
          <Text style={mainWrapperStyles.textWeek}>Сб</Text>
          <Text style={mainWrapperStyles.textWeek}>15</Text>
        </View>
      </View>
      <View style={mainWrapperStyles.childrenContainer}>{props.children}</View>
    </View>
  );
};

export default MainWrapper;
