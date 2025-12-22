import { motion } from 'motion/react';
import React, { useState, useCallback } from 'react';

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

  const handleMove = useCallback(
    (event: React.MouseEvent | React.TouchEvent) => {
      if (!isDragging) return;

      const rect = event.currentTarget.getBoundingClientRect();
      let x = 0;

      if ('touches' in event) {
        x = event.touches[0].clientX - rect.left;
      } else {
        x = (event as React.MouseEvent).clientX - rect.left;
      }

      const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(position);
    },
    [isDragging]
  );

  return (
    <motion.div
      className="relative w-full overflow-hidden rounded-xl shadow-xl select-none touch-none aspect-video group" onMouseMove={handleMove}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onTouchMove={handleMove}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* After Image (Background) */}
      <img
        src={afterImage}
        alt="After"
        className="absolute inset-0 p-6 w-full h-full object-contain"
        draggable={false}
      />

      {/* Before Image (Foreground with Clipping) */}
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

      {/* Labels */}
      <div className="absolute inset-0 flex justify-between items-end p-4 pointer-events-none">
        <span className="bg-black/50 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
          {beforeLabel}
        </span>
        <span className="bg-black/50 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
          {afterLabel}
        </span>
      </div>

      {/* Slider Line and Handle */}
      <div
        className="absolute inset-y-0 z-10 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] cursor-ew-resize"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-white/20">
          <div className="flex gap-1">
            <svg
              className="w-4 h-4 text-slate-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <svg
              className="w-4 h-4 text-slate-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export { BeforeAfterSlider };

{/* <motion.div */ }
{/*   initial={{ opacity: 0, y: 20 }} */ }
{/*   whileInView={{ opacity: 1, y: 0 }} */ }
{/*   viewport={{ once: true }} */ }
{/*   transition={{ duration: 0.6 }} */ }
{/*   className="w-full" */ }
{/* > */ }
{/**/ }
{/* </motion.div> */ }
