import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { setStoreField } from '@shared/lib/store';

import { config } from '../config';
import { FormField, FormState, FormValues } from './types';

const initialState: FormState = {
  fields: [],
  values: {},
  isFormValid: false,
};

/** Cлайс модели */
const dynamicFormSlice = createSlice({
  name: config.modelName,
  initialState,
  reducers: {
    setInitialFormFields: (
      state,
      payloadAction: PayloadAction<Partial<FormField[]>>,
    ) => {
      const { payload } = payloadAction;
      state.fields = [...payload];

      for (const el of payload) {
        state.values[el.id] = el.defaultValue ?? '';
      }
    },

    setFormValues: (state, payloadAction: PayloadAction<FormValues>) => {
      const { payload } = payloadAction;
      state.values = { ...state.values, ...payload };
    },
    setIsFormValid: setStoreField('isFormValid'),
  },
});

export const { reducer } = dynamicFormSlice;
export const actions = { ...dynamicFormSlice.actions };
