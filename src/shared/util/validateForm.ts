import { FormValues } from '@shared/types';

/**
 * Валидация значения по типу инпута
 * @param {FormValues} formValues значение
 * @returns {boolean} маркер валидности формы
 */
export const validateForm = (formValues: FormValues): boolean => {
  const invalidRequiredValues = Object.values(formValues).filter(
    (formValue) => {
      return formValue.required === true && formValue.isValid === false;
    },
  );

  if (invalidRequiredValues.length === 0) {
    return true;
  } else {
    return false;
  }
};
