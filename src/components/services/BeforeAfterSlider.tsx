import { motion } from 'motion/react';
import React, { useState, useCallback, useRef, useEffect } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After',
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null); // 1. Added Ref

  const handleMove = useCallback(
    (event: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
      if (!isDragging || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      let clientX = 0;

      if ('touches' in event) {
        clientX = event.touches[0].clientX;
      } else {
        clientX = (event as MouseEvent).clientX;
      }

      const x = clientX - rect.left;
      const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(position);
    },
    [isDragging]
  );

  // 2. Global listeners to handle "letting go" outside the container
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMove);
      window.addEventListener('mouseup', () => setIsDragging(false));
      window.addEventListener('touchmove', handleMove);
      window.addEventListener('touchend', () => setIsDragging(false));
    }
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', () => setIsDragging(false));
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', () => setIsDragging(false));
    };
  }, [isDragging, handleMove]);

  return (
    <motion.div
      ref={containerRef}
      /* Removed touch-none, added touch-pan-y for better mobile feel */
      className="relative w-full overflow-hidden rounded-xl shadow-xl select-none touch-pan-y aspect-video group"
      onMouseDown={(e) => {
        setIsDragging(true);
        handleMove(e); // Allow click-to-jump on desktop
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* After Image */}
      <img
        src={afterImage}
        alt="After"
        className="absolute inset-0 p-6 w-full h-full object-contain"
        draggable={false}
      />

      {/* Before Image */}
      <div
        className="absolute inset-0 w-full p-6 h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={beforeImage}
          alt="Before"
          className="absolute inset-0 w-full h-full object-contain"
          draggable={false}
        />
      </div>

      {/* Slider Line and Handle */}
      <div
        className="absolute inset-y-0 z-10 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] cursor-ew-resize"
        style={{ left: `${sliderPosition}%` }}
      >
        <div
          /* 3. Logic: touch-none here stops scrolling ONLY when grabbing the handle */
          /* 4. Added larger hit area for touch via pointer-coarse */
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 pointer-coarse:w-14 pointer-coarse:h-14 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-white/20 touch-none"
          onTouchStart={(e) => {
            e.stopPropagation(); // Prevents page from reacting
            setIsDragging(true);
          }}
        >
          <div className="flex gap-1">
            <svg className="w-4 h-4 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            <svg className="w-4 h-4 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export { BeforeAfterSlider };
