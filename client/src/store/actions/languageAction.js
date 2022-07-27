import { CHOOSE_LANGUAGE } from '../constants/languageConstants';

export const chooseLanguage = (locale) => {
  return {
    type: CHOOSE_LANGUAGE,
    payload: locale,
  };
};