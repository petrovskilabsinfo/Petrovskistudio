# Petrovski Studio Pro

Сайт студии Petrovski Studio Pro, созданный с использованием React, TypeScript, Vite и Tailwind CSS.

## Разработка

1. Установите зависимости:
   ```bash
   npm install
   ```

2. Запустите сервер для разработки:
   ```bash
   npm run dev
   ```

3. Откройте [http://localhost:5173](http://localhost:5173) в браузере.

## Сборка для продакшена

```bash
npm run build
```

## Деплой на Vercel

1. Установите Vercel CLI (если еще не установлен):
   ```bash
   npm install -g vercel
   ```

2. Выполните вход в Vercel:
   ```bash
   vercel login
   ```

3. Задеплойте проект:
   ```bash
   vercel --prod
   ```

Или подключите репозиторий к Vercel через веб-интерфейс:
1. Перейдите на [Vercel](https://vercel.com)
2. Импортируйте репозиторий
3. Настройки будут подхвачены автоматически из `vercel.json`
4. Нажмите Deploy

## Технологии

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Icons
- Supabase (если используется)
