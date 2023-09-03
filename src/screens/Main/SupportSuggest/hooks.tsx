import {useCallback, useEffect, useState} from 'react';
import {REQUESTS} from '../../../api/requests';
import {TechService, TechServiceThemeItems} from '../../../api/types';
import {useIsFocused, useNavigation} from '@react-navigation/native';

export const SupportSuggestHooks = () => {
  const [techServiceItems, setTechServiceItems] =
    useState<TechServiceThemeItems[]>();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [postTechServiceItems, setPostTechServiceItems] = useState<TechService>(
    {
      themeId: 0,
      content: '',
      type: 'SUGGESTION',
    },
  );

  const onInputChange =
    (key: keyof typeof postTechServiceItems) => (value: any) => {
      setPostTechServiceItems({...postTechServiceItems, [key]: value});
    };

  const isFocused = useIsFocused();

  const getTechServiceItems = useCallback(async () => {
    try {
      const res = await REQUESTS.support.getTechServiceThemeItems();
      setTechServiceItems(res.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const postTechService = useCallback(
    async (data: TechService) => {
      setLoading(true);
      try {
        await REQUESTS.support.postTechService(data);
      } catch (error) {
        //@ts-ignore
        CustomSnackbar.danger(error?.response?.data?.message || '');
      } finally {
        setLoading(false);
        navigation.goBack();
      }
    },
    [navigation],
  );

  const handleClickBtn = useCallback(() => {
    postTechService(postTechServiceItems);
    setPostTechServiceItems({
      themeId: 0,
      content: '',
      type: 'SUPPORT',
    });
    navigation.goBack;
  }, [postTechService, postTechServiceItems, navigation.goBack]);

  useEffect(() => {
    isFocused && getTechServiceItems();
  }, [isFocused, getTechServiceItems]);

  return {
    techServiceItems: techServiceItems?.map(e => ({
      label: e.name,
      value: e.id,
    })),
    onInputChange,
    handleClickBtn,
    postTechServiceItems,
    loading,
  };
};
