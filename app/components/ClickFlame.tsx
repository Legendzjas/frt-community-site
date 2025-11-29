"use client";

import { useEffect } from "react";

export default function ClickFlame() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const clickable = target.closest("a, button");
      if (!clickable) return;

      const burst = document.createElement("span");
      burst.className = "click-flame-burst";

      const size = 140 + Math.random() * 40;
      const rotation = Math.random() * 90 - 45;

      burst.style.width = `${size}px`;
      burst.style.height = `${size}px`;
      burst.style.left = `${event.clientX}px`;
      burst.style.top = `${event.clientY}px`;
      burst.style.setProperty("--flame-rotation", `${rotation}deg`);

      document.body.appendChild(burst);
      burst.addEventListener("animationend", () => {
        burst.remove();
      });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
