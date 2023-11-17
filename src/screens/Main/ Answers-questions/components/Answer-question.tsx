import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import UiText from '../../../../components/text';
import {ArrowDown, ArrowUp} from '../../../../assets/icons';
import DropDownAnimated from '../../../../components/drop-down';
import {QuestionAndAnswersItems} from '../../../../api/types';
import {ThemeContext} from '../../../../utils/themeContext';
import {COLORS} from '../../../../constants/COLORS';

const AnswerQuestion = ({id, question, answer}: QuestionAndAnswersItems) => {
  const {theme} = useContext(ThemeContext);
  let activeColor = COLORS[theme];
  return (
    <TouchableOpacity>
      <DropDownAnimated
        container={styles.dropDown}
        iconNoActive={<ArrowUp />}
        iconActive={<ArrowDown />}
        dropDown={
          <View style={styles.leftBox}>
            <UiText
              style={[styles.number, {color: activeColor.inputTitleColor}]}
              title={id ? `${id} .` : '1.'}
              color="GREY_BLACK"
              type="Bold18"
            />
            <UiText
              style={[styles.title, {color: activeColor.inputTitleColor}]}
              title={question}
              color="GREY_BLACK"
              type="Bold18"
            />
          </View>
        }
        containerInner={styles.dropDownInner}
        dropDownInner={
          <View>
            <UiText
              title={answer}
              type="bookRegular16"
              color="GREY_BLACK"
              themeColor={activeColor.inputTitleColor}
            />
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
