/** Конфигурация приложения */
export const globalConfig = {
  defaultDelay: 2000,
  routes: {
    mainPage: () => '/',
  },
  environment: process.env.NODE_ENV,
} as const;
