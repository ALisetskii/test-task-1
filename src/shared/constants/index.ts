import { FieldToInputType, FormField } from '@shared/types';

/** Пример группы полей */
export const FIELDS_EXAMPLE: FormField[] = [
  {
    id: 'first_name',
    type: 'inputText',
    label: 'First Name',
    defaultValue: 'Some first name',
    required: true,
  },
  {
    id: 'last_name',
    type: 'inputText',
    label: 'Last Name',
  },
  {
    id: 'email',
    type: 'inputEmail',
    label: 'Email',
    required: true,
  },
  {
    id: 'password',
    type: 'inputPassword',
    label: 'Password',
    required: true,
  },
  // {
  //   id: 'someId',
  //   type: 'inputText',
  //   label: 'someLabel',
  //   required: true,
  // },
];

/** Соотаветствие типа поля типу инпута */
export const FIELD_TO_INPUT_TYPES: FieldToInputType = {
  inputText: 'text',
  inputEmail: 'email',
  inputPassword: 'password',
};

/** Регулярное выражение для валидации емайл */
export const emailRegExp = /^(\w|-|\+|\.)+@(\w|-)+\.((\w|-)+\.)*\w+$/;
