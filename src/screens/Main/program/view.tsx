import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import DefaultWrapper from '../../../wrappers/default-wrapper/DefaultWrapper';
import {Assets} from '../../../utils/requireAssets';

import {
  NoteIconProgram,
  PaperIcon,
  PenIcon,
  StarIcon,
} from '../../../assets/icons';
import InfoButton from '../../../components/Info-button';

const ProgramScreen = () => {
  return (
    <DefaultWrapper hasIcon title="О программе">
      <View style={styles.checkBox}>
        <Image style={styles.image} source={Assets.images.check} />
        <Text style={styles.classcom}>CLASSCOM</Text>
      </View>
      <Text style={styles.text}>Версия приложение 1.0.0</Text>
      <View style={styles.programContainer}>
        <InfoButton
          onPress={() => console.log('Qisee')}
          icon={<PenIcon />}
          title="Модераторы"
        />
        <InfoButton
          onPress={() => console.log('Qisee')}
          icon={<PaperIcon />}
          title="Справочник"
        />
        <InfoButton
          onPress={() => console.log('Qisee')}
          icon={<NoteIconProgram />}
          title="Пользовательское соглашение"
        />
        <InfoButton
          onPress={() => console.log('Qisee')}
          icon={<StarIcon />}
          title="Оцените нас в Google Play"
        />
      </View>
    </DefaultWrapper>
  );
};

export default ProgramScreen;
