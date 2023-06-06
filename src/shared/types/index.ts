// ИСПРАВИЛ enum вместо type
/** Типы полей */
export enum FieldTypes {
  InputText = 'inputText',
  InputEmail = 'inputEmail',
  InputPassword = 'inputPassword'
}

/** Типы инпутов */
export enum InputTypes {
  Text = 'text',
  Email = 'email',
  Password = 'password'
}

/**
 * Соотаветствие типа поля типу инпута
 */
export type FieldToInputType = {
  [key in FieldTypes]: InputTypes;
};

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

export type FormFields = FormField[];

// ИСПРАВИЛ убрал required и type
/** Значение поля формы */
export type FormValue = {
  value: string;
  isValid: boolean;
};

// ИСПРАВИЛ переиспользование :FormValue
/** Значения формы */
export type FormValues = {
  [key in string]: FormValue;
};

/** Тип для вывода результата */
export type Result = {
  [key in string]: string;
};

/** Тип для изменения значений формы */
export type OnChangeValue = {
  id: string,
  value: string,
  type: InputTypes
};

/** Тип возвращаемый хуком useFormControl */
export type FormControl = {
  /** Значения полей формы */
  values: FormValues;
  /** Обработчик изменения значения */
  onChange: (onChangeValue:OnChangeValue) => void;
  /** Функция проверки валидности формы */
  checkIsFormValid: ()=> boolean
};
