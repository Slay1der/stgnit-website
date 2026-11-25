import { useCallback, useEffect, useRef, useState, type PointerEvent } from 'react';

type Position = { x: number; y: number; facing: 1 | -1 };

const START_X = 1180;
const START_Y = 300;
const EDGE_PADDING = 60;

/**
 * Tracks the pointer relative to a container so an element can trail it.
 * Updates are batched to one per animation frame; `facing` flips when the
 * pointer moves left or right by more than a few pixels.
 */
export function useCursorFollower<T extends HTMLElement>(enabled: boolean) {
  const containerRef = useRef<T>(null);
  const [pos, setPos] = useState<Position>({ x: START_X, y: START_Y, facing: 1 });
  const pending = useRef<{ x: number; y: number } | null>(null);
  const frame = useRef(0);

  // Keep the starting spot on-screen on narrow viewports.
  useEffect(() => {
    const width = containerRef.current?.clientWidth;
    if (width && width - EDGE_PADDING < START_X) {
      setPos((p) => ({ ...p, x: Math.max(EDGE_PADDING, width - EDGE_PADDING) }));
    }
  }, []);

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  const onPointer = useCallback(
    (e: PointerEvent<T>) => {
      if (!enabled) return;
      const rect = e.currentTarget.getBoundingClientRect();
      pending.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      if (frame.current) return;
      frame.current = requestAnimationFrame(() => {
        frame.current = 0;
        const next = pending.current;
        if (!next) return;
        setPos((p) => {
          const dx = next.x - p.x;
          const facing = Math.abs(dx) > 4 ? (dx < 0 ? -1 : 1) : p.facing;
          return { x: next.x, y: next.y, facing };
        });
      });
    },
    [enabled],
  );

  return {
    containerRef,
    position: pos,
    handlers: { onPointerMove: onPointer, onPointerDown: onPointer },
  };
}
