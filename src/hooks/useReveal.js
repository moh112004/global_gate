import { useRef, useState, useEffect } from 'react';

export function useReveal(delay = 0) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return {
    ref,
    style: {
      opacity: vis ? 1 : 0,
      transform: vis ? 'none' : 'translateY(28px)',
      transition: `opacity .72s ease ${delay}ms, transform .72s ease ${delay}ms`,
    },
  };
}
