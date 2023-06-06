import React from 'react';

/** Пропсы компонента */
type Props = {
  /** Id поля формы */
  fieldId: string;
  /** Текст лейбла */
  labelText: string;
};

export const FieldLabel: React.FC<Props> = ({ fieldId, labelText }) => {
  return (
    <label className={'field-label'} key={fieldId + 'Label'} htmlFor={fieldId}>
      {labelText}
    </label>
  );
};

export const MemoizedFieldLabel = React.memo(FieldLabel);
