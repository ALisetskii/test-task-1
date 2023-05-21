import { createActionCreatorWithPrefix } from '@shared/lib/store';

import { FormValues } from '@shared/types';

import { config } from '../config';

const createAction = createActionCreatorWithPrefix(config.modelName);

/** Экшн для процесса изменения инпута */
const onInputChange = createAction<FormValues>('onInputChange');

export const actions = {
  onInputChange,
};
