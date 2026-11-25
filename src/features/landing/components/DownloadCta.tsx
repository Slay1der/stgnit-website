import { Container } from '@/components/ui/Container';
import { HandleIcon, PlayStoreIcon } from '@/components/ui/icons';
import { PLAY_STORE_URL, SOCIAL_LINKS, SOCIAL_ORDER } from '@/constants/links';
import styles from './DownloadCta.module.css';

export function DownloadCta() {
  return (
    <section id="download" className={styles.band} aria-labelledby="download-title">
      <Container className={styles.inner}>
        <div className={styles.copy}>
          <h2 id="download-title" className={styles.title}>
            Every second counts.
          </h2>
          <p className={styles.text}>
            Download Stignit and set it up in a few minutes. Follow us for road-safety tips and updates.
          </p>
        </div>
        <div className={styles.actions}>
          <a href={PLAY_STORE_URL} className={styles.store}>
            <PlayStoreIcon />
            Get it on Google Play
          </a>
          {SOCIAL_ORDER.map((key) => (
            <a key={key} href={SOCIAL_LINKS[key].href} className={styles.social} target="_blank" rel="noreferrer">
              <HandleIcon size={20} />
              {SOCIAL_LINKS[key].label}
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
