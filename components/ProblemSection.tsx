"use client";

import { useEffect, useRef } from "react";
import { problemaItems } from "./data";

const problemIcons = ["♙", "◈", "✦", "▣", "⚑"];
const highlightWords = [
  "cosa comunicare",
  "direzione chiara",
  "iniziare",
  "abbastanza interessante",
  "partire",
];

function highlightText(text: string, phrase: string) {
  const parts = text.split(phrase);
  if (parts.length === 1) return text;

  return (
    <>
      {parts[0]}
      <span>{phrase}</span>
      {parts.slice(1).join(phrase)}
    </>
  );
}

function RoutePath() {
  return (
    <svg className="moving-map-path" viewBox="0 0 1760 340" preserveAspectRatio="none" aria-hidden="true">
      <path d="M 0 176 C 130 176 132 134 250 142 C 370 150 358 236 500 236 C 640 236 642 164 762 166 C 884 168 890 122 1004 130 C 1124 138 1112 226 1254 220 C 1390 214 1402 148 1524 152 C 1640 156 1662 176 1760 176" />
    </svg>
  );
}

export default function ProblemSection() {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    let groupWidth = 0;
    let offset = 0;
    let speed = 36;
    let lastTime = performance.now();
    let paused = false;
    let dragging = false;
    let startX = 0;
    let startY = 0;
    let startOffset = 0;
    let mode: "horizontal" | "vertical" | null = null;
    let resumeTimer: ReturnType<typeof setTimeout> | null = null;
    let rafId = 0;

    const setPausedClass = (value: boolean) => {
      viewport.classList.toggle("is-route-paused", value);
    };

    const measure = () => {
  const group = track.querySelector<HTMLElement>(".problem-route-group");
  if (!group) return;
  groupWidth = group.offsetWidth;
  offset = -groupWidth;
  applyTransform(false);
};

    const normalize = () => {
  if (!groupWidth) return;
  while (offset >= 0) offset -= groupWidth;
  while (offset < -groupWidth) offset += groupWidth;
};

    const applyTransform = (shouldNormalize = true) => {
      if (shouldNormalize) normalize();
      track.style.transform = `translate3d(${offset}px, 0, 0)`;
    };

    const pause = () => {
      if (resumeTimer) clearTimeout(resumeTimer);
      paused = true;
      setPausedClass(true);
    };

    const resumeSoon = (delay = 900) => {
      if (resumeTimer) clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => {
        if (!dragging) {
          paused = false;
          setPausedClass(false);
          lastTime = performance.now();
        }
      }, delay);
    };

    const tick = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      if (!paused && !dragging && groupWidth) {
        // LEFT → RIGHT: positive offset moves the entire route and cards to the right.
       offset -= speed * dt;
        applyTransform(true);
      }

      rafId = requestAnimationFrame(tick);
    };

    const onTouchStart = (event: TouchEvent) => {
      if (!event.touches[0]) return;
      dragging = true;
      mode = null;
      startX = event.touches[0].clientX;
      startY = event.touches[0].clientY;
      startOffset = offset;
      pause();
    };

    const onTouchMove = (event: TouchEvent) => {
      if (!dragging || !event.touches[0]) return;

      const x = event.touches[0].clientX;
      const y = event.touches[0].clientY;
      const dx = x - startX;
      const dy = y - startY;

      if (!mode) {
        if (Math.abs(dx) > 8 && Math.abs(dx) > Math.abs(dy)) mode = "horizontal";
        if (Math.abs(dy) > 8 && Math.abs(dy) > Math.abs(dx)) mode = "vertical";
      }

      if (mode === "vertical") return;

      if (mode === "horizontal") {
        event.preventDefault();
        offset = startOffset + dx;
        applyTransform(false);
      }
    };

    const onTouchEnd = () => {
      dragging = false;
      mode = null;
      applyTransform(true);
      resumeSoon(1000);
    };

    let mouseDown = false;

    const onMouseDown = (event: MouseEvent) => {
      mouseDown = true;
      dragging = true;
      startX = event.clientX;
      startOffset = offset;
      pause();
    };

    const onMouseMove = (event: MouseEvent) => {
      if (!mouseDown) return;
      offset = startOffset + (event.clientX - startX);
      applyTransform(false);
    };

    const onMouseUp = () => {
      if (!mouseDown) return;
      mouseDown = false;
      dragging = false;
      applyTransform(true);
      resumeSoon(900);
    };

    const onCardEnter = () => pause();
    const onCardLeave = () => resumeSoon(700);

    measure();
    rafId = requestAnimationFrame(tick);

    viewport.addEventListener("touchstart", onTouchStart, { passive: true });
    viewport.addEventListener("touchmove", onTouchMove, { passive: false });
    viewport.addEventListener("touchend", onTouchEnd, { passive: true });
    viewport.addEventListener("touchcancel", onTouchEnd, { passive: true });
    viewport.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("resize", measure);

    const cards = Array.from(viewport.querySelectorAll<HTMLElement>(".map-step"));
    cards.forEach((card) => {
      card.addEventListener("mouseenter", onCardEnter);
      card.addEventListener("mouseleave", onCardLeave);
    });

    return () => {
      cancelAnimationFrame(rafId);
      if (resumeTimer) clearTimeout(resumeTimer);
      viewport.removeEventListener("touchstart", onTouchStart);
      viewport.removeEventListener("touchmove", onTouchMove);
      viewport.removeEventListener("touchend", onTouchEnd);
      viewport.removeEventListener("touchcancel", onTouchEnd);
      viewport.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("resize", measure);
      cards.forEach((card) => {
        card.removeEventListener("mouseenter", onCardEnter);
        card.removeEventListener("mouseleave", onCardLeave);
      });
    };
  }, []);

  return (
    <section className="problema problem-map-section" id="problema">
      <div className="container">
        <div className="section-head center reveal problem-map-head">
          <span className="eyebrow">Il punto di partenza</span>
          <h2>
            Forse non ti manca il potenziale.<br />Ti manca una <span className="accent">mappa</span>.
          </h2>
        </div>
      </div>

      <div ref={viewportRef} className="problem-map-viewport reveal" aria-label="Problemi comuni prima di costruire un personal brand">
        <div ref={trackRef} className="problem-moving-track">
          {[0, 1, 2].map((groupIndex) => (
            <div className="problem-route-group" key={groupIndex} aria-hidden={groupIndex > 0 ? "true" : undefined}>
              <RoutePath />

              {problemaItems.map((item, index) => (
                <article className={`map-step map-step-${index + 1}`} key={`${groupIndex}-${item}`}>
                  <span className="map-step-number">{index + 1}</span>
                  <span className="map-step-icon">{problemIcons[index]}</span>
                  <p>{highlightText(item, highlightWords[index])}</p>
                  <span className="map-step-line" />
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
