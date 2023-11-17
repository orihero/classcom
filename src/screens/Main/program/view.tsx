import { View, Text, Image } from 'react-native';
import React from 'react';
import { styles } from './styles';
import DefaultWrapper from '../../../wrappers/default-wrapper/DefaultWrapper';
import { Assets } from '../../../utils/requireAssets';

import {
  NoteIconProgram,
  PaperIcon,
  PenIcon,
  StarIcon,
} from '../../../assets/icons';
import InfoButton from '../../../components/Info-button';
import { ProgramHooks } from './hooks';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { COLORS } from '../../../constants/COLORS';

const ProgramScreen = () => {
  const {
    onModeratrosPress,
    onDirectoryPress,
    onRateUsOnGooglePlay,
    onTermUseBtnPress,
  } = ProgramHooks();

  const drawer = useNavigation();

  const onArrowLeftBtnPress = () => {
    drawer.dispatch(DrawerActions.toggleDrawer);
  };

  return (
    <DefaultWrapper
      hasIcon
      title="О программе"
      onArrowLeftBtnPress={onArrowLeftBtnPress}>
      <View style={styles.checkBox}>
        <Image style={styles.image} source={Assets.images.check} />
        <Text style={styles.classcom}>CLASSCOM</Text>
      </View>
      <Text style={styles.text}>Версия приложение 1.0.0</Text>
      <View style={styles.programContainer}>
        <InfoButton
          onPress={onModeratrosPress}
          icon={<PenIcon stroke={COLORS.WHITE} color={COLORS.WHITE} />}
          title="Модераторы"
        />
        <InfoButton
          onPress={onDirectoryPress}
          icon={<PaperIcon stroke={COLORS.WHITE} />}
          title="Справочник"
        />
        <InfoButton
          onPress={onTermUseBtnPress}
          icon={<NoteIconProgram stroke={COLORS.WHITE} />}
          title="Пользовательское соглашение"
        />
        <InfoButton
          onPress={onRateUsOnGooglePlay}
          icon={<StarIcon fill={'transparent'} stroke={COLORS.WHITE} />}
          title="Оцените нас в Google Play"
        />
      </View>
    </DefaultWrapper>
  );
};

export default ProgramScreen;
