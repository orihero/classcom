import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import DefaultWrapper from '../../../wrappers/default-wrapper/DefaultWrapper';
import DropDownAnimated from '../../../components/drop-down';
import {styles} from './styles';
import {ArrowDown, ArrowUp} from '../../../assets/icons';
import Button from '../../../components/button';
import {SupportMessagesHooks} from './hooks';
const SupportMessagesScreen = () => {
  const {techServiceItems} = SupportMessagesHooks();
  console.log('techServiceItems', JSON.stringify(techServiceItems, null, 2));

  return (
    <DefaultWrapper hasUser title="Сообщения для службы поддержки">
      <View style={{flex: 1}}>
        <DropDownAnimated
          dropDown={<Text style={styles.text}>Выберите тему</Text>}
          dropDownInner={techServiceItems?.map(item => {
            return (
              <View key={item.id} style={styles.dropInner}>
                <TouchableOpacity
                  style={styles.btndrop}
                  onPress={() => console.log(item.id)}>
                  <Text style={styles.text}>{item.name}</Text>
                </TouchableOpacity>
              </View>
            );
          })}
          containerInner={styles.innerContainer}
          container={styles.drop}
          iconActive={<ArrowDown />}
          iconNoActive={<ArrowUp />}
        />
        <TextInput multiline={true} style={styles.postContent} />
        <View style={styles.btn}>
          <Button text="Отправить" />
        </View>
      </View>
    </DefaultWrapper>
  );
};

export default SupportMessagesScreen;
