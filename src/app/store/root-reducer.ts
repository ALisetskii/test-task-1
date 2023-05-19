import { combineReducers } from '@reduxjs/toolkit';

import { dynamicFormModel } from '@features/dynamic-form';

const rootReducer = combineReducers({
  /** shared */

  /** entities */

  /** features */
  [dynamicFormModel.config.modelName]: dynamicFormModel.reducer,

  /** pages */

  /** processes */
});

export default rootReducer;
