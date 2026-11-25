import { Container } from '@/components/ui/Container';
import { AutoplayVideo } from '@/components/ui/AutoplayVideo';
import { PlayStoreIcon } from '@/components/ui/icons';
import { PLAY_STORE_URL } from '@/constants/links';
import heroVideo from '@/assets/videos/hero.mp4';
import heroPoster from '@/assets/videos/hero-poster.jpg';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <Container as="section" id="top" className={styles.hero} aria-label="Introduction">
      <div className={styles.copy}>
        <span className={styles.badge}>
          <span className={styles.beacon} aria-hidden="true">
            <span className={`${styles.beaconDot} stg-pulse`} />
            <span className={styles.beaconDot} />
          </span>
          Emergency response for Nigerian roads
        </span>
        <h1 className={styles.title}>When a crash happens, Stignit calls for help — even if you can't.</h1>
        <p className={styles.lede}>
          Stignit uses your phone's sensors to detect a crash, checks if you're okay, and alerts your people and the
          nearest responders with your live location. Every second counts.
        </p>
        <div className={styles.actions}>
          <a href={PLAY_STORE_URL} className={styles.primary}>
            <PlayStoreIcon />
            Get it on Google Play
          </a>
          <a href="#how" className={styles.secondary}>
            See how it works
          </a>
        </div>
        <p className={styles.hint}>Move your cursor around the page — our ambulance follows you. On a phone, just tap.</p>
      </div>

      <div className={styles.media}>
        <div className={styles.frame}>
          <AutoplayVideo
            className={styles.video}
            src={heroVideo}
            poster={heroPoster}
            label="How Stignit works: crash, detect, check, alert, rescue"
            width={1280}
            height={800}
          />
        </div>
      </div>
    </Container>
  );
}
