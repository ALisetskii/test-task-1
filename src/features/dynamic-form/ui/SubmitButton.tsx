import React, { useEffect } from 'react';

import { useActions } from '@shared/lib/use-it';

import { dynamicFormModel } from '@features/dynamic-form';

export const SubmitButton: React.FC = () => {
  const values = dynamicFormModel.selectors.values();
  const { setIsFormValid } = useActions(dynamicFormModel.actions);
  const isFormValid = dynamicFormModel.selectors.isFormValid();

  useEffect(() => {
    const inputs = document.querySelectorAll('input');
    setIsFormValid(
      !(
        Array.from(inputs).filter((input) => input.checkValidity() === false)
          .length > 0
      ),
    );
  }, [values]);

  return (
    <button
      className={'submit-button'}
      disabled={!isFormValid}
      type="submit"
      onClick={() => {
        console.log('values', values);
      }}
    >
      Submit
    </button>
  );
};
