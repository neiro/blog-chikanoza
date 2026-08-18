import merge from 'lodash.merge';

const DEFAULT_SITE_NAME = 'Website';

const getSite = (config) =>
  merge(
    {},
    {
      name: DEFAULT_SITE_NAME,
      site: undefined,
      base: '/',
      trailingSlash: false,
      googleSiteVerificationId: '',
    },
    config?.site ?? {}
  );

const getMetadata = (config) => {
  const siteConfig = getSite(config);

  return merge(
    {},
    {
      title: {
        default: siteConfig?.name || DEFAULT_SITE_NAME,
        template: '%s',
      },
      description: '',
      robots: { index: false, follow: false },
      openGraph: { type: 'website' },
    },
    config?.metadata ?? {}
  );
};

const getI18N = (config) => merge({}, { language: 'en', textDirection: 'ltr' }, config?.i18n ?? {});

const getAppBlog = (config) =>
  merge(
    {},
    {
      isEnabled: false,
      postsPerPage: 6,
      isRelatedPostsEnabled: false,
      relatedPostsCount: 4,
      post: { isEnabled: true, permalink: '/blog/%slug%', robots: { index: true, follow: true } },
      list: { isEnabled: true, pathname: 'blog', robots: { index: true, follow: true } },
      category: { isEnabled: true, pathname: 'category', robots: { index: true, follow: true } },
      tag: { isEnabled: true, pathname: 'tag', robots: { index: false, follow: true } },
    },
    config?.apps?.blog ?? {}
  );

const getUI = (config) => merge({}, { theme: 'system' }, config?.ui ?? {});

const getAnalytics = (config) =>
  merge({}, { vendors: { googleAnalytics: { id: undefined, partytown: true } } }, config?.analytics ?? {});

export default (config) => ({
  SITE: getSite(config),
  I18N: getI18N(config),
  METADATA: getMetadata(config),
  APP_BLOG: getAppBlog(config),
  UI: getUI(config),
  ANALYTICS: getAnalytics(config),
});
