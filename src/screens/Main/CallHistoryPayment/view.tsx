/* eslint-disable react/react-in-jsx-scope */
import {ScrollView, View} from 'react-native';
import UiText from '../../../components/text';
import DefaultWrapper from '../../../wrappers/default-wrapper/DefaultWrapper';
import {ScrollViewPadding} from '../../../constants/constants';
import DropDownAnimated from '../../../components/drop-down';
import {ArrowDown, ArrowUp} from '../../../assets/icons';
import {Styles} from './styles';
import {useCallHistoryPayment} from './hook';

const CallHistoryPayment = () => {
  const {moderatorHistoryies} = useCallHistoryPayment();
  console.log(
    'moderatorHistoryies',
    JSON.stringify(moderatorHistoryies, null, 2),
  );

  return (
    <DefaultWrapper hasUser title="История обращений">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={ScrollViewPadding}>
        {moderatorHistoryies.map((item, index) => {
          return (
            <View key={index}>
              <DropDownAnimated
                container={Styles.dropDown}
                iconActive={<ArrowDown />}
                iconNoActive={<ArrowUp />}
                dropDown={
                  <View style={Styles.first}>
                    <UiText
                      title={item.actionType}
                      color="GREY_BLACK"
                      type="Bold18"
                    />
                    <UiText
                      title={item.actionDate.slice(0, 10)}
                      color="GREY_BLACK"
                      type="mediumRegular14"
                    />
                  </View>
                }
                containerInner={Styles.dropDownInner}
                dropDownInner={
                  <View style={Styles.first}>
                    <UiText
                      title={item.actionType}
                      color="WHITE"
                      type="Bold18"
                    />
                    <UiText
                      title={item.actionDate.slice(0, 10)}
                      color="WHITE"
                      type="mediumRegular14"
                    />
                    <View style={Styles.innerView}>
                      <UiText
                        color="WHITE_TWO"
                        type="bookRegular14"
                        title={item.entityType}
                      />
                    </View>
                  </View>
                }
              />
            </View>
          );
        })}
      </ScrollView>
    </DefaultWrapper>
  );
};
export default CallHistoryPayment;
