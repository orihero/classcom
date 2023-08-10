import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Assets} from '../../../utils/requireAssets';
import Button from '../../../components/button';
import {WelcomeHooks} from './hooks';

const WelcomeScreen = () => {
  const {onPress} = WelcomeHooks();
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={Assets.images.check} />
      <Text style={styles.nameText}>Рафаэль Евгеньевич,</Text>
      <Text style={styles.text}>Добро Пожаловать в Classcom!</Text>
      <Button onPress={onPress} text="Glavni" />
    </View>
  );
};

export default WelcomeScreen;
