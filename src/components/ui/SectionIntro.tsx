import type { ReactNode } from 'react';
import styles from './SectionIntro.module.css';

type SectionIntroProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  headingId?: string;
  size?: 'default' | 'compact';
};

export function SectionIntro({ eyebrow, title, description, headingId, size = 'default' }: SectionIntroProps) {
  return (
    <div className={styles.intro}>
      <span className={styles.eyebrow}>{eyebrow}</span>
      <h2 id={headingId} className={size === 'compact' ? `${styles.title} ${styles.compact}` : styles.title}>
        {title}
      </h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}
