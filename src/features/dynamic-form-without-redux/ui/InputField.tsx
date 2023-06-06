import React from 'react';

import { InputTypes, OnChangeValue } from '@shared/types';

/** Пропсы компонента */
type Props = {
  /** Поля формы */
  fieldId: string;
  /** Значение поля формы */
  value: string;
  /** Тип инпута */
  type:InputTypes;
  /** функция при изменении значений таблицы */
  onChange: (value: OnChangeValue) => void;
};

export const InputField: React.FC<Props> = ({
  fieldId,
  value,
  type,
  onChange,
}) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ id:fieldId, value:event.target.value, type });
  };

  return (
    <input
      onChange={handleChange}
      className={`${type} form-input`}
      key={fieldId + 'Input'}
      id={fieldId}
      value={value}
      placeholder={'Enter Value'}
    />
  );
};
