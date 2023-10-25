import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Solutions',
      links: [
        {
          text: 'Fractional PSM',
          href: getPermalink('/solutions/fractional-psm'),
        },
        {
          text: 'Revenue Attribution',
          href: getPermalink('/solutions/attribution'),
        },
        {
          text: 'Nearbound Support',
          href: getPermalink('/solutions/nearbound-support'),
        },
        {
          text: 'Experience-led Ecosystems',
          href: getPermalink('/solutions/experience-led-ecosystems'),
        },
      ],
    },
    {
      text: 'Resources',
      links: [
        {
          text: 'Blog',
          href: getBlogPermalink(),
        },
        {
          text: 'Pricing',
          href: getPermalink('/pricing'),
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      text: 'Platform',
      links: [
        {
          text: 'Coming Soon: Resin',
          href: getPermalink('/platform/resin'),
        },
      ],
    },
    {
      text: 'Partners',
      links: [
        {
          text: 'Become a Partner',
          href: getPermalink('/partners/become-a-partner'),
        },
        {
          text: 'Partnership Leaders',
          href: getPermalink('/partners/partnership-leaders'),
        },
      ],
    },
  ],
  actions: [{ text: 'Schedule a chat', href: 'https://www.tryuppercut.com/landing/schedule-a-demo', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Solutions',
      links: [
        { text: 'Fractional PSM', href: '/solutions/fractional-psm' },
        { text: 'Revenue Attribution', href: '/solutions/attribution' },
        { text: 'Nearbound Support', href: '/solutions/nearbound-support' },
        { text: 'Experience-led Ecosystems', href: '/solutions/experience-led-ecosystems' },
        { text: 'Pricing', href: '/pricing' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Resin (Coming Soon)', href: '/platform/resin' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'Blog', href: '/blog' },
        { text: 'Partners', href: '/partners/become-a-partner' },
        { text: 'Contact', href: 'https://wa.me/message/DUSWAIWLJG6DO1' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/uppercut-io' },
    { ariaLabel: 'Youtube', icon: 'tabler:brand-youtube', href: 'https://youtube.com/@tryuppercut' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    Made with ❤️ in <a class="text-primary hover:underline dark:text-gray-200" href="https://www.visitknoxville.com/"> Knoxville, TN</a> · All rights reserved.
  `,
};
