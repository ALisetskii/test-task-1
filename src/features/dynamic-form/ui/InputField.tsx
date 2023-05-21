import React from 'react';

import { useActions } from '@shared/lib/use-it';
import { FIELD_TO_INPUT_TYPES } from '@shared/constants';

import { FormField, actions } from '../model';

/** Пропсы компонента */
type Props = {
  /** Поля формы */
  field: FormField;
  /** Значение поля формы */
  value: string;
};

export const InputField: React.FC<Props> = ({ field, value }) => {
  const { id, type, required } = field;

  const { setFormValues } = useActions(actions);

  // Если была бы нужна более сложная валидация или с асинхронными запросами
  // или избавиться от useEffect в компоненте и проверять валидность с помощью js
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
