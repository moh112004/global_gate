import { useRef, useState, useEffect } from 'react';

export function useCounter(target, duration = 2200) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting && !started) { setStarted(true); obs.disconnect(); } },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(ease * target));
      if (p < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return [ref, count];
}
