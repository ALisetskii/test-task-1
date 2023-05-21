import { config } from './config';
import { reducer, actions, selectors } from './model';

export * from './ui';
export * from './model/types';

/** Модель DynamicForm */
export const dynamicFormModel = {
  reducer,
  actions,
  selectors,
  config,
};
