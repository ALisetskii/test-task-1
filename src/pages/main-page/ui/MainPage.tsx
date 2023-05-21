import React from 'react';

import { FIELDS_EXAMPLE } from '@shared/constants';
import { useActions } from '@shared/lib/use-it';

import {
  DynamicForm,
  dynamicFormModel,
  SubmitButton,
} from '@features/dynamic-form';

import './MainPage.scss';

export const MainPage: React.FC = () => {
  const initialFields = FIELDS_EXAMPLE;
  const { setInitialFormFields } = useActions(dynamicFormModel.actions);
  setInitialFormFields(initialFields);

  return (
    <div className={'wrapper'}>
      <div className={'form-container'}>
        <DynamicForm />
        <SubmitButton />
      </div>
    </div>
  );
};
