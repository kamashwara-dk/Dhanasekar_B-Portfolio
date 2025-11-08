"use client"
import { useEffect, useRef } from "react"

export default function AnimatedBackground() {
  const ref = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const c = ref.current!
    const ctx = c.getContext("2d")!
    let w = (c.width = window.innerWidth)
    let h = (c.height = window.innerHeight)

    const pts = Array.from({ length: 90 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6
    }))

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      // soft base tint
      ctx.fillStyle = "rgba(2,6,23,0.6)" // almost-black blue
      ctx.fillRect(0, 0, w, h)

      // points
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(56,189,248,0.9)"   // cyan dots
        ctx.fill()
      })

      // lines
      ctx.strokeStyle = "rgba(99,102,241,0.25)"  // indigo lines
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i], b = pts[j]
          const dx = a.x - b.x, dy = a.y - b.y
          const d2 = dx * dx + dy * dy
          if (d2 < 140 * 140) {
            ctx.globalAlpha = 1 - d2 / (140 * 140)
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }
      ctx.globalAlpha = 1
      requestAnimationFrame(draw)
    }

    draw()

    const onResize = () => {
      w = c.width = window.innerWidth
      h = c.height = window.innerHeight
    }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  return <canvas id="constellation-canvas" ref={ref} />
}
