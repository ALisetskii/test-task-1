import React from 'react';

import { FormValue } from '@shared/types';

/** Пропсы компонента */
type Props = {
  /** Поля формы */
  fieldId: string;
  /** Значение поля формы */
  formValue: FormValue;
  /** функция при изменении значений таблицы */
  onChange: (id: string, value: string, type: string) => void;
};

export const InputField: React.FC<Props> = ({
  fieldId,
  formValue,
  onChange,
}) => {
  const { required, value, type } = formValue;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(fieldId, event.target.value, type);
  };

  return (
    <input
      onChange={handleChange}
      className={`${type} form-input`}
      required={required}
      key={fieldId + 'Input'}
      id={fieldId}
      type={type}
      value={value}
      placeholder={'Enter Value'}
    />
  );
};
