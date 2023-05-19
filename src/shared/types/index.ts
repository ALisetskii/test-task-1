export type FieldTypes = 'inputText' | 'inputEmail' | 'inputPassword';
export type InputTypes = 'text' | 'email' | 'password';

export type FieldToInputType = {
  [key in FieldTypes]: InputTypes;
};

export type ChangeInputValue = {
  [key in string]: string;
};
