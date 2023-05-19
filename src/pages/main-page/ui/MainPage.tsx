import React from 'react';

import { useActions } from '@shared/lib/use-it';
import { FIELDS_EXAMPLE } from '@shared/constants';

import {
  DynamicForm,
  dynamicFormModel,
  SubmitButton,
} from '@features/dynamic-form';
import { FormField } from '@features/dynamic-form/model/types';

import './MainPage.scss';

export const MainPage: React.FC = () => {
  const fields = FIELDS_EXAMPLE;
  const { setFormFields } = useActions(dynamicFormModel.actions);
  setFormFields(fields as FormField[]);

  return (
    <div className={'wrapper'}>
      <div className={'form-container'}>
        <DynamicForm />
        <SubmitButton />
      </div>
    </div>
  );
};
