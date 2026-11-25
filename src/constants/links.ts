export const SOCIAL_LINKS = {
  x: { label: 'X (Twitter)', short: 'X', handle: '@Stignit01 on X', href: 'https://x.com/Stignit01' },
  instagram: {
    label: 'Instagram',
    short: 'Instagram',
    handle: '@stignithealtheco on Instagram',
    href: 'https://www.instagram.com/stignithealtheco',
  },
  tiktok: {
    label: 'TikTok',
    short: 'TikTok',
    handle: '@stignithealtheco on TikTok',
    href: 'https://www.tiktok.com/@stignithealtheco',
  },
} as const;

export type SocialKey = keyof typeof SOCIAL_LINKS;
export const SOCIAL_ORDER: SocialKey[] = ['x', 'instagram', 'tiktok'];

/** Replace with the Play Store listing once it is live. */
export const PLAY_STORE_URL = '#download';

/** Placeholders from the design — fill in before launch. */
export const CONTACT_EMAIL = '[EMAIL ADDRESS]';
export const CONTACT_PHONE = '[PHONE NUMBER]';
export const CONTACT_LOCATION = 'Lagos, Nigeria';
