"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  maxLife: number;
  rotation: number;
  rotSpeed: number;
};

export function SmokeCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, prevX: 0, prevY: 0, lastSpawn: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      const m = mouseRef.current;
      m.prevX = m.x;
      m.prevY = m.y;
      m.x = e.clientX;
      m.y = e.clientY;
    };
    window.addEventListener("mousemove", onMouseMove);

    let raf: number;

    const spawn = (x: number, y: number, vx: number, vy: number) => {
      // Maisha mafupi — inatoweka haraka
      const maxLife = 40 + Math.random() * 25;
      particlesRef.current.push({
        x,
        y,
        // Kasi ndogo — smoke inabaki karibu na cursor
        vx: vx * 0.25 + (Math.random() - 0.5) * 0.8,
        vy: vy * 0.25 + (Math.random() - 0.5) * 0.8 - 0.2,
        // UKUBWA NDOGO — 8 hadi 20px
        size: 8 + Math.random() * 12,
        life: maxLife,
        maxLife,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.015,
      });
    };

    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const m = mouseRef.current;
      const dx = m.x - m.prevX;
      const dy = m.y - m.prevY;
      const speed = Math.sqrt(dx * dx + dy * dy);

      // Particles chache — 1-2 tu kwa move
      if (speed > 1 && time - m.lastSpawn > 25) {
        const count = Math.min(2, Math.ceil(speed / 12) + 1);
        for (let i = 0; i < count; i++) {
          spawn(m.x, m.y, dx, dy);
        }
        m.lastSpawn = time;
        m.prevX = m.x;
        m.prevY = m.y;
      }

      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.97;
        p.vy *= 0.97;
        p.life--;
        p.rotation += p.rotSpeed;

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        const progress = 1 - p.life / p.maxLife;
        // UZITO NYEPESI — 12% tu
        const alpha = (1 - progress) * 0.12;
        // Inakua kidogo tu — 30%
        const size = p.size * (1 + progress * 0.3);

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        // GOLD YA SEA CLIFF — inaonekana kwenye background yoyote
        const g = ctx.createRadialGradient(0, 0, 0, 0, 0, size);
        g.addColorStop(0, `rgba(201, 169, 97, ${alpha})`);
        g.addColorStop(0.4, `rgba(201, 169, 97, ${alpha * 0.6})`);
        g.addColorStop(0.7, `rgba(180, 140, 70, ${alpha * 0.3})`);
        g.addColorStop(1, `rgba(150, 110, 50, 0)`);

        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(0, 0, size, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }

      if (particles.length > 150) {
        particles.splice(0, particles.length - 150);
      }

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-9997"
      aria-hidden="true"
    />
  );
}