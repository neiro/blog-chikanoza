import { getAsset } from './utils/permalinks';
import { getLocaleBlogPermalink, getLocaleHomePermalink, getLocalePermalink, type Locale, t } from './i18n';

const SITE_OWNER = 'Chikanoza'; // <-- your name/brand

export const getHeaderData = (locale: Locale) => ({
  links: [
    { text: t('nav.home', locale), href: getLocaleHomePermalink(locale) },
    { text: t('nav.blog', locale), href: getLocaleBlogPermalink(locale) },
    { text: t('nav.about', locale), href: getLocalePermalink(locale, '/about') },
  ],
  actions: [],
});

export const getFooterData = (locale: Locale) => ({
  links: [
    {
      title: t('footer.site', locale),
      links: [
        { text: t('nav.home', locale), href: getLocaleHomePermalink(locale) },
        { text: t('nav.blog', locale), href: getLocaleBlogPermalink(locale) },
        { text: t('nav.about', locale), href: getLocalePermalink(locale, '/about') },
      ],
    },
    {
      title: t('footer.social', locale),
      links: [
        { text: 'Instagram', href: 'https://instagram.com/chikanoza' },
        { text: 'YouTube', href: 'https://youtube.com/@VyacheslavRedkin' },
      ],
    },
    {
      title: t('footer.feeds', locale),
      links: [{ text: 'RSS', href: getAsset('/rss.xml') }],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/chikanoza' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://youtube.com/@VyacheslavRedkin' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    <span class="text-muted">${t('footer.tagline', locale)}</span>
    <span class="mx-2">·</span>
    © ${new Date().getFullYear()} ${SITE_OWNER}. ${t('footer.rights', locale)}
  `,
});
