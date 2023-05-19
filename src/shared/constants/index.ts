import { FieldToInputType } from '@shared/types';

/** Контрольные точки ширины экрана устройств пользователей */
export const WIDTH_BREAKPOINTS = {
  DESKTOP_WIDTH: 1024,
  MOBILE_WIDTH: 576,
  TABLET_WIDTH: 768,
};

/** Пример группы полей */
export const FIELDS_EXAMPLE = [
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
  //   id: 'password',
  //   type: 'inputPassword',
  //   label: 'Password',
  //   required: true,
  // },
];

/**
 * Соотаветствие типа поля типу инпута
 */
export const FIELD_TO_INPUT_TYPES: FieldToInputType = {
  inputText: 'text',
  inputEmail: 'email',
  inputPassword: 'password',
};
