"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [spark, setSpark] = useState(false);

  useEffect(() => {
    const el = cursorRef.current;
    if (!el) return;
    let raf = 0;
    const pos = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };
    const onClick = () => {
      setSpark(true);
      setTimeout(() => setSpark(false), 260);
    };

    const loop = () => {
      pos.x += (target.x - pos.x) * 0.22;
      pos.y += (target.y - pos.y) * 0.22;
      el.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onClick);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onClick);
    };
  }, []);

  return (
    <div className="phoenix-cursor" ref={cursorRef} aria-hidden>
      <svg
        className="phoenix-svg"
        width="42"
        height="42"
        viewBox="0 0 42 42"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="wing" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffe9b8" />
            <stop offset="55%" stopColor="#ff9a3f" />
            <stop offset="100%" stopColor="#e24a2a" />
          </linearGradient>
          <linearGradient id="body" x1="30%" y1="0%" x2="70%" y2="100%">
            <stop offset="0%" stopColor="#fff0c8" />
            <stop offset="60%" stopColor="#ff9c42" />
            <stop offset="100%" stopColor="#d63f23" />
          </linearGradient>
        </defs>

        <g className="wing wing-left">
          <path
            d="M16 20 C9 18,6 14,7 9 C10 12,13 14,17 15 Z"
            fill="url(#wing)"
            opacity="0.96"
          />
        </g>
        <g className="wing wing-right">
          <path
            d="M26 20 C33 18,36 14,35 9 C32 12,29 14,25 15 Z"
            fill="url(#wing)"
            opacity="0.96"
          />
        </g>

        <g className="body">
          <path
            d="M17 10 C18 7,24 7,25 10 L27 17 C28 22,26 27,21 30 C16 27,14 22,15 17 Z"
            fill="url(#body)"
            opacity="0.98"
          />
          <path d="M20.5 9 L21.5 7 L23 9 Z" fill="#f3d08c" />
          <circle cx="20.5" cy="12.5" r="0.8" fill="#3b1c07" />
          <circle cx="22.8" cy="12.5" r="0.8" fill="#3b1c07" />
        </g>

        <g className="tail">
          <path
            d="M19 28 C17 31,16 34,17 37 C19 35,21 33,23 31 C22 31,20 30,19 28 Z"
            fill="url(#wing)"
            opacity="0.9"
          />
        </g>
      </svg>

      <div className={`spark ${spark ? "spark-active" : ""}`} />
    </div>
  );
}
