import { SagaIterator } from 'redux-saga';
import { all, put, takeEvery } from 'redux-saga/effects';

import { composeSaga, passActionPayload } from '@shared/lib/store';

import { dynamicFormModel } from '@features/dynamic-form';
import { FormValues } from '@features/dynamic-form/model/types';

import { actions } from './ducks';

/**
 * Процесс изменения полей формы
 * @param {FormValues} payload значения формы
 * @returns {SagaIterator} SagaIterator
 */
function* changeInputSaga(payload: FormValues): SagaIterator {
  // Если была бы нужна более сложная валидация или с асинзронными запросами
  // или избавиться от useEffect в компоненте и проверять валидность с помощью js
  yield put(dynamicFormModel.actions.setFormValues(payload));
}

/**
 * Вотчер
 * @returns {void}
 */
function* watcher(): SagaIterator {
  yield all([
    takeEvery(
      actions.onInputChange,
      composeSaga(changeInputSaga, [passActionPayload]),
    ),
  ]);
}

export const sagas = {
  watcher,
};
