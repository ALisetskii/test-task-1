import React from 'react';

import { useActions } from '@shared/lib/use-it';
import { FIELD_TO_INPUT_TYPES } from '@shared/constants';

import { FormField } from '@features/dynamic-form/model/types';
import { dynamicFormModel } from '@features/dynamic-form';

/** Пропсы компонента */
type InputFieldProps = {
  /** Поля формы */
  field: FormField;
  /** Значение поля формы */
  value: string;
};

export const InputField: React.FC<InputFieldProps> = ({ field, value }) => {
  const { id, type, required } = field;

  const { setFormValues } = useActions(dynamicFormModel.actions);

  // Если была бы нужна более сложная валидация или с асинзронными запросами
  // или избавиться от useEffect в компоненте и проверять валидность формы при каждом изменении и записывая в стор
  // const { onInputChange } = useActions(changeInputModel.actions);
  /**
   * Обработчик редактирования значения поля
   * @param {React.ChangeEvent<HTMLInputElement>} event событие
   * @returns {void}
   */
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    // onInputChange({
    setFormValues({
      [id]: event.target.value,
    });
  };

  return (
    <input
      onChange={handleInputChange}
      className={`${type} form-input`}
      required={required}
      key={id + 'Input'}
      id={id}
      type={FIELD_TO_INPUT_TYPES[type]}
      value={value}
      placeholder={'Enter Value'}
    />
  );
};
