"use client"
import { useEffect, useRef } from "react"

/** Full-screen network particle animation fixed behind the app */
export default function Particles() {
  const ref = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const c = ref.current!
    const ctx = c.getContext("2d")!
    const dpi = window.devicePixelRatio || 1

    let w = (c.width = innerWidth * dpi)
    let h = (c.height = innerHeight * dpi)
    c.style.width = innerWidth + "px"
    c.style.height = innerHeight + "px"

    const N = 95
    const R2 = (140 * dpi) ** 2
    const dots = Array.from({ length: N }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.6 * dpi,
      vy: (Math.random() - 0.5) * 0.6 * dpi,
    }))

    function draw() {
      // background wash (faint to keep it subtle)
      ctx.clearRect(0, 0, w, h)

      // nodes
      dots.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.6 * dpi, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(56, 189, 248, .9)" // sky-400 dot
        ctx.fill()
      })

      // edges
      ctx.strokeStyle = "rgba(99,102,241,.25)" // indigo-400 lines
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const a = dots[i], b = dots[j]
          const dx = a.x - b.x, dy = a.y - b.y
          const d2 = dx * dx + dy * dy
          if (d2 < R2) {
            ctx.globalAlpha = 1 - d2 / R2
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

    const onResize = () => {
      w = (c.width = innerWidth * dpi)
      h = (c.height = innerHeight * dpi)
      c.style.width = innerWidth + "px"
      c.style.height = innerHeight + "px"
    }

    draw()
    addEventListener("resize", onResize)
    return () => removeEventListener("resize", onResize)
  }, [])

  // fixed, behind everything
  return (
    <canvas
      ref={ref}
      className="fixed inset-0 -z-10 pointer-events-none bg-gradient dark:bg-slate-950"
    />
  )
}
