"use client";

import { useEffect, useRef } from "react";

export default function FlameCursor() {
  const dotRef = useRef<HTMLSpanElement>(null);
  const flameRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const flame = flameRef.current;
    if (!dot || !flame) return;

    const pointerQuery = window.matchMedia("(pointer: fine)");
    if (!pointerQuery.matches) return;

    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;
    let flameX = pointerX;
    let flameY = pointerY;
    let pressed = false;
    let raf: number | undefined;

    document.body.classList.add("custom-cursor-active");
    dot.style.opacity = "0";
    flame.style.opacity = "0";

    const render = () => {
      flameX += (pointerX - flameX) * 0.18;
      flameY += (pointerY - flameY) * 0.18;

      const flameScale = pressed ? 1.12 : 1;
      flame.style.transform = `translate3d(${flameX}px, ${flameY}px, 0) scale(${flameScale})`;

      raf = requestAnimationFrame(render);
    };

    raf = requestAnimationFrame(render);

    const handleMove = (event: MouseEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;

      dot.style.opacity = "1";
      flame.style.opacity = "0.92";
      dot.style.setProperty("--cursor-x", `${pointerX}px`);
      dot.style.setProperty("--cursor-y", `${pointerY}px`);
    };

    const handleLeave = () => {
      dot.style.opacity = "0";
      flame.style.opacity = "0";
    };

    const handleDown = () => {
      pressed = true;
      dot.style.setProperty("--cursor-scale", "0.82");
    };

    const handleUp = () => {
      pressed = false;
      dot.style.setProperty("--cursor-scale", "1");
    };

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mousedown", handleDown);
    document.addEventListener("mouseup", handleUp);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mousedown", handleDown);
      document.removeEventListener("mouseup", handleUp);
      if (raf !== undefined) {
        cancelAnimationFrame(raf);
      }
    };
  }, []);

  return (
    <div className="cursor-layer" aria-hidden>
      <span ref={flameRef} className="cursor-flame" />
      <span ref={dotRef} className="cursor-dot" />
    </div>
  );
}
