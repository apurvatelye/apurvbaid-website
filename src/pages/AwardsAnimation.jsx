"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

const AWARDS = [
  { glyph: "⬡", title: "Dezeen Award", year: "2024", size: "lg" },
  { glyph: "◈", title: "A+D Awards", year: "2023", size: "sm" },
  { glyph: "✦", title: "Architectural Digest", year: "2024", size: "md" },
  { glyph: "◇", title: "Frame Award", year: "2023", size: "sm" },
  { glyph: "⬟", title: "Interior Design Mag", year: "2022", size: "lg" },
  { glyph: "◉", title: "RIBA Award", year: "2024", size: "md" },
  { glyph: "✧", title: "iF Design Award", year: "2023", size: "sm" },
  { glyph: "⬠", title: "Red Dot Award", year: "2022", size: "md" },
  { glyph: "◆", title: "AIA Award", year: "2024", size: "lg" },
  { glyph: "❋", title: "D&AD Award", year: "2023", size: "sm" },
  { glyph: "⬡", title: "Wallpaper Award", year: "2022", size: "md" },
  { glyph: "◈", title: "Prix Versailles", year: "2024", size: "sm" },
];

const SIZE_SCALE = { lg: 1.3, md: 1, sm: 0.75 };

const START_CONFIGS = [
  { fx: 0.52, fy: 0.58, fs: 1.55, rot: -20 },
  { fx: 0.65, fy: 0.5, fs: 0.5, rot: 15 },
  { fx: -0.68, fy: 0.08, fs: 1.2, rot: -10 },
  { fx: 0.58, fy: 0.52, fs: 0.58, rot: 20 },
  { fx: -0.25, fy: 0.68, fs: 0.9, rot: -15 },
  { fx: 0.3, fy: 0.02, fs: 1.45, rot: 10 },
  { fx: -0.62, fy: -0.22, fs: 0.52, rot: 25 },
  { fx: 0.62, fy: -0.18, fs: 1.1, rot: -20 },
  { fx: 0.08, fy: -0.72, fs: 0.62, rot: 15 },
  { fx: -0.18, fy: 0.74, fs: 1.28, rot: -10 },
  { fx: 0.78, fy: 0.32, fs: 0.68, rot: 20 },
  { fx: -0.42, fy: -0.38, fs: 0.82, rot: -25 },
];

function useStageSize(ref) {
  const [size, setSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    if (!ref.current) return;

    const updateSize = () => {
      const rect = ref.current.getBoundingClientRect();
      setSize({ w: rect.width, h: rect.height });
    };

    updateSize();

    const resizeObserver = new ResizeObserver(updateSize);
    resizeObserver.observe(ref.current);

    return () => resizeObserver.disconnect();
  }, [ref]);

  return size;
}

function getGridPositions(W, H, count) {
  const cols = W < 768 ? 3 : 4;
  const rows = Math.ceil(count / cols);

  const paddingX = W * 0.12;
  const paddingY = H * 0.18;

  const cellW = (W - paddingX * 2) / cols;
  const cellH = (H - paddingY * 2) / rows;

  return Array.from({ length: count }, (_, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);

    return {
      x: paddingX + col * cellW + cellW / 2,
      y: paddingY + row * cellH + cellH / 2,
    };
  });
}

function AwardCard({ progress, index, data, W, H, endPos }) {
  const config = START_CONFIGS[index];
  const baseScale = SIZE_SCALE[data.size];

  const centerX = W / 2;
  const centerY = H / 2;

  const startX = centerX + config.fx * W;
  const startY = centerY + config.fy * H;

  const x = useTransform(progress, [0, 1], [startX, endPos.x]);
  const y = useTransform(progress, [0, 1], [startY, endPos.y]);
  const scale = useTransform(progress, [0, 1], [config.fs * baseScale, baseScale]);
  const rotate = useTransform(progress, [0, 1], [config.rot, 0]);

  return (
    <motion.div
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        x,
        y,
        scale,
        rotate,
      }}
      className="award-card"
    >
      <div className="award-glyph">{data.glyph}</div>
      <div className="award-title">{data.title}</div>
      <div className="award-year">{data.year}</div>
    </motion.div>
  );
}

export default function AwardsAnimation() {
  const pinRef = useRef(null);
  const stageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: pinRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    mass: 0.4,
  });

  const { w: W, h: H } = useStageSize(stageRef);

  const positions = W && H ? getGridPositions(W, H, AWARDS.length) : [];

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Before Section */}
      <section className="h-screen flex items-center justify-center text-5xl font-light border-b border-zinc-800">
        Scroll Down
      </section>

      {/* Pinned Section */}
      <div ref={pinRef} className="relative h-[20vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          <div ref={stageRef} className="absolute inset-0">
            {W > 0 &&
              positions.length > 0 &&
              AWARDS.map((award, i) => (
                <AwardCard
                  key={i}
                  progress={smoothProgress}
                  index={i}
                  data={award}
                  W={W}
                  H={H}
                  endPos={positions[i]}
                />
              ))}
          </div>
        </div>
      </div>

      {/* After Section */}
      <section className="h-screen flex items-center justify-center text-4xl font-light border-t border-zinc-800">
        Our Projects
      </section>

      <style>{`
        .award-card {
          transform: translate(-50%, -50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          padding: 18px 22px;
          border-radius: 16px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(12px);
          will-change: transform;
        }

        .award-glyph {
          font-size: 24px;
          opacity: 0.7;
        }

        .award-title {
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          white-space: nowrap;
          opacity: 0.8;
        }

        .award-year {
          font-size: 9px;
          opacity: 0.4;
        }
      `}</style>
    </div>
  );
}