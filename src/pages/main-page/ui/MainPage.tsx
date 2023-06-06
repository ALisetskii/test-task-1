import React, { useMemo } from 'react';

import { FIELDS_EXAMPLE } from '@shared/constants';
import { Result } from '@shared/types';

import {
  DynamicForm,
  SubmitButton,
  useFormControl
} from '@features/dynamic-form-without-redux';

import './MainPage.scss';


export const MainPage: React.FC = () => {
  const fields = FIELDS_EXAMPLE;

  const { values, onChange, checkIsFormValid } = useFormControl(fields);

  const isFormValid = useMemo<boolean>(()=>{
    return checkIsFormValid();
  }, [values]);

  const handleClick = () => {
    // Исправил на reduce
    const result: Result = Object.keys(values).reduce((acc, key)=>{
      return { ...acc, [key]: values[key] };
    }, {});

    console.log(result);
  };

  return (
    <div className={'wrapper'}>
      <div className={'form-container'}>
        <DynamicForm
          fields={fields}
          values={values}
          onChange={onChange}
        />
        <SubmitButton handleClick={handleClick} isFormValid={isFormValid} />
      </div>
    </div>
  );
};
