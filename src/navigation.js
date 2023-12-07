import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Solutions',
      links: [
        {
          text: 'Slack Connect Alternative',
          href: getPermalink('/solutions/slack-connect-alternative'),
        },
        {
          text: 'Real-time PRM',
          href: getPermalink('/solutions/realtime-prm'),
        },
      ],
    },
    {
      text: 'About',
      links: [
        {
          text: 'Pricing',
          href: getPermalink('/pricing'),
        },
        {
          text: 'Join the waitlist',
          href: ('https://forms.fillout.com/t/bHn1ZhE6oLus'),
        },
      ],
    },
  ],
  actions: [{ text: 'Join the waitlist', href: 'https://forms.fillout.com/t/bHn1ZhE6oLus', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Solutions',
      links: [
        { text: 'Slack Connect Alternative', href: '/solutions/slack-connect-alternative' },
        { text: 'Real-time PRM', href: '/solutions/realtime-prm' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'Blog', href: '/blog' },
        { text: 'Partners', href: '/partners/become-a-partner' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/entertheoasis' },
    { ariaLabel: 'Youtube', icon: 'tabler:brand-youtube', href: 'https://youtube.com/@tryuppercut' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    Made with ❤️ in <a class="text-primary hover:underline dark:text-gray-200" href="https://www.visitknoxville.com/"> Knoxville, TN</a> · All rights reserved. | We support a free and independent Palestine 🇵🇸
  `,
};
