import React from 'react';

import { FormValues, Result } from '@shared/types';

import './SubmitButton.scss';

/** Пропсы компонента */
type Props = {
  /** значения полей формы */
  values: FormValues;
  isFormValid: boolean;
};

export const SubmitButton: React.FC<Props> = ({ values, isFormValid }) => {
  const handleClick = () => {
    const result: Result = {};
    for (const key in values) {
      result[key] = values[key].value;
    }
    console.log(result);
  };

  return (
    <button
      className={'submit-button'}
      disabled={!isFormValid}
      type="submit"
      onClick={handleClick}
    >
      Submit
    </button>
  );
};
