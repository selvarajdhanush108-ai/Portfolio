import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices or reduced motion
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (hasTouch || prefersReducedMotion) return;

    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;
    let animationId: number;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable =
          target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.closest('a') !== null ||
          target.closest('button') !== null ||
          window.getComputedStyle(target).cursor === 'pointer';
        setIsPointer(isClickable);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;
      setPosition({ x: currentX, y: currentY });
      animationId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: 'width 0.2s, height 0.2s, background-color 0.2s',
      }}
    >
      <div
        style={{
          width: isPointer ? '28px' : '10px',
          height: isPointer ? '28px' : '10px',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: isPointer ? 'rgba(99, 102, 241, 0.2)' : 'rgba(56, 189, 248, 0.8)',
          border: isPointer ? '1.5px solid var(--accent-indigo)' : 'none',
          boxShadow: isPointer ? '0 0 15px rgba(99, 102, 241, 0.4)' : '0 0 8px rgba(56, 189, 248, 0.6)',
          transition: 'all 0.15s ease-out',
        }}
      />
    </div>
  );
};
