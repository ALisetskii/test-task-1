import { FormFields, FormValues } from '@shared/types';
import { FIELD_TO_INPUT_TYPES } from '@shared/constants';
import { validateFormValue } from '@features/dynamic-form-without-redux/util/validateFormValue';

/**
 * Создание объекта со значениями по объекту с полями
 * @param {FormField} fields объект с полями формы
 * @returns {FormValues} объект со значениями для формы
 */
export const createValuesFromFields = (fields: FormFields): FormValues => {
  return  fields.reduce<FormValues>((acc, field)=>{
    const { id, defaultValue } = field;
    const type = FIELD_TO_INPUT_TYPES[field.type];
    return { ...acc,
      [id]:{
        value: defaultValue ?? '',
        isValid: defaultValue ? validateFormValue(defaultValue, type) : false,
      }
    };
    }, {});

};
