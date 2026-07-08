"use client";

import { useEffect, useRef, useState } from "react";

type MarqueeProps = {
  children: React.ReactNode;
  duration?: number;
};

const CLONE_SETS = 5;

export default function Marquee({ children, duration = 34 }: MarqueeProps) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [copies] = useState(() => Array.from({ length: CLONE_SETS }));

  useEffect(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;

    let setWidth = 0;
    let speed = 24;
    let offset = 0;
    let paused = false;
    let dragging = false;
    let startX = 0;
    let startY = 0;
    let startOffset = 0;
    let dragMode: "horizontal" | "vertical" | null = null;
    let lastTime = performance.now();
    let resumeTimer: ReturnType<typeof setTimeout> | null = null;
    let animationFrame = 0;
    let mouseDown = false;

    function normalizeOffset() {
      if (!setWidth) return;
      while (offset <= -setWidth * 3) offset += setWidth;
      while (offset >= -setWidth) offset -= setWidth;
    }

    function applyTransform(shouldNormalize = true) {
      if (shouldNormalize) normalizeOffset();
      track!.style.transform = `translate3d(${offset}px, 0, 0)`;
    }

    function measure() {
      setWidth = track!.scrollWidth / CLONE_SETS;
      speed = setWidth / duration;
      offset = -setWidth * 2;
      applyTransform();
    }

    function pause() {
      if (resumeTimer) clearTimeout(resumeTimer);
      paused = true;
      wrap!.classList.add("is-paused");
    }

    function resumeSoon(delay = 1200) {
      if (resumeTimer) clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => {
        if (!dragging) {
          paused = false;
          wrap!.classList.remove("is-paused", "is-dragging");
          lastTime = performance.now();
        }
      }, delay);
    }

    function tick(now: number) {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;
      if (!paused && !dragging && setWidth) {
        offset -= speed * dt;
        applyTransform();
      }
      animationFrame = requestAnimationFrame(tick);
    }

    const onResize = () => setTimeout(measure, 150);
    const onTouchStart = (e: TouchEvent) => {
      if (!e.touches[0]) return;
      dragging = true;
      dragMode = null;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      startOffset = offset;
      pause();
      wrap.classList.add("is-dragging");
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!dragging || !e.touches[0]) return;
      const x = e.touches[0].clientX;
      const y = e.touches[0].clientY;
      const dx = x - startX;
      const dy = y - startY;
      if (!dragMode) {
        if (Math.abs(dx) > 8 && Math.abs(dx) > Math.abs(dy)) dragMode = "horizontal";
        else if (Math.abs(dy) > 8 && Math.abs(dy) > Math.abs(dx)) dragMode = "vertical";
      }
      if (dragMode === "vertical") return;
      if (dragMode === "horizontal") {
        e.preventDefault();
        offset = startOffset + dx;
        applyTransform(false);
      }
    };
    const onTouchEnd = () => {
      dragging = false;
      dragMode = null;
      wrap.classList.remove("is-dragging");
      applyTransform(true);
      resumeSoon(1200);
    };
    const onMouseDown = (e: MouseEvent) => {
      mouseDown = true;
      dragging = true;
      startX = e.clientX;
      startOffset = offset;
      pause();
      wrap.classList.add("is-dragging");
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!mouseDown) return;
      const dx = e.clientX - startX;
      offset = startOffset + dx;
      applyTransform(false);
    };
    const onMouseUp = () => {
      if (!mouseDown) return;
      mouseDown = false;
      dragging = false;
      wrap.classList.remove("is-dragging");
      applyTransform(true);
      resumeSoon(1200);
    };

    requestAnimationFrame(() => {
      measure();
      animationFrame = requestAnimationFrame(tick);
    });

    window.addEventListener("resize", onResize);
    wrap.addEventListener("touchstart", onTouchStart, { passive: true });
    wrap.addEventListener("touchmove", onTouchMove, { passive: false });
    wrap.addEventListener("touchend", onTouchEnd, { passive: true });
    wrap.addEventListener("touchcancel", onTouchEnd, { passive: true });
    wrap.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    const canHover = window.matchMedia("(hover:hover)").matches;
    if (canHover) {
      wrap.addEventListener("mouseenter", pause);
      wrap.addEventListener("mouseleave", () => resumeSoon(800));
    }

    return () => {
      cancelAnimationFrame(animationFrame);
      if (resumeTimer) clearTimeout(resumeTimer);
      window.removeEventListener("resize", onResize);
      wrap.removeEventListener("touchstart", onTouchStart);
      wrap.removeEventListener("touchmove", onTouchMove);
      wrap.removeEventListener("touchend", onTouchEnd);
      wrap.removeEventListener("touchcancel", onTouchEnd);
      wrap.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [duration]);

  return (
    <div className="marquee-wrap reveal" ref={wrapRef}>
      <div className="marquee-track" ref={trackRef}>
        {copies.map((_, index) => (
          <div className="marquee-set" key={index} aria-hidden={index > 0 ? "true" : undefined}>
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}
