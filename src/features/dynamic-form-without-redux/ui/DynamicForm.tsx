import React from 'react';

import { FormField, FormValues } from '@shared/types';

import { HeaderImage } from './HeaderImage';
import { InputField } from './InputField';
import { FieldLabel } from './FieldLabel';
import './DynamicFrom.scss';

/** Пропсы компонента */
type Props = {
  /** поля формы */
  fields: FormField[];
  /** значения полей формы */
  values: FormValues;
  /** функция при изменении значений таблицы */
  onInputChange: (id: string, value: string, type: string) => void;
};

export const DynamicForm: React.FC<Props> = ({
  fields,
  values,
  onInputChange,
}) => {
  return (
    <form name={'DynamicForm'}>
      <HeaderImage />
      {Object.values(values).length > 0 ? (
        fields.map((field) => {
          return (
            <div className={'form-field'} key={field.id}>
              {field.label ? (
                <FieldLabel fieldId={field.id} labelText={field.label} />
              ) : null}
              <InputField
                fieldId={field.id}
                formValue={values[field.id]}
                onChange={onInputChange}
              />
            </div>
          );
        })
      ) : (
        <div className={'no-fields'}>no fields</div>
      )}
    </form>
  );
};
