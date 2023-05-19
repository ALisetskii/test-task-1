import React from 'react';
import { Provider } from 'react-redux';

import { MainPage } from '@pages/main-page';
import configureStore from '../store';

/** store приложения */
const store = configureStore();

/**
 * Приложение
 *
 * @returns {React.ReactElement} компонент
 */
export const App: React.FC = () => (
  <Provider store={store}>
        <MainPage />
  </Provider>
);
