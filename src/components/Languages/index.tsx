import { FC } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { homeActions } from 'redux/rootAction';
import { v4 as uuid } from 'uuid';

const Language: FC = () => {
  const languageList = ['en', 'vn'];

  const dispatch = useAppDispatch();
  const { i18n } = useTranslation();
  const { changeLanguage } = homeActions.DocumentAction;
  const { lang } = useAppSelector((state) => state.LanguageReducer);
  const handleChange = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const target = event.target as HTMLInputElement;
    const language = target.value;
    i18n.changeLanguage(language);
    dispatch(changeLanguage(language));
    localStorage.setItem('lang', language || 'en');
  };
  return (
    <ToggleButtonGroup color="primary" exclusive onChange={handleChange}>
      {languageList.map((language) => (
        <ToggleButton key={uuid()} value={language}>
          {language.toUpperCase()}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};
export default Language;
