const ru = {
  locale: 'ru',
  nav: {
    home: 'Главная',
    about: 'Обо мне',
    blog: 'Блог',
    contact: 'Контакты',
  },
  hero: {
    title: 'Vyacheslav Redkin',
    tagline: 'Backend / Platform Engineer',
    subtitle:
      'Я строю backend‑системы, API и self‑hosted платформы — те самые, которые не разваливаются от пары лишних рефрешей.<br />В основном .NET, распределённые системы, автоматизация и прагматичная инженерия (то есть “скучно — и это хорошо”).',
    cta: 'Связаться',
  },
  home: {
    metadataTitle: 'Главная — Backend/Platform Engineer (и иногда человек)',
    about: {
      title: 'Обо мне',
      items: {
        lab: 'Self‑hosted лаборатория',
        travel: 'Путешествия и заметки',
        family: 'Семья — главное',
      },
      paragraphs: [
        'Я инженер, который любит строить системы, остающиеся понятными, предсказуемыми и поддерживаемыми спустя годы после запуска — а не “работает же на моей машине”.',
        'Меня интересует полный цикл: как всё развёртывается, мониторится, бэкапится и живёт. Если что‑то ломается в 3 ночи, пусть ломается <em>вежливо</em> — с логами, метриками и понятной причиной.',
        'Мой основной стек: <strong>.NET</strong>, <strong>PostgreSQL</strong>, <strong>Docker</strong>, <strong>Kafka / RabbitMQ</strong> и <strong>Redis</strong>. На фронтенде иногда беру <strong>Nuxt 3</strong>, когда нужен аккуратный современный интерфейс.',
        'Вне кода: семья, путешествия, ночные города, фотографии и self‑hosted домашняя инфраструктура — медиасерверы, бэкапы, автоматизации и “умные” вещи, которым не нужен облачный подписочный тумблер.',
        'Я ценю независимость, open‑source и решения без vendor‑lock‑in. Простое лучше хитрого — потому что “хитрое” через полгода превращается в “зачем это здесь?”.',
      ],
    },
    experience: {
      title: 'Профессиональный опыт',
      itemTitle: 'Backend / Platform Engineer <br /> <span class="font-normal">Распределённые системы и API</span>',
      description: `Проектирование и реализация backend‑сервисов на .NET. <br />
Защищённые API (JWT + API keys) для внешних клиентов. <br />
PostgreSQL, Redis, Kafka и RabbitMQ в реальных нагрузках. <br />
Контейнеризация сервисов через Docker и Compose. <br />
Проектирование с упором на производительность, наблюдаемость и поддержку. <br />
(И постоянная борьба, чтобы “временное” не стало вечным.)`,
    },
    skills: {
      title: 'Навыки и фокус‑области',
      subtitle: 'То, что реально используется в проектах, а не в твитах.',
      items: [
        {
          title: '.NET & C#',
          description: 'Современный backend с фокусом на производительность и чистую архитектуру.',
        },
        { title: 'APIs & Security', description: 'JWT, API keys, доступы, логирование и разумные границы.' },
        { title: 'Databases', description: 'Моделирование, индексы, миграции и практическая оптимизация PostgreSQL.' },
        { title: 'Docker', description: 'Контейнерная разработка и надёжные self‑hosted окружения.' },
        { title: 'Messaging', description: 'Kafka/RabbitMQ для асинхронных и событийных сценариев.' },
        { title: 'Redis', description: 'Кэширование, стримы/сеты, пайплайны — быстрые данные там, где нужно.' },
        { title: 'System design', description: 'Отказы, масштабирование и эксплуатация (реальный мир).' },
        {
          title: 'Self‑hosting',
          description: 'Домашняя лаборатория: бэкапы, мониторинг, автоматизация — без “подпишитесь”.',
        },
        { title: 'Pragmatism', description: 'Простые решения, которые переживут прод и будущее‑я.' },
      ],
    },
    portfolio: {
      title: 'Избранные проекты',
      subtitle: 'Профессиональные задачи, личные проекты и инфраструктурные эксперименты.',
      item1Title: 'Что это:',
      item1Desc:
        'Backend‑платформа из нескольких сервисов, централизованной аутентификации, управления API‑ключами и событийного обмена.',
      item2Title: 'Ключевые детали:',
      item2Desc: 'JWT + API keys, Kafka/RabbitMQ, PostgreSQL, Redis, Docker Compose, self‑hosted деплой.',
      heading: 'Backend‑платформа и инфраструктура',
      caption: 'Надёжно и без драмы — пусть драма остаётся в историях о путешествиях.',
    },
    cta: {
      title: 'Давайте сделаем что‑то надёжное',
      subtitle: 'Если вам важны ясность, стабильность и долгий срок жизни — мы сработаемся.',
      action: 'Связаться',
    },
    blog: {
      title: 'Заметки, эксперименты и истории',
      info: 'Пишу о backend‑инженерии, self‑hosting, системном дизайне, впечатлениях от поездок, семейных моментах и вещах, которые понял на практике (чтобы вам не пришлось).',
    },
  },
  aboutPage: {
    metadataTitle: 'Обо мне — Vyacheslav Redkin',
    tagline: 'Backend / Platform Engineer',
    title: 'Обо мне <br /><span class="text-accent dark:text-white">Vyacheslav Redkin</span>',
    subtitle:
      'Я строю backend‑системы, API и self‑hosted платформы — те, которые держатся после запуска, когда приходят реальные пользователи и реальные нагрузки. Мне важны ясность, надёжность и поддерживаемость, а не короткие хаки. Плюс — я пишу дорожные заметки: ночные города, детали и “как это ощущалось на самом деле”.',
    workTitle: 'Чем занимаюсь',
    workSubtitle: 'Backend, платформа и инфраструктура — скучно в проде, как и должно быть.',
    workItems: [
      {
        title: 'Backend‑сервисы',
        description: 'Проектирование и разработка API и сервисов с чистой архитектурой.',
        icon: 'tabler:server',
      },
      {
        title: 'Платформа и self‑hosting',
        description: 'Docker‑окружения, бэкапы, мониторинг и эксплуатация.',
        icon: 'tabler:cloud-cog',
      },
      {
        title: 'Сообщения и данные',
        description: 'PostgreSQL, Redis, Kafka/RabbitMQ — быстрые и предсказуемые данные.',
        icon: 'tabler:database',
      },
    ],
    focusItems: [
      {
        title: 'Безопасность и доступы',
        description: 'JWT, API keys и вменяемые границы.',
        icon: 'tabler:shield-check',
      },
      {
        title: 'Наблюдаемость',
        description: 'Логи, метрики и трейсы — чтобы ошибки объясняли себя.',
        icon: 'tabler:activity',
      },
      { title: 'Автоматизация', description: 'Повторяемые деплои и надёжные окружения.', icon: 'tabler:robot' },
      { title: 'Системный дизайн', description: 'Отказы, масштабирование и поддержка.', icon: 'tabler:diagram-3' },
      { title: 'Прагматизм', description: 'Простое лучше хитрого — пусть future‑me понимает.', icon: 'tabler:tool' },
      { title: 'Иногда фронтенд', description: 'Nuxt 3, когда нужен чистый современный UI.', icon: 'tabler:layout' },
    ],
    howTitle: 'Как я работаю',
    howSubtitle: 'Меня интересует весь жизненный цикл: деплой, мониторинг, бэкапы и спокойный сон в 3 ночи.',
    howItems: [
      { title: 'Ясность вместо хитрости', description: 'Читаемые системы, которые не путают future‑me.' },
      { title: 'Надёжность в приоритете', description: 'Проектирование под отказы и предсказуемая эксплуатация.' },
      { title: 'Ответственность', description: 'Если ломается — пусть ломается вежливо и объяснимо.' },
    ],
    lifeTitle: 'Вне работы',
    lifeSubtitle: 'Семья, путешествия, ночные города и хобби без подписок.',
    lifeItems: [
      { title: 'Путевые заметки', description: 'Пишу о поездках через детали, а не по брошюрам.' },
      { title: 'Семья — главное', description: 'Самые ценные этапы — личные и тихие.' },
      { title: 'Self‑hosted дом', description: 'Медиасерверы, бэкапы, автоматизация и “умные” вещи офлайн.' },
    ],
  },
  blog: {
    viewAll: 'Все посты',
    backToBlog: 'Назад в блог',
    related: 'Похожие посты',
    listTitle: 'Блог',
    listHeading: 'Блог',
    pageLabel: 'Страница',
    newer: 'Новые',
    older: 'Старые',
    minRead: 'мин чтения',
  },
  notFound: {
    title: 'Страница не найдена',
    back: 'На главную',
  },
  contactPage: {
    metadataTitle: 'Контакты',
    tagline: 'Контакты',
    title: 'Связаться',
    formTitle: 'Напишите мне',
    formSubtitle: 'Если есть проект, вопрос или просто хотите сказать “привет” — пишите. Всё читаю.',
    nameLabel: 'Имя',
    emailLabel: 'Email',
    messageLabel: 'Сообщение',
    disclaimer: 'Отправляя форму, вы соглашаетесь, что я могу сохранить сообщение и контакты для ответа.',
    description: 'Обычно отвечаю в течение 24–48 часов.',
    helpTitle: 'Как связаться',
    helpItems: [
      {
        title: 'Общее',
        description: 'Проекты, сотрудничество и общие вопросы.',
      },
      {
        title: 'Техническое',
        description: 'Архитектура, платформа и backend‑консалтинг.',
      },
      {
        title: 'Telegram',
        description: '@chikanoza',
        icon: 'tabler:brand-telegram',
      },
      {
        title: 'Email',
        description: 'viacheslav.redkin@chikanoza.com',
        icon: 'tabler:mail',
      },
      {
        title: 'Локация',
        description: 'Remote / International',
        icon: 'tabler:map-pin',
      },
    ],
  },
  language: {
    en: 'EN',
    ru: 'RU',
  },
  footer: {
    site: 'Сайт',
    social: 'Соцсети',
    feeds: 'Ленты',
    tagline: 'Личный блог и фото/видео‑архив',
    rights: 'Все права защищены.',
  },
};

export default ru;
