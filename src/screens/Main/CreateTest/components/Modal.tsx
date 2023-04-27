import {View, Text, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import React, {useState} from 'react';
import Button from '../../../../components/button';
import {COLORS} from '../../../../constants/COLORS';

interface Props {
  container: any;
}

const ModalTest = ({container}: Props) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View style={{flex: 1}}>
      <Button text="Продолжить" onPress={toggleModal} />
      <Modal isVisible={isModalVisible}>
        <View style={styles.container}>{container}</View>
      </Modal>
    </View>
  );
};

export default ModalTest;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    marginHorizontal: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
});
