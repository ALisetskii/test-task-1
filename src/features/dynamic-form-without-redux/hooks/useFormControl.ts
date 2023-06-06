import { useCallback, useEffect, useState } from 'react';

import { FormControl, FormFields, FormValues, OnChangeValue } from '@shared/types';

import { createValuesFromFields, validateForm, validateFormValue } from '../util';

/**
 * Хук управления формой
 * @param {FormFields} fields - поля формы
 * @returns {FormControl} управление формой
 */
export const useFormControl = (
  fields: FormFields,
): FormControl => {

  const [values, setFormValues] = useState<FormValues>({});

  useEffect(() => {
    const initialValues = createValuesFromFields(fields);
    setFormValues(initialValues);
  }, [fields]);

  const onChange = useCallback(
    ({ id, value, type }:OnChangeValue)=> {
      setFormValues({
        ...values,
        [id]: {
          ...values[id],
          value: value,
          isValid: validateFormValue(value, type),
        },
      });
    }, [values]
);

  const checkIsFormValid = ():boolean => validateForm(fields, values);

  return {
    values,
    onChange,
    checkIsFormValid
  };
};
