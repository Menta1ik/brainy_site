# BrainySoftware — Corporate Website

Corporate website for [BrainySoftware](https://brainysoft.biz), a custom software development company based in Tallinn, Estonia (est. 2009).

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| CMS | Sanity v5 (headless) |
| Email | Resend |
| Validation | Zod |
| Font | JetBrains Mono |

---

## Performance & Standards

Проект оптимизирован согласно строгим правилам производительности и дизайна:

- **GPU Acceleration:** Вместо `transition-all` используются специфичные транзишны (`transition-colors`, `transition-transform`, `transition-opacity`), что исключает лишние пересчеты макета (layout thrashing).
- **Zero Inline Styles:** Все стили, включая сложные градиенты и анимации, реализованы через Tailwind CSS (utility classes + arbitrary values), что обеспечивает чистоту HTML и предсказуемость каскада.
- **Image Optimization:** Использование `next/image` для всех визуальных активов гарантирует автоматический ресайз, ленивую загрузку и современные форматы (WebP/Avif).
- **Blink Animation:** Кастомные анимации (например, курсор в терминале) интегрированы в дизайн-систему через CSS-переменные в `globals.css`.

---

## Что за что отвечает

### Контент сайта — где редактировать

| Что | Где редактировать | Требует деплоя? |
|---|---|---|
| Тексты на главной (Hero, About) | Sanity Studio → Hero Section, About Section | Нет |
| Услуги (Services) | Sanity Studio → Service | Нет |
| Проекты | Sanity Studio → Project | Нет |
| Отрасли (Industries) | Sanity Studio → Industry | Нет |
| Команда | Sanity Studio → Team Member | Нет |
| Контактные данные | Sanity Studio → Contact Information | Нет |
| Логотип | Sanity Studio → Site Settings → Logo | Нет |
| Навигационное меню | `src/lib/constants.ts` → `NAV_ITEMS` | **Да** |
| Ссылки в футере | `src/lib/constants.ts` → `SITE_CONFIG` | **Да** |
| SEO мета-теги (title, description) | Каждый `src/app/**/page.tsx` → `export const metadata` | **Да** |
| Цвета, шрифты, стили | `src/app/globals.css`, `tailwind.config` | **Да** |

### Sanity Studio

Доступна по адресу `/studio` на любом окружении:
- Локально: `http://localhost:3000/studio`
- Прод: `https://brainysoft.biz/studio`

**Типы документов в Sanity:**

| Тип | Назначение |
|---|---|
| `heroSection` | Заголовок и подзаголовок для каждой страницы. Поле `page` указывает к какой странице относится (`home`, `services`, `contacts`, `team`, `why-choose-us`) |
| `aboutSection` | Секция "О компании" на главной: заголовок, текст, статистика |
| `service` | Услуги компании. Поле `order` управляет порядком отображения. Поле `iconName` — название иконки (globe, smartphone, check-circle, lightbulb, palette, users) |
| `project` | Портфолио проектов. `featured: true` — проект показывается на главной |
| `industry` | Отрасли на главной и в портфолио |
| `teamMember` | Карточки сотрудников |
| `contactInfo` | Email, телефон, адрес, часы работы |
| `siteSettings` | Логотип, название сайта, соцсети |

### Структура файлов

```
src/
├── app/
│   ├── page.tsx                   # Главная страница
│   ├── layout.tsx                 # Корневой layout (Header, Footer, метаданные)
│   ├── services/page.tsx          # Страница услуг
│   ├── contacts/page.tsx          # Страница контактов
│   ├── company/
│   │   ├── team/page.tsx          # Страница команды
│   │   └── why-choose-us/page.tsx # Страница "Почему мы"
│   ├── api/contact/route.ts       # API для формы обратной связи (Resend)
│   ├── studio/[[...tool]]/        # Встроенная Sanity Studio
│   ├── sitemap.ts                 # Автогенерация sitemap.xml
│   └── robots.ts                  # robots.txt
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx             # Шапка сайта с навигацией
│   │   ├── Footer.tsx             # Подвал сайта
│   │   └── MobileMenu.tsx         # Мобильное меню
│   ├── sections/
│   │   ├── HeroSection.tsx        # Главный баннер (главная страница)
│   │   ├── AboutSection.tsx       # Секция "О компании"
│   │   ├── ServicesCards.tsx      # 3 карточки услуг на главной
│   │   ├── ProjectsGallery.tsx    # Галерея проектов
│   │   ├── IndustriesSection.tsx  # Секция отраслей
│   │   ├── CTASection.tsx         # Призыв к действию (хардкод)
│   │   ├── PageHero.tsx           # Баннер для внутренних страниц
│   │   └── ContactForm.tsx        # Форма обратной связи
│   ├── seo/
│   │   └── JsonLd.tsx             # Компонент для JSON-LD разметки
│   └── ui/
│       ├── Button.tsx             # Кнопка
│       ├── Card.tsx               # Карточка
│       ├── Container.tsx          # Обёртка с max-width
│       ├── Input.tsx              # Поле ввода
│       └── SectionHeading.tsx     # Заголовок секции
│
├── lib/
│   ├── sanity/
│   │   ├── client.ts              # Sanity клиент (next-sanity)
│   │   ├── fetchers.ts            # Функции получения данных из Sanity (с фоллбеками)
│   │   ├── queries.ts             # GROQ-запросы
│   │   ├── types.ts               # TypeScript типы для Sanity документов
│   │   └── image.ts               # Хелпер для URL изображений из Sanity CDN
│   ├── icons.tsx                  # SVG иконки для услуг (getServiceIcon)
│   ├── constants.ts               # SITE_CONFIG, NAV_ITEMS (меню), SERVICES, INDUSTRIES — хардкод
│   ├── schemas.ts                 # Zod схемы для валидации форм
│   └── utils.ts                   # cn() — утилита для объединения CSS классов
│
sanity/
├── schemas/
│   ├── index.ts                   # Регистрация всех схем
│   ├── heroSection.ts             # Схема для Hero секций
│   ├── aboutSection.ts            # Схема для About секции
│   ├── service.ts                 # Схема для услуг
│   ├── project.ts                 # Схема для проектов
│   ├── industry.ts                # Схема для отраслей
│   ├── teamMember.ts              # Схема для членов команды
│   ├── contactInfo.ts             # Схема для контактных данных
│   └── siteSettings.ts            # Схема для настроек сайта
├── sanity.config.ts               # Конфигурация Sanity Studio
└── sanity.cli.ts                  # CLI конфигурация
│
scripts/
└── seed-sanity.ts                 # Скрипт заполнения Sanity начальными данными
```

### Как работает подключение Sanity к страницам

Каждая страница — это `async` Server Component. При загрузке она вызывает функции из `src/lib/sanity/fetchers.ts`, которые получают данные из Sanity. Если Sanity недоступен или документ не найден — используется фоллбек из хардкода.

```
Страница (page.tsx)
  → fetchers.ts (getServices, getHeroSection, ...)
    → client.ts (Sanity API запрос)
      → Если данные есть → отображает данные из Sanity
      → Если нет → использует хардкод из constants.ts
```

---

## Локальная разработка

### Требования

- Node.js 20+
- Аккаунт Sanity с project ID `kaqv3c4b`

### Переменные окружения

Создайте `.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=kaqv3c4b
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your_write_token
RESEND_API_KEY=your_resend_key
CONTACT_EMAIL=your@email.com
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

`SANITY_API_TOKEN` нужен только для seed-скрипта. Получить в Sanity Dashboard → Settings → API → Tokens (права Editor).

### Запуск

```bash
npm install
npm run dev
```

Сайт: `http://localhost:3000`
Sanity Studio: `http://localhost:3000/studio`

### Заполнение Sanity начальными данными

```bash
npm run seed
```

Создаёт в Sanity все базовые документы: услуги, проекты, отрасли, команду, hero-секции, контакты.

---

## Деплой (Vercel)

### Переменные окружения на Vercel

В Vercel Dashboard → Settings → Environment Variables добавить:

```
NEXT_PUBLIC_SANITY_PROJECT_ID  = kaqv3c4b
NEXT_PUBLIC_SANITY_DATASET     = production
NEXT_PUBLIC_SANITY_API_VERSION = 2024-01-01
NEXT_PUBLIC_SITE_URL           = https://brainysoft.biz
RESEND_API_KEY                 = ваш ключ
CONTACT_EMAIL                  = почта для получения заявок
```

После добавления переменных — нажать Redeploy.

---

## SEO

- JSON-LD разметка (Organization, LocalBusiness, Service, Person)
- Динамический sitemap и robots.txt
- Open Graph и Twitter Card теги
- `llms.txt` для AI-краулеров

---

## Скрипты

| Команда | Описание |
|---|---|
| `npm run dev` | Запуск dev-сервера |
| `npm run build` | Production сборка |
| `npm run start` | Запуск production-сервера |
| `npm run lint` | Проверка ESLint |
| `npm run seed` | Заполнение Sanity начальными данными |

---

## License

Private. All rights reserved.
