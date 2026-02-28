# GEMINI.md — Brainysoft Site

## Stack
- Next.js 14+ App Router, TypeScript strict, Tailwind CSS
- Sanity CMS for content
- Vercel deployment

## MCP Tools
| MCP        | Tools                                      | When to use                        |
|------------|--------------------------------------------|------------------------------------|
| Playwright | browser_take_screenshot                    | Скриншоты для визуальной проверки  |
|            | browser_navigate                           | Открыть страницу в браузере        |
|            | browser_hover                              | Проверить hover-состояния          |
|            | browser_click                              | Тестировать интерактивность        |
|            | browser_resize                             | Responsive тестирование            |
|            | browser_snapshot                           | DOM snapshot для отладки           |
| Context7   | resolve-library-id                         | Найти ID библиотеки                |
|            | query-docs                                 | Получить актуальную документацию   |
| Ref        | ref_search_documentation                   | Поиск по API reference             |
|            | ref_read_url                               | Читать конкретный URL документации |

## Workflow — строго по порядку, шаги не пропускать

### Step 1 — Explore
- Прочитать задачу и референс
- Открыть текущий сайт: browser_navigate url="http://localhost:3000"
- Посмотреть homepage.png и public/ для визуального референса
- Задать ОДИН уточняющий вопрос если нужно, дождаться ответа

### Step 2 — Plan
- Получить актуальные доки: resolve-library-id для nextjs, tailwindcss, sanity → затем query-docs
- Написать: список секций, компоненты, цветовые токены, пара шрифтов
- Дождаться явного подтверждения перед написанием кода

### Step 3 — Code
- Загрузить skill frontend-design перед любым UI кодом
- Загрузить skill nextjs-components перед созданием компонентов
- При работе с Next.js App Router: resolve-library-id → query-docs
- При работе с Tailwind: resolve-library-id → query-docs
- При написании GROQ запросов: resolve-library-id для sanity → query-docs
- Для специфичных API: ref_search_documentation query="название метода"
- Для чтения конкретной страницы доков: ref_read_url url="..."

### Step 4 — Verify
- Запустить сервер если не запущен: npm run dev
- Загрузить skill screenshot-review
- Сделать скриншот: browser_take_screenshot
- Сравнить с homepage.png — список всех отличий с точными значениями px
- Проверить responsive:
  browser_resize width=375 height=812 → browser_take_screenshot
  browser_resize width=1440 height=900 → browser_take_screenshot
- Проверить интерактивные состояния:
  browser_hover selector="button"
  browser_hover selector="a"
- Минимум 2 полных раунда — исправить все отличия между раундами

### Step 5 — Audit
- Загрузить skill brand-audit перед любым коммитом
- Проверить все интерактивные состояния через browser_hover и browser_click

## Skills
Skills загружаются автоматически по контексту.
Для явной загрузки — упомяните название в промпте:

| Skill              | Когда загружать                        |
|--------------------|----------------------------------------|
| frontend-design    | Перед любым UI кодом                   |
| screenshot-review  | После каждого визуального изменения    |
| brand-audit        | Перед коммитом или деплоем             |
| nextjs-components  | При создании новых компонентов         |

## Структура проекта
- src/app/ — Next.js App Router pages
- src/components/ — reusable components
- sanity/ — CMS schemas, НЕ трогать без явной инструкции
- public/ — static assets
- homepage.png — визуальный референс главной страницы

## Управление контекстом
- Используй /clear между несвязанными задачами
- Не переносить контекст с одной страницы на другую

## Hard Rules
- NO transition-all
- NO дефолтные цвета Tailwind (blue, indigo) как основной цвет бренда
- NO изменения sanity/ схем без явной инструкции
- NO типы any в TypeScript
- NO компоненты inline в pages — только в src/components/
- Минимум 2 раунда скриншотов перед завершением
