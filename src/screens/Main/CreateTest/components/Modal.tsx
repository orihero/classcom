import {View, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import React from 'react';
import Button from '../../../../components/button';
import {COLORS} from '../../../../constants/colors';

interface Props {
  container: any;
  isModalVisible: boolean;
  toggleModal: () => void;
}

const ModalTest = ({container, toggleModal, isModalVisible}: Props) => {
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
