/* eslint-disable react/react-in-jsx-scope */
import {ScrollView, View} from 'react-native';
import UiText from '../../../components/text';
import DefaultWrapper from '../../../wrappers/default-wrapper/DefaultWrapper';
import {ScrollViewPadding} from '../../../constants/constants';
import DropDownAnimated from '../../../components/drop-down';
import {ArrowDown, ArrowUp} from '../../../assets/icons';
import {Styles} from './styles';
import Button from '../../../components/button';
import {COLORS} from '../../../constants/colors';
import {useDownloadHistoryhook} from './hook';
const DownloadHistoryPayment = () => {
  const {downloadHistory} = useDownloadHistoryhook();
  console.log('====================================');
  console.log('downloadHistory', JSON.stringify(downloadHistory, null, 2));
  console.log('====================================');

  return (
    <DefaultWrapper hasUser title="История скачиваний">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={ScrollViewPadding}>
        <DropDownAnimated
          container={Styles.dropDown}
          iconActive={<ArrowDown />}
          iconNoActive={<ArrowUp />}
          dropDown={
            <View style={Styles.first}>
              <UiText title="Презентация " color="GREY_BLACK" type="Bold18" />
              <UiText
                title="25.01.2023 "
                color="GREY_BLACK"
                type="mediumRegular14"
              />
            </View>
          }
          containerInner={Styles.dropDownInner}
          dropDownInner={
            <View style={Styles.first}>
              <UiText title="Презентация " color="WHITE" type="Bold18" />
              <UiText
                title="25.01.2023 "
                color="WHITE"
                type="mediumRegular14"
              />
              <View style={Styles.innerView}>
                <UiText
                  title="6 класс урок 39.docx"
                  type="mediumRegular14"
                  color="WHITE"
                />
                <UiText title="20.45 KB" type="mediumRegular14" color="WHITE" />
              </View>
              <Button
                onPress={() => console.log('download')}
                text="Скачать"
                style={[Styles.button, {backgroundColor: COLORS.BLUE3}]}
              />
            </View>
          }
        />
      </ScrollView>
    </DefaultWrapper>
  );
};
export default DownloadHistoryPayment;