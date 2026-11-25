import logoMark from '@/assets/brand/logo-mark.png';
import logoWordmark from '@/assets/brand/logo-wordmark.png';
import styles from './Logo.module.css';

type LogoProps = { size?: 'md' | 'sm' };

/** Siren mark + white wordmark. Meant for dark backgrounds. */
export function Logo({ size = 'md' }: LogoProps) {
  return (
    <span className={`${styles.logo} ${styles[size]}`}>
      <img className={styles.mark} src={logoMark} alt="" width={258} height={294} />
      <img className={styles.wordmark} src={logoWordmark} alt="Stignit" width={360} height={61} />
    </span>
  );
}
