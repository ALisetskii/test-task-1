import { FieldToInputType, FieldTypes, FormFields, InputTypes } from '@shared/types';

/** Пример группы полей */
export const FIELDS_EXAMPLE: FormFields = [
  {
    id: 'first_name',
    type: FieldTypes.InputText,
    label: 'First Name',
    defaultValue: 'Some first name',
    required: true,
  },
  {
    id: 'last_name',
    type: FieldTypes.InputText,
    label: 'Last Name',
  },
  {
    id: 'email',
    type: FieldTypes.InputEmail,
    label: 'Email',
    required: true,
    defaultValue: 'qqqq@qq.q',
  },
  {
    id: 'password',
    type: FieldTypes.InputPassword,
    label: 'Password',
    required: true,
    defaultValue: 'qqq',
  },
  // {
  //   id: 'someId',
  //   type: FieldTypes.InputText,
  //   label: 'someLabel',
  //   required: true,
  // },
];

/** Соотаветствие типа поля типу инпута */
export const FIELD_TO_INPUT_TYPES: FieldToInputType = {
  [FieldTypes.InputText]: InputTypes.Text,
  [FieldTypes.InputEmail]: InputTypes.Email,
  [FieldTypes.InputPassword]: InputTypes.Password,
};

/** Регулярное выражение для валидации емайл */
export const emailRegExp = /^(\w|-|\+|\.)+@(\w|-)+\.((\w|-)+\.)*\w+$/;
