import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from '@src/app';

export const render = (): void => {
  const container = document.getElementById('app');
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const root = createRoot(container!);
  root.render(<App />);
};

window.addEventListener('load', render);
