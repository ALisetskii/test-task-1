# test-task1

Репозиторий проекта: [GitLab](https://github.com/ALisetskii/test-task-1)

- [Описание](#Описание)
- [Технологии проекта](#Технологии-проекта)
- [Разработка](#Разработка)
- [Контакты](#Контакты)

Тестовое задание 

Проект реализует подход feature-sliced.

### Технологии проекта

- [TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [React](https://ru.reactjs.org/)
- [Redux](https://redux.js.org/)
- [@reduxjs/toolkit](https://redux-toolkit.js.org/)
- [Redux-saga](https://redux-saga.js.org/)
- [SCSS](https://sass-lang.com/)

### Кодстайл

За основу взят [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript#airbnb-javascript-style-guide-).


### Разработка

- [Запуск проекта](#Запуск-проекта)

### Запуск проекта

Установка зависимостей
```javascript
npm i
```

Запуск дев сервера
```javascript
npm run start
```

Проект запускается на
```javascript
http://localhost:3001/
```


### NPM скрипты

| Скрипт                     | Описание                                                                                            |
|:---------------------------|-----------------------------------------------------------------------------------------------------|
| npm run start              | запуск проекта на http://localhost:3001/                                                            |
| npm run build              | сборка проекта с настройками для прода, не будет выполнено, если не пройдёт проверка `npm run lint` |
| npm run develop            | запуск webpack-dev-server                                                                           |
| npm run lint               | проверка кода проекта на ошибки eslint                                                              |
| npm run test               | запуск тестов                                                                                       |
| npm run clean              | очистка папки dist                                                                                  |
| npm run check              | проверить линтером и скомпилировать typescript                                                      |
| npm run checkTypes         | скомпилировать typescript                                                                           |


### Контакты


- Лисецкий Александр  (aleksandrlisetckii@gmail.com)