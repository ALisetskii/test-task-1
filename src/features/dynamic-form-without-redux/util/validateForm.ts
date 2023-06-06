import { FormFields, FormValues } from '@shared/types';

/**
 * Валидация значения по типу инпута
 * @param {FormFields} fields поля формы
 * @param {FormValues} values значения формы
 * @returns {boolean} маркер валидности формы
 */
export const validateForm = (fields:FormFields, values: FormValues): boolean => {

  if (Object.keys(values).length === 0) {
    return false;
  } else {
    const invalidRequiredValues = fields.filter(
      (field) => {
        return field.required === true && values[field.id].isValid === false;
      },
    );

    return invalidRequiredValues.length === 0;
  }
};
