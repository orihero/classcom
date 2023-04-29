import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Assets} from '../../../../utils/requireAssets';
import {COLORS} from '../../../../constants/COLORS';

interface Props {
  name?: string;
  title?: string;
  onPress?: () => void;
}

const ModeratorBox = ({name, title, onPress}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={styles.container}>
      <Image style={styles.image} source={Assets.images.user} />
      <View style={{marginLeft: 10}}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ModeratorBox;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.3,

    elevation: 13,
  },
  name: {
    fontSize: 17,
    fontWeight: '700',
    color: COLORS.GREY_BLACK,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.GREY,
    marginTop: 5,
  },
  image: {
    width: 56,
    height: 56,
    borderRadius: 100,
  },
});
