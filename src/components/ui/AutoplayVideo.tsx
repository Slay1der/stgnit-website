import { useEffect, useRef, type VideoHTMLAttributes } from 'react';

type AutoplayVideoProps = Omit<VideoHTMLAttributes<HTMLVideoElement>, 'autoPlay' | 'muted' | 'loop'> & {
  src: string;
  label: string;
};

/**
 * Muted, looping, inline video. Starts playing on mount (browsers can block
 * autoplay; the failure is ignored) and stays paused for reduced-motion users.
 */
export function AutoplayVideo({ src, label, ...rest }: AutoplayVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.muted = true;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    video.play().catch(() => {});
  }, [src]);

  return (
    <video
      ref={ref}
      src={src}
      aria-label={label}
      muted
      loop
      playsInline
      preload="metadata"
      controls={false}
      {...rest}
    />
  );
}
