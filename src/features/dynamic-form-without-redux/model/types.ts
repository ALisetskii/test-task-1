import { FormField, FormValues } from '@shared/types';
/** Модель формы */
export type FormState = {
  fields: FormField[];
  values: FormValues;
  isFormValid: boolean;
};
