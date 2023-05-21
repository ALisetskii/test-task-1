import { FormField, FormValues } from '@shared/types';
import { FIELD_TO_INPUT_TYPES } from '@shared/constants';

/**
 * Создание объекта со значениями по объекту с полями
 * @param {FormField} fields объект с полями формы
 * @returns {FormValues} объект со значениями для формы
 */
export const createValuesFromFields = (fields: FormField[]): FormValues => {
  const formValues: FormValues = {};
  for (const field of fields) {
    const { id, type, required, defaultValue } = field;
    formValues[id] = {
      value: defaultValue ?? '',
      required: required ?? false,
      type: FIELD_TO_INPUT_TYPES[type],
      isValid: defaultValue ? true : false,
    };
  }
  return formValues;
};
