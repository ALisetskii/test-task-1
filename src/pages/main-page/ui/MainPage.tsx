import React, { useEffect, useState } from 'react';

import { FIELDS_EXAMPLE } from '@shared/constants';
import { FormValues } from '@shared/types';
import {
  validateFormValue,
  validateForm,
  createValuesFromFields,
} from '@shared/util';

import {
  DynamicForm,
  SubmitButton,
} from '@features/dynamic-form-without-redux';

import './MainPage.scss';

export const MainPage: React.FC = () => {
  const fields = FIELDS_EXAMPLE;

  const [formValues, setFormValues] = useState<FormValues>({});
  const [isFormValid, setisFormValid] = useState<boolean>(false);

  /**
   * Обработчик редактирования значения поля
   * @param {string} id ид инпута
   * @param {string} value значение
   * @param {string} type тип инпута
   * @returns {void}
   */
  const onInputChange = (id: string, value: string, type: string): void => {
    setFormValues({
      ...formValues,
      [id]: {
        ...formValues[id],
        value: value,
        isValid: validateFormValue(value, type),
      },
    });
  };

  /** Создание объекта со значениями по объекту с полями */

  useEffect(() => {
    const initialValues = createValuesFromFields(fields);
    setFormValues(initialValues);
  }, [fields]);

  /** Проверка валидности формы */
  useEffect(() => {
    setisFormValid(validateForm(formValues));
  }, [formValues]);

  return (
    <div className={'wrapper'}>
      <div className={'form-container'}>
        <DynamicForm
          fields={fields}
          values={formValues}
          onInputChange={onInputChange}
        />
        <SubmitButton values={formValues} isFormValid={isFormValid} />
      </div>
    </div>
  );
};
