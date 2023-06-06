import React from 'react';

import './SubmitButton.scss';

/** Пропсы компонента */
type Props = {
  /** функция при нажатии */
  handleClick: ()=> void;
  /** маркер валидности формы */
  isFormValid: boolean;
};

export const SubmitButton: React.FC<Props> = ({ handleClick, isFormValid }) => {

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
