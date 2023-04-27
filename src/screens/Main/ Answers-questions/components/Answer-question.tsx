import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

interface Props {
  onPress: () => void;
}

const AnswerQuestion = ({onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.number}>1.</Text>
      <Text style={styles.title}>Как пользоваться системой?</Text>
    </TouchableOpacity>
  );
};

export default AnswerQuestion;

const styles = StyleSheet.create({
  container: {},
  number: {},
  title: {},
});
