/** Tunables exposed as design props in the original mock-up. */
export const LANDING_CONFIG = {
  /** Whether the ambulance follows the cursor / taps. */
  followCursor: true,
  /** Length of the "Are you okay?" countdown, in seconds (3–60). */
  countdownSeconds: 10,
  /** Seconds the "help"/"okay" result shows before the demo restarts. */
  helpHoldSeconds: 4,
  okHoldSeconds: 3,
} as const;
