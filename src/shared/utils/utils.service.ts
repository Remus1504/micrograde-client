import { Dispatch } from '@reduxjs/toolkit';
import countries, { LocalizedCountryNames } from 'i18n-iso-countries';
import { NavigateFunction } from 'react-router-dom';
import enLocale from 'i18n-iso-countries/langs/en.json';

countries.registerLocale(enLocale);

export const countriesList = (): string[] => {
  const countriesObj: LocalizedCountryNames<{ select: 'official' }> =
    countries.getNames('en', { select: 'official' });
  return Object.values(countriesObj);
};

export const lowerCase = (str: string): string => {
  return str.toLowerCase();
};

export const firstLetterUppercase = (str: string): string => {
  const valueString = lowerCase(`${str}`);
  return `${valueString.charAt(0).toUpperCase()}${valueString
    .slice(1)
    .toLowerCase()}`;
};

export const replaceSpacesWithDash = (title: string): string => {
  const lowercaseTitle: string = lowerCase(`${title}`);
  return lowercaseTitle.replace(/\/| /g, '-'); // replace / and space with -
};

export const replaceDashWithSpaces = (title: string): string => {
  const lowercaseTitle: string = lowerCase(`${title}`);
  return lowercaseTitle.replace(/-|\/| /g, ' '); // replace - / and space with -
};

export const replaceAmpersandWithSpace = (title: string): string => {
  return title.replace(/&/g, '');
};

export const replaceAmpersandAndDashWithSpace = (title: string): string => {
  const titleWithoutDash = replaceDashWithSpaces(title);
  return titleWithoutDash.replace(/&| /g, ' ');
};

export const categories = (): string[] => {
  return [
    'Mathematics ',
    'English',
    'Computer Science',
    'Religious Education',
    'Science',
    'Geography',
    'Drama',
    'Economics',
    'IT',
  ];
};
