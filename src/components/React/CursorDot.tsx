import {
  motion,
  useMotionValue,
  useSpring,
  useMotionValueEvent,
} from "motion/react";
import { useEffect } from "react";

export default function CursorDot() {
  // Raw cursor position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth it
  const sx = useSpring(x, { stiffness: 600, damping: 40, mass: 0.8 });
  const sy = useSpring(y, { stiffness: 600, damping: 40, mass: 0.8 });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [x, y]);

  return (
    <motion.div
      style={{
        x: sx,
        y: sy,
        width: 10,
        height: 10,
        borderRadius: 9999,
        // center the dot on the cursor
        translateX: "-50%",
        translateY: "-50%",
      }}
      className="pointer-events-none pointer-coarse:hidden fixed top-0 left-0 z-99999 bg-accent"
    />
  );
}
