import { config } from './config';
import {
 reducer, actions, selectors
} from './model';

export * from './ui';

/** Модель DynamicForm */
export const dynamicFormModel = {
  reducer,
  actions,
  selectors,
  config,
};
