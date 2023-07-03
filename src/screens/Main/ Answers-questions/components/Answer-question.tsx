import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import UiText from '../../../../components/text';
import {ArrowDown, ArrowUp} from '../../../../assets/icons';
import DropDownAnimated from '../../../../components/drop-down';
import {COLORS} from '../../../../constants/COLORS';

interface Props {
  onPress?: () => void;
  title: string;
  number?: string;
}

const AnswerQuestion = ({onPress, title, number}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <DropDownAnimated
        container={styles.dropDown}
        iconNoActive={<ArrowUp />}
        iconActive={<ArrowDown />}
        dropDown={
          <View style={styles.leftBox}>
            <UiText
              style={styles.number}
              title={number ? `${number} .` : '1.'}
              color="MIDNIGHT_BLUE"
              type="Bold18"
            />
            <UiText
              style={styles.title}
              title={title}
              color="MIDNIGHT_BLUE"
              type="Bold18"
            />
          </View>
        }
        containerInner={styles.dropDownInner}
        dropDownInner={
          <View>
            <UiText title="Hello" />
          </View>
        }
      />
    </TouchableOpacity>
  );
};

export default AnswerQuestion;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    paddingVertical: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  leftBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftIcon: {},
  number: {},
  title: {
    width: '80%',
    alignItems: 'flex-end',
  },
  dropDown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    shadowColor: 'rgba(105, 105, 105, 0.18)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  dropDownInner: {
    overflow: 'hidden',
    backgroundColor: COLORS.GREEN,
    borderRadius: 10,
    marginTop: 10,
    shadowColor: 'rgba(105, 105, 105, 0.18)',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
