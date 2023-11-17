/* eslint-disable react/react-in-jsx-scope */
import {ScrollView, View} from 'react-native';
import UiText from '../../../components/text';
import DefaultWrapper from '../../../wrappers/default-wrapper/DefaultWrapper';
import {ScrollViewPadding} from '../../../constants/constants';
import DropDownAnimated from '../../../components/drop-down';
import {ArrowDown, ArrowUp} from '../../../assets/icons';
import {Styles} from './styles';
import Button from '../../../components/button';
import {COLORS} from '../../../constants/COLORS';
import {useDownloadHistoryhook} from './hook';
import {useContext} from 'react';
import {ThemeContext} from '../../../utils/themeContext';
const DownloadHistoryPayment = () => {
  const {downloadHistory, loading} = useDownloadHistoryhook();
  console.log('downloadHistory', JSON.stringify(downloadHistory, null, 2));
  const {theme} = useContext(ThemeContext);
  let activeColor = COLORS[theme];

  return (
    <DefaultWrapper hasUser title="История скачиваний" isLoad={loading}>
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
                text="Скачать"
                disabledBtn
                style={[Styles.button, {backgroundColor: COLORS.BLUE3}]}
                textColor={activeColor.activeTextColor}
              />
            </View>
          }
        />
      </ScrollView>
    </DefaultWrapper>
  );
};
export default DownloadHistoryPayment;
