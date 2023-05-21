import { emailRegExp } from '@shared/constants';

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
    case 'text':
    case 'password':
      if (value.length > 0) {
        return true;
      } else {
        return false;
      }
      break;
    case 'email':
      return validateEmail(value);
      break;
    default:
      return false;
      break;
  }
};
