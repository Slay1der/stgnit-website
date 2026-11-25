import { useCallback, useEffect, useState } from 'react';

export type WelfarePhase = 'count' | 'ok' | 'help';

type State = { phase: WelfarePhase; left: number; hold: number };

type Options = { totalSeconds: number; helpHoldSeconds: number; okHoldSeconds: number };

/**
 * Drives the looping "Are you okay?" demo: counts down, escalates to "help"
 * when it reaches zero, or shows "ok" when the user confirms. Each result is
 * held briefly, then the countdown restarts.
 */
export function useWelfareCountdown({ totalSeconds, helpHoldSeconds, okHoldSeconds }: Options) {
  const total = totalSeconds > 0 ? totalSeconds : 10;
  const [state, setState] = useState<State>({ phase: 'count', left: total, hold: 0 });

  useEffect(() => {
    const id = window.setInterval(() => {
      setState((s) => {
        if (s.phase === 'count') {
          return s.left <= 1 ? { phase: 'help', left: 0, hold: helpHoldSeconds } : { ...s, left: s.left - 1 };
        }
        const hold = s.hold - 1;
        return hold <= 0 ? { phase: 'count', left: total, hold: 0 } : { ...s, hold };
      });
    }, 1000);
    return () => window.clearInterval(id);
  }, [total, helpHoldSeconds]);

  const confirmOkay = useCallback(() => {
    setState((s) => (s.phase === 'count' ? { phase: 'ok', left: s.left, hold: okHoldSeconds } : s));
  }, [okHoldSeconds]);

  const left = Math.min(state.left, total);
  const fraction = state.phase === 'count' ? left / total : state.phase === 'ok' ? 1 : 0;

  return { phase: state.phase, secondsLeft: left, fraction, confirmOkay };
}
