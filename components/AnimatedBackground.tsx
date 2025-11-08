"use client";

import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;

    const DPR = Math.min(2, window.devicePixelRatio || 1);
    let w = (canvas.width = window.innerWidth * DPR);
    let h = (canvas.height = window.innerHeight * DPR);
    canvas.style.width = "100%";
    canvas.style.height = "100%";

    // particles
    const COUNT = Math.round((w * h) / (90000 * DPR));
    const P: { x: number; y: number; vx: number; vy: number }[] = Array.from(
      { length: COUNT },
      () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
      })
    );

    const getColors = () => {
      const dark = document.documentElement.classList.contains("dark");
      return {
        bg: dark ? "rgba(2,6,23,1)" : "rgba(255,255,255,1)",
        dot: dark ? "rgba(59,130,246,0.9)" : "rgba(29,78,216,0.7)",
        line: dark ? "rgba(99,102,241,0.25)" : "rgba(30,64,175,0.18)",
      };
    };

    let colors = getColors();

    const draw = () => {
      // subtle clear to avoid harsh flicker
      ctx.fillStyle = colors.bg;
      ctx.globalAlpha = 1;
      ctx.fillRect(0, 0, w, h);

      // dots
      for (const p of P) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 2 * DPR, 0, Math.PI * 2);
        ctx.fillStyle = colors.dot;
        ctx.fill();
      }

      // lines
      ctx.strokeStyle = colors.line;
      for (let i = 0; i < P.length; i++) {
        for (let j = i + 1; j < P.length; j++) {
          const a = P[i];
          const b = P[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          const max = 160 * DPR;
          if (d2 < max * max) {
            ctx.globalAlpha = 1 - d2 / (max * max);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      requestAnimationFrame(draw);
    };

    const onResize = () => {
      w = canvas.width = window.innerWidth * DPR;
      h = canvas.height = window.innerHeight * DPR;
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      colors = getColors();
    };

    const obs = new MutationObserver(() => {
      // update colors when theme toggles (dark class added/removed on <html>)
      colors = getColors();
    });
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    window.addEventListener("resize", onResize);
    draw();

    return () => {
      window.removeEventListener("resize", onResize);
      obs.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="w-full h-full block"
      aria-hidden="true"
      role="presentation"
    />
  );
}
