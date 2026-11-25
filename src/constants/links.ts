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

/** Dummy phone number — replace with the real line before launch. */
export const CONTACT_EMAIL = 'stignit.inc@gmail.com';
export const CONTACT_PHONE = '+234 9126136534';
export const CONTACT_LOCATION = 'Lagos, Nigeria';
