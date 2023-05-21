/** Типы полей */
export type FieldTypes = 'inputText' | 'inputEmail' | 'inputPassword';
/** Типы инпутов */
export type InputTypes = 'text' | 'email' | 'password';

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

/** Модель формы */
export type FormState = {
  fields: FormField[];
  values: FormValues;
  isFormValid: boolean;
};

/**
 * Соотаветствие типа поля типу инпута
 */
export type FieldToInputType = {
  [key in FieldTypes]: InputTypes;
};

/**
 * Значения формы
 */
export type FormValues = {
  [key in string]: {
    value: string;
    required: boolean;
    type: InputTypes;
    isValid: boolean;
  };
};

/**
 * Значение поля формы
 */
export type FormValue = {
  value: string;
  required: boolean;
  type: InputTypes;
  isValid: boolean;
};

/**
 * Тип для вывода результата
 */
export type Result = {
  [key in string]: string;
};
