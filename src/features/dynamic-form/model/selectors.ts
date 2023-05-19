import {
  createHookSelector,
  createModelFieldSelector,
} from '@shared/lib/store';

import { FormState } from '@features/dynamic-form/model/types';

import { config } from '../config';

const fieldSelector = createModelFieldSelector<FormState>(config.modelName);

/** Селектор номера текущей страницы */
const fieldsSelector = fieldSelector('fields');
const valuesSelector = fieldSelector('values');
const isFormValidSelector = fieldSelector('isFormValid');

export const selectors = {
  fields: createHookSelector(fieldsSelector),
  values: createHookSelector(valuesSelector),
  isFormValid: createHookSelector(isFormValidSelector),
};
