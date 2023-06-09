import { configureStore as confStore, EnhancedStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { globalConfig } from '@shared/config';

import rootReducer from './root-reducer';
import { rootSaga } from './root-saga';

const configureStore = (
  preloadedState: unknown = {},
): EnhancedStore => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];
  const store = confStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState,
    middleware
  });

  sagaMiddleware.run(rootSaga);

  if (globalConfig.environment !== 'production' && module.hot) {
    module.hot.accept('./root-reducer', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
};

export default configureStore;

export type RootState = ReturnType<typeof rootReducer>;
