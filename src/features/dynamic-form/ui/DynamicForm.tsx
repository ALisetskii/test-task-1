import React from 'react';

import { selectors } from '../model';
import { HeaderImage } from './HeaderImage';
import { InputField } from './InputField';
import './DynamicFrom.scss';

export const DynamicForm: React.FC = () => {
  const fields = selectors.fields();
  const values = selectors.values();

  return (
    <form name={'DynamicForm'}>
      <HeaderImage />
      {fields.length > 0 ? (
        Object.values(fields).map((field) => {
          return (
            <div className={'form-field'} key={field.id}>
              {field.label ? (
                <label key={field.id + 'Label'} htmlFor={field.id}>
                  {field.label}
                </label>
              ) : (
                <div>no label</div>
              )}
              <InputField field={field} value={values[field.id]} />
            </div>
          );
        })
      ) : (
        <div className={'no-fields'}>no fields</div>
      )}
    </form>
  );
};
