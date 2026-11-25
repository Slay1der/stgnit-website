import { Container } from '@/components/ui/Container';
import { Logo } from '@/components/brand/Logo';
import { SOCIAL_LINKS, SOCIAL_ORDER } from '@/constants/links';
import styles from './SiteFooter.module.css';

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <Logo size="sm" />
        <span>Trusted response, every second counts.</span>
        <nav aria-label="Footer" className={styles.links}>
          <a href="#top">Privacy</a>
          <a href="#top">Terms</a>
          {SOCIAL_ORDER.map((k) => (
            <a key={k} href={SOCIAL_LINKS[k].href} target="_blank" rel="noreferrer">
              {SOCIAL_LINKS[k].short}
            </a>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
