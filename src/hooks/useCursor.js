// src/hooks/useCursor.js
import { useEffect, useRef } from 'react';

function useCursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const onMove = (e) => {
      dot.style.left  = e.clientX + 'px';
      dot.style.top   = e.clientY + 'px';
      ring.style.left = e.clientX + 'px';
      ring.style.top  = e.clientY + 'px';
    };

    const onEnter = () => {
      dot.classList.add('hovered');
      ring.classList.add('hovered');
    };

    const onLeave = () => {
      dot.classList.remove('hovered');
      ring.classList.remove('hovered');
    };

    window.addEventListener('mousemove', onMove);

    // Apply hover effect to all interactive elements
    const targets = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, .project-card'
    );
    targets.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
      targets.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return { dotRef, ringRef };
}

export default useCursor;