import { Container } from '@/components/ui/Container';
import { Logo } from '@/components/brand/Logo';
import { Hero } from './Hero';
import { JourneyStrip } from './JourneyStrip';
import styles from './SiteHeader.module.css';

const NAV_LINKS = [
  { href: '#how', label: 'How it works' },
  { href: '#sectors', label: "Who it's for" },
  { href: '#offer', label: 'What we offer' },
  { href: '#contact', label: 'Contact' },
];

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <Container as="nav" aria-label="Main" className={styles.nav}>
        <a href="#top" aria-label="Stignit home" className={styles.home}>
          <Logo />
        </a>
        <div className={styles.links}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
          <a href="#download" className={styles.cta}>
            Get the app
          </a>
        </div>
      </Container>
      <Hero />
      <JourneyStrip />
    </header>
  );
}
