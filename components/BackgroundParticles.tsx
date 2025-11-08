"use client";

import { useEffect, useRef } from "react";

export default function BackgroundParticles() {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    let w = 0, h = 0, dpr = Math.max(1, window.devicePixelRatio || 1);

    const N = 85;                 // number of particles
    const R = 120;                // link radius
    const P: { x: number; y: number; vx: number; vy: number }[] = [];

    function themeColors() {
      const dark = document.documentElement.classList.contains("dark");
      return {
        bg: "transparent",
        dot: dark ? "rgba(59,130,246,0.9)" : "rgba(14,165,233,0.9)",   // blue/cyan
        line: dark ? "rgba(99,102,241,0.20)" : "rgba(29,78,216,0.18)", // indigo/blue
      };
    }

    function resize() {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function init() {
      P.length = 0;
      for (let i = 0; i < N; i++) {
        P.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
        });
      }
    }

    function step() {
      const c = themeColors();
      ctx.clearRect(0, 0, w, h);

      // points
      ctx.fillStyle = c.dot;
      for (const p of P) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.3, 0, Math.PI * 2);
        ctx.fill();
      }

      // lines
      ctx.strokeStyle = c.line;
      for (let i = 0; i < P.length; i++) {
        for (let j = i + 1; j < P.length; j++) {
          const a = P[i], b = P[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < R * R) {
            ctx.globalAlpha = 1 - d2 / (R * R);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      raf.current = requestAnimationFrame(step);
    }

    resize();
    init();
    step();
    window.addEventListener("resize", () => {
      resize();
      // keep particles distributed on resize
      init();
    });

    // Redraw on theme change (dark / light)
    const obs = new MutationObserver(() => {
      // one frame later so class is applied
      cancelAnimationFrame(raf.current!);
      raf.current = requestAnimationFrame(step);
    });
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      obs.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={ref}
      // fixed full-screen, behind everything, click-through
      className="fixed inset-0 -z-10 pointer-events-none"
      aria-hidden="true"
    />
  );
}
