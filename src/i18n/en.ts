const en = {
  locale: 'en',
  nav: {
    home: 'Home',
    about: 'About',
    blog: 'Blog',
    contact: 'Contact',
  },
  hero: {
    title: 'Vyacheslav Redkin',
    tagline: 'Backend / Platform Engineer',
    subtitle:
      'I build backend systems, APIs, and self-hosted platforms — the kind that don’t collapse the moment someone refreshes twice.<br />Mostly .NET, distributed systems, automation, and pragmatic engineering (a.k.a. “boring in the best way”).',
    cta: 'Get in touch',
  },
  home: {
    metadataTitle: 'Main page — Backend/Platform Engineer (and occasional human)',
    about: {
      title: 'About me',
      items: {
        lab: 'Self-hosted lab',
        travel: 'Travel & life notes',
        family: 'Family first',
      },
      paragraphs: [
        'I’m a software engineer who likes building systems that stay understandable, predictable, and maintainable years after launch — not just “works on my machine” levels of confidence.',
        'I care about the full lifecycle: how a system is deployed, monitored, backed up, and lived with. If something breaks at 3 AM, I prefer it to break <em>politely</em> with logs, metrics, and a clear reason.',
        'My primary stack is <strong>.NET</strong>, <strong>PostgreSQL</strong>, <strong>Docker</strong>, <strong>Kafka / RabbitMQ</strong>, and <strong>Redis</strong>. On the frontend I occasionally use <strong>Nuxt 3</strong> when a project needs a clean, modern UI.',
        'Outside of programming: I’m a family person, I love traveling, exploring cities (especially at night), taking photos, and building self-hosted home infrastructure — media servers, backups, automations, and “smart” things that don’t require a cloud subscription to turn on a light.',
        'I value independence, open-source, and solutions that don’t lock you in. Simple beats clever — because clever has a habit of turning into “why is this here?” six months later.',
      ],
    },
    experience: {
      title: 'Professional experience',
      itemTitle: 'Backend / Platform Engineer <br /> <span class="font-normal">Distributed systems & APIs</span>',
      description: `Designing and implementing backend services using .NET. <br />
Building secure APIs (JWT + API keys) for external clients. <br />
Working with PostgreSQL, Redis, Kafka, and RabbitMQ. <br />
Containerizing services with Docker and Compose. <br />
Designing systems with performance, observability, and long-term support in mind. <br />
(Also: making sure “temporary” solutions don’t become permanent… too often.)`,
    },
    skills: {
      title: 'Skills & focus areas',
      subtitle: 'Stuff I actually use and care about in real projects (not just in tweets).',
      items: [
        {
          title: '.NET & C#',
          description: 'Modern backend development with performance and clean architecture in mind.',
        },
        { title: 'APIs & Security', description: 'JWT, API keys, access control, logging, and sane boundaries.' },
        { title: 'Databases', description: 'PostgreSQL modeling, indexing, migrations, and practical optimization.' },
        { title: 'Docker', description: 'Containerized dev and reliable self-hosted environments.' },
        { title: 'Messaging', description: 'Kafka/RabbitMQ for async workflows and event-driven systems.' },
        { title: 'Redis', description: 'Caching, streams/sets, pipelines — fast data when it matters.' },
        { title: 'System design', description: 'Failure modes, scalability, and operations (the real world part).' },
        {
          title: 'Self-hosting',
          description: 'Home lab: backups, media, monitoring, automation — without “please subscribe”.',
        },
        { title: 'Pragmatism', description: 'Simple solutions that survive production and future-you.' },
      ],
    },
    portfolio: {
      title: 'Selected projects',
      subtitle: 'A mix of professional work, personal projects, and infrastructure experiments.',
      item1Title: 'What it is:',
      item1Desc:
        'Backend platform with multiple services, centralized authentication, API-key management, and event-driven communication.',
      item2Title: 'Highlights:',
      item2Desc: 'JWT + API keys, Kafka/RabbitMQ, PostgreSQL, Redis, Docker Compose, self-hosted deployment.',
      heading: 'Backend platform & infrastructure',
      caption: 'Built to be boringly reliable — because drama belongs in travel stories, not in production.',
    },
    cta: {
      title: 'Let’s build something solid',
      subtitle: 'If you value clarity, reliability, and long-term thinking — we’ll get along just fine.',
      action: 'Contact me',
    },
    blog: {
      title: 'Notes, experiments, and life stories',
      info: 'Writing about backend engineering, self-hosting, system design, travel impressions, family moments, and whatever I learned the hard way (so you don’t have to).',
    },
  },
  aboutPage: {
    metadataTitle: 'About — Vyacheslav Redkin',
    tagline: 'Backend / Platform Engineer',
    title: 'About me <br /><span class="text-accent dark:text-white">Vyacheslav Redkin</span>',
    subtitle:
      'I build backend systems, APIs, and self-hosted platforms — the kind that keep working after launch, when real traffic and real users show up. I care about clarity, reliability, and long-term maintenance more than short-term hacks. I also write travel notes and field diaries — cities at night, the small details, and the “how it actually felt” parts.',
    workTitle: 'What I work on',
    workSubtitle: 'Backend, platform, and infrastructure work that stays boring in production.',
    workItems: [
      {
        title: 'Backend services',
        description: 'Designing and building APIs and services with clean architecture and predictable performance.',
        icon: 'tabler:server',
      },
      {
        title: 'Platform & self-hosting',
        description: 'Dockerized environments, backups, monitoring, and systems you can actually operate.',
        icon: 'tabler:cloud-cog',
      },
      {
        title: 'Messaging & data',
        description: 'PostgreSQL, Redis, Kafka/RabbitMQ — data that stays fast and consistent.',
        icon: 'tabler:database',
      },
    ],
    focusItems: [
      {
        title: 'Security & access',
        description: 'JWT, API keys, access control, and sensible boundaries.',
        icon: 'tabler:shield-check',
      },
      {
        title: 'Observability',
        description: 'Logs, metrics, and traces so failures are polite and explain themselves.',
        icon: 'tabler:activity',
      },
      {
        title: 'Automation',
        description: 'Repeatable deploys, reliable environments, and less “works on my machine.”',
        icon: 'tabler:robot',
      },
      {
        title: 'System design',
        description: 'Failure modes, scaling plans, and long-term maintenance.',
        icon: 'tabler:git-branch',
      },
      {
        title: 'Pragmatism',
        description: 'Simple beats clever — future‑me should understand it.',
        icon: 'tabler:tool',
      },
      {
        title: 'Occasional frontend',
        description: 'Nuxt 3 when a project needs a clean, modern UI.',
        icon: 'tabler:layout',
      },
    ],
    howTitle: 'How I work',
    howSubtitle: 'I care about the full lifecycle: deployment, monitoring, backups, and staying sane at 3 AM.',
    howItems: [
      { title: 'Clarity over clever', description: 'Readable, maintainable systems that won’t confuse future‑me.' },
      { title: 'Reliability first', description: 'Design for failure, add guardrails, and make ops predictable.' },
      { title: 'Ownership mindset', description: 'If it breaks, it should break politely with logs and metrics.' },
    ],
    lifeTitle: 'Outside of work',
    lifeSubtitle: 'Family, travel, night cities, and the kind of hobbies that don’t require a subscription.',
    lifeItems: [
      {
        title: 'Travel notes',
        description: 'I write about trips with a focus on real-world details, not brochure highlights.',
      },
      { title: 'Family first', description: 'My favorite milestones are the quiet, personal ones.' },
      {
        title: 'Self-hosted home lab',
        description: 'Media servers, backups, automation, and “smart” things that work offline.',
      },
    ],
  },
  blog: {
    viewAll: 'View all posts',
    backToBlog: 'Back to Blog',
    related: 'Related Posts',
    listTitle: 'Blog',
    listHeading: 'The Blog',
    pageLabel: 'Page',
    newer: 'Newer posts',
    older: 'Older posts',
    minRead: 'min read',
  },
  notFound: {
    title: 'Page not found',
    back: 'Back to homepage',
  },
  contactPage: {
    metadataTitle: 'Contact',
    tagline: 'Contact',
    title: "Let's connect",
    formTitle: 'Drop me a message',
    formSubtitle:
      'If you have a project, a question, or just want to say hi — feel free to reach out. I read everything.',
    nameLabel: 'Name',
    emailLabel: 'Email',
    messageLabel: 'Message',
    disclaimer: 'By submitting this form, you agree that I can store your message and contact details to respond.',
    description: 'I usually reply within 24–48 hours.',
    helpTitle: 'Ways to reach me',
    helpItems: [
      {
        title: 'General',
        description: 'Project inquiries, collaboration, and general questions.',
      },
      {
        title: 'Technical',
        description: 'Architecture, platform, and backend consulting.',
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
        title: 'Location',
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
    site: 'Site',
    social: 'Social',
    feeds: 'Feeds',
    tagline: 'Personal blog & photo/video archive',
    rights: 'All rights reserved.',
  },
};

export default en;
