import { AutoplayVideo } from '@/components/ui/AutoplayVideo';
import type { Sector } from '../landing.types';
import styles from './SectorItem.module.css';

type SectorItemProps = { sector: Sector; open: boolean; onToggle: () => void };

export function SectorItem({ sector, open, onToggle }: SectorItemProps) {
  const panelId = `sector-${sector.id}`;
  return (
    <div className={`${styles.item} stg-card`}>
      <h3 className={styles.heading}>
        <button type="button" className={styles.trigger} aria-expanded={open} aria-controls={panelId} onClick={onToggle}>
          <span className={styles.label}>
            <span className={styles.dot} aria-hidden="true" />
            <span className={styles.name}>{sector.name}</span>
          </span>
          <span className={styles.sign} aria-hidden="true">
            {open ? '−' : '+'}
          </span>
        </button>
      </h3>
      {open && (
        <div id={panelId} className={styles.panel}>
          <AutoplayVideo className={styles.video} src={sector.video} label={sector.videoLabel} width={1280} height={720} />
          <p className={styles.description}>{sector.description}</p>
          <ul className={styles.highlights}>
            {sector.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
