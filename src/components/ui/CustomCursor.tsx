"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isTouch =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    let mouseX = 0,
      mouseY = 0;
    let followerX = 0,
      followerY = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setVisible(true);
      cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;

      const t = e.target as HTMLElement;
      const isInteractive =
        t.tagName === "A" ||
        t.tagName === "BUTTON" ||
        !!t.closest("a") ||
        !!t.closest("button") ||
        t.classList.contains("cursor-pointer");
      setHovering(isInteractive);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    let raf: number;
    const loop = () => {
      followerX += (mouseX - followerX) * 0.15;
      followerY += (mouseY - followerY) * 0.15;
      follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        * {
          cursor: none !important;
        }
        @media (hover: none) {
          * {
            cursor: auto !important;
          }
        }
      `}</style>

      {/* Dot — inafuata papo hapo */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-9999 mix-blend-difference"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 0.3s",
          willChange: "transform",
        }}
      >
        <div
          className={`rounded-full bg-white transition-all duration-200 ${
            hovering ? "w-2.5 h-2.5" : "w-2 h-2"
          }`}
        />
      </div>

      {/* Ring — inafuata kwa smooth */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 pointer-events-none z-9998 mix-blend-difference"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 0.3s",
          willChange: "transform",
        }}
      >
        <div
          className={`rounded-full border border-white transition-all duration-300 ${
            hovering ? "w-14 h-14 bg-white/10" : "w-9 h-9"
          }`}
        />
      </div>
    </>
  );
}