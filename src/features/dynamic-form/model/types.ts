import { FieldTypes } from '@shared/types';

/** Модель поля формы */
export type FormField = {
  /** Значение */
  id: string;
  /** Тип */
  type: FieldTypes;
  /** Лейбл */
  label: string;
  /** Значение по умолчанию */
  defaultValue?: string;
  /** Маркер обязательности */
  required?: boolean;
};

export type FormValues = {
  [key in string]: string;
};

/** Модель формы */
export type FormState = {
  fields: FormField[];
  values: FormValues;
  isFormValid: boolean;
};
