import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {IModerator} from '../../../../api/types';
import {COLORS} from '../../../../constants/COLORS';
import {Images} from '../../../../assets/images';

interface Props {
  onPress?: () => void;
  item?: IModerator;
}

const ModeratorBox = ({onPress, item}: Props) => {
  const imgUrl = item?.imageUrl?.replace(/(:\d{4})/g, '/#');
  const moderatorImg = imgUrl ? {uri: imgUrl} : Images.userImg;
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={styles.container}>
      <Image style={styles.image} source={moderatorImg} />
      <View style={{marginLeft: 10}}>
        <Text style={styles.name}>
          {item?.firstName} {item?.lastName}
        </Text>
        <Text style={styles.title}>Категория: {item?.categoryName}</Text>
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
    marginVertical: 5,
    gap: 10,

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
