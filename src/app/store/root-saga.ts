import { SagaIterator } from 'redux-saga';
import { call, all, fork } from 'redux-saga/effects';

import { changeInputModel } from '@src/processes/changeInput';

/**
 * Главная сага - точка входа
 *
 * @returns {void}
 */
export function* rootSaga(): SagaIterator {
  // eslint-disable-next-line no-console
  yield call(console.log, 'Root Saga Runner...!');

  yield all(
    [
      /** shared */

      /** entities */

      /** features */

      /** pages */

      /** proccesses */
      changeInputModel.sagas.watcher,
    ].map(fork),
  );
}
