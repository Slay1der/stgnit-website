import type { ComponentType, ReactNode } from 'react';
import { HandleIcon, MailIcon, PhoneIcon, PinIcon } from '@/components/ui/icons';
import { CONTACT_EMAIL, CONTACT_LOCATION, CONTACT_PHONE, SOCIAL_LINKS, SOCIAL_ORDER } from '@/constants/links';
import styles from './ContactDetails.module.css';

type Row = { key: string; Icon: ComponentType<{ size?: number }>; content: ReactNode };

const ROWS: Row[] = [
  { key: 'email', Icon: MailIcon, content: <a href="#contact">{CONTACT_EMAIL}</a> },
  { key: 'phone', Icon: PhoneIcon, content: <span>{CONTACT_PHONE}</span> },
  { key: 'location', Icon: PinIcon, content: <span>{CONTACT_LOCATION}</span> },
  ...SOCIAL_ORDER.map((k) => ({
    key: k,
    Icon: HandleIcon,
    content: (
      <a href={SOCIAL_LINKS[k].href} target="_blank" rel="noreferrer">
        {SOCIAL_LINKS[k].handle}
      </a>
    ),
  })),
];

export function ContactDetails() {
  return (
    <ul className={styles.list}>
      {ROWS.map(({ key, Icon, content }) => (
        <li key={key} className={styles.row}>
          <span className={styles.icon}>
            <Icon size={20} />
          </span>
          {content}
        </li>
      ))}
    </ul>
  );
}
