import { emailRegExp } from '@shared/constants';
import { InputTypes } from '@shared/types';

/**
 * Валидация емайл по регулярному выражению
 * @param {string} value текст
 * @returns {boolean} маркер валидности
 */
const validateEmail = (value: string) => {
  return emailRegExp.test(value);
};

/**
 * Валидация значения по типу инпута
 * @param {string} value значение
 * @param {string} type тип инпута
 * @returns {boolean} маркер валидности
 */
export const validateFormValue = (value: string, type: string): boolean => {

  switch (type) {
    case InputTypes.Text:
    case InputTypes.Password:
      return value.length > 0;
    case InputTypes.Email:
      return validateEmail(value);
    default:
      return false;
  }
};
