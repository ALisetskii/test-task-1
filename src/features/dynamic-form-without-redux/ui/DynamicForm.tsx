import React from 'react';

import { FormFields, FormValues, OnChangeValue } from '@shared/types';
import { FIELD_TO_INPUT_TYPES } from '@shared/constants';

import { HeaderImage } from './HeaderImage';
import { InputField } from './InputField';
import { MemoizedFieldLabel } from './FieldLabel';
import './DynamicFrom.scss';

/** Пропсы компонента */
type Props = {
  /** поля формы */
  fields: FormFields;
  /** значения полей формы */
  values: FormValues;
  /** функция при изменении значений таблицы */
  onChange: (value: OnChangeValue) => void;
};

export const DynamicForm : React.FC<Props> = ({ fields,  values, onChange }) => {
  return (
    <form name={'DynamicForm'}>
      <HeaderImage />
      {Object.values(values).length > 0 ? (
        fields.map((field) => {
          return (
            <div className={'form-field'} key={field.id}>
              {field.label ? (
                // ИСПРАВИЛ react.memo для лейбла
                <MemoizedFieldLabel fieldId={field.id} labelText={field.label} />
              ) : null}
              <InputField
                fieldId={field.id}
                value={values[field.id].value}
                type={FIELD_TO_INPUT_TYPES[field.type]}
                onChange={onChange}
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

export const MemoizedDynamicForm = React.memo(DynamicForm);
