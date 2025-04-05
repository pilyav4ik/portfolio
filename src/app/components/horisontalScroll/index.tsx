'use client'; // если используешь app/

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HorisontalScroll() {
  const racesWrapperRef = useRef<HTMLDivElement>(null);
  const racesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = racesWrapperRef.current;
    const races = racesRef.current;

    if (!wrapper || !races) return;

    const ctx = gsap.context(() => {
      const totalScroll = races.scrollWidth - wrapper.offsetWidth;

      gsap.to(races, {
        x: () => `-${totalScroll}px`,
        ease: 'none',
        scrollTrigger: {
          trigger: wrapper,
          start: 'top top',
          end: () => `+=${races.scrollWidth}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, wrapper);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="racesWrapper"
      ref={racesWrapperRef}
      style={{
        overflow: 'hidden',
        position: 'relative',
        height: '100vh',
      }}
    >
      <div
        className="races"
        ref={racesRef}
        style={{
          display: 'flex',
          gap: '100px',
          whiteSpace: 'nowrap',
          fontSize: '3rem',
          padding: '2rem',
        }}
      >
        <h2>Monaco</h2>
        <h2>Austria</h2>
        <h2>Hungary</h2>
        <h2>Netherlands</h2>
        <h2>Japan</h2>        <h2>Monaco</h2>
        <h2>Austria</h2>
        <h2>Hungary</h2>
        <h2>Netherlands</h2>

      </div>
    </div>
  );
}
