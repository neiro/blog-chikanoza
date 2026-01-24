import en from './en';
import ru from './ru';

import { getBlogPermalink, getHomePermalink, getPermalink } from '~/utils/permalinks';

export const locales = ['en', 'ru'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';
export const contentDefaultLocale: Locale = 'ru';

const dictionaries = { en, ru } as const;

export const isLocale = (value: string): value is Locale => locales.includes(value as Locale);

export const getLocaleFromUrl = (url: URL): Locale => {
  const [, maybeLocale] = url.pathname.split('/');
  return maybeLocale && isLocale(maybeLocale) ? (maybeLocale as Locale) : defaultLocale;
};

export const stripLocaleFromPath = (pathname: string): string => {
  const parts = pathname.split('/').filter((p) => p.length > 0);
  if (parts.length === 0) return '/';
  if (isLocale(parts[0])) {
    const rest = parts.slice(1).join('/');
    return rest ? `/${rest}` : '/';
  }
  return pathname.startsWith('/') ? pathname : `/${pathname}`;
};

export const localizePath = (path: string, locale: Locale): string => {
  if (!path) return locale === defaultLocale ? '/' : `/${locale}`;

  if (
    path.startsWith('https://') ||
    path.startsWith('http://') ||
    path.startsWith('://') ||
    path.startsWith('#') ||
    path.startsWith('javascript:')
  ) {
    return path;
  }

  const normalized = path.startsWith('/') ? path : `/${path}`;
  return locale === defaultLocale ? normalized : `/${locale}${normalized}`;
};

export const localizeUrl = (url: string, locale: Locale): string => {
  if (!url) return localizePath('/', locale);
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('://')) return url;

  const [pathAndQuery, hash] = url.split('#');
  const [path, query] = pathAndQuery.split('?');
  const localizedPath = localizePath(path, locale);
  const withQuery = query ? `${localizedPath}?${query}` : localizedPath;
  return hash ? `${withQuery}#${hash}` : withQuery;
};

export const getDictionary = (locale: Locale) => dictionaries[locale] ?? dictionaries[defaultLocale];

export const t = (key: string, locale: Locale): string => {
  const dict = getDictionary(locale) as Record<string, unknown>;
  const value = key.split('.').reduce<unknown>((acc, part) => {
    if (acc && typeof acc === 'object' && part in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[part];
    }
    return undefined;
  }, dict);

  return typeof value === 'string' ? value : key;
};

export const getOpenGraphLocale = (locale: Locale): string => (locale === 'ru' ? 'ru_RU' : 'en_US');

export const getLocaleSwitchLinks = (url: URL) => {
  const currentLocale = getLocaleFromUrl(url);
  const basePath = stripLocaleFromPath(url.pathname);
  const suffix = `${url.search ?? ''}${url.hash ?? ''}`;

  return locales.map((locale) => ({
    locale,
    text: locale.toUpperCase(),
    href: `${localizePath(basePath, locale)}${suffix}`,
    isActive: locale === currentLocale,
  }));
};

export const getLocalePermalink = (
  locale: Locale,
  slug = '',
  type: 'page' | 'home' | 'blog' | 'asset' | 'post' | 'category' | 'tag' = 'page'
): string => localizePath(getPermalink(slug, type), locale);

export const getLocaleHomePermalink = (locale: Locale): string => localizePath(getHomePermalink(), locale);
export const getLocaleBlogPermalink = (locale: Locale): string => localizePath(getBlogPermalink(), locale);
