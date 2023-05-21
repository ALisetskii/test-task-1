export type FieldTypes = 'inputText' | 'inputEmail' | 'inputPassword';
export type InputTypes = 'text' | 'email' | 'password';

/**
 * Соотаветствие типа поля типу инпута
 */
export type FieldToInputType = {
  [key in FieldTypes]: InputTypes;
};

/**
 * Объект с новыми значениями полей формы
 */
export type ChangeInputValue = {
  [key in string]: string;
};
