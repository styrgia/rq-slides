## NextJS Starter

Стартовый шаблон для быстрого создания проектов на Next.js

## 🚀 Как развернуть проект

```
npx create-next-app -e https://github.com/webpractik/nextjs-starter
```

## Документация
- [Базовая настройка](docs/settings.md)
- [Структура проекта](docs/project-structure.md)
- [Работа с backend API](docs/api.md)
- [Настройка Sentry](docs/sentry.md)
- [Настройка Google Analytics](docs/gtag.md)
- [Настройка кастомного прокси сервера](docs/custom-proxy.md)

## CI / CD
- **NODEJS >= 16, NPM >= 8**
- **Порт 3000**
- **Healthcheck**: /api/healthcheck
- Установка модулей:  ```npm ci --silent --ignore-scripts``` 
- Запуск билда: ```npm run build
- Запуск dev сборки: ```npm run dev```
- Запуск прод сборки: ```npm run prod``` 
- Режим proxy (dev): ```npm run proxy:dev```
- Режим proxy (prod): ```npm run proxy:prod```

### ENV переменные
Глобальные переменные:
```
FRONT_HOST - хост в локальной сети kubernetes 
FRONT_PORT - порт
BACK_INTERNAL_URL - полный путь для обращения к backend приложению (http://back:80)

HTTP_AUTH_LOGIN=demo
HTTP_AUTH_PASS=demo
```
Переменные, которые должны быть доступны на момент сборки:
```
NEXT_PUBLIC_APP_ENV - LOCAL | WORK | RC | PROD
NEXT_PUBLIC_FRONT_URL - публичный урл front приложения
NEXT_PUBLIC_BACK_URL - публичный урл back приложения (опционален)
NEXT_PUBLIC_SENTRY_DSN - DSN для доступа к Sentry
```

## Features
- Typescript
- Sass
- Mobx
- ESLint
- Prettier
- Husky
- Commitizen
- Lint-staged
- Абсолютные импорты
- Proxy server
- Jest
- Storybook
- Sentry
- Bundle analyzer
- Google tag manager
- API Codegen

## Packages
- axios
- lodash
- react-use
- next-seo
- react-error-boundary
- normalize.css
- nanoid
- clsx
