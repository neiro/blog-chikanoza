import { getPermalink, getBlogPermalink, getAsset } from "./utils/permalinks";

const SITE_OWNER = "Chikanoza"; // <-- your name/brand
const SITE_TAGLINE = "Personal blog & photo/video archive";

export const headerData = {
  links: [
    { text: "Home", href: getPermalink("/") },
    { text: "Blog", href: getBlogPermalink() },
    { text: "About", href: getPermalink("/about") },
    // Optional:
    // { text: "Archive", href: getPermalink("/archive") },
    // { text: "Photos", href: getPermalink("/photos") },
  ],
  actions: [
    // Optional small CTA, or remove actions entirely
    // { text: "Subscribe", href: getAsset("/rss.xml") },
  ],
};

export const footerData = {
  links: [
    {
      title: "Site",
      links: [
        { text: "Home", href: getPermalink("/") },
        { text: "Blog", href: getBlogPermalink() },
        { text: "About", href: getPermalink("/about") },
        // { text: "Archive", href: getPermalink("/archive") },
      ],
    },
    {
      title: "Social",
      links: [
        // Put your real links here:
        { text: "Instagram", href: "https://instagram.com/chikanoza" },
        { text: "YouTube", href: "https://youtube.com/@VyacheslavRedkin" },
      ],
    },
    {
      title: "Feeds",
      links: [{ text: "RSS", href: getAsset("/rss.xml") }],
    },
  ],

  secondaryLinks: [
    // Keep only if you actually have these pages:
    // { text: "Terms", href: getPermalink("/terms") },
    // { text: "Privacy", href: getPermalink("/privacy") },
  ],

  socialLinks: [
    // Keep icons you actually use — remove the rest.
    { ariaLabel: "Instagram", icon: "tabler:brand-instagram", href: "https://instagram.com/chikanoza" },
    { ariaLabel: "YouTube", icon: "tabler:brand-youtube", href: "https://youtube.com/@VyacheslavRedkin" },
    { ariaLabel: "RSS", icon: "tabler:rss", href: getAsset("/rss.xml") },
  ],

  footNote: `
    <span class="text-muted">${SITE_TAGLINE}</span>
    <span class="mx-2">·</span>
    © ${new Date().getFullYear()} ${SITE_OWNER}. All rights reserved.
  `,
};
