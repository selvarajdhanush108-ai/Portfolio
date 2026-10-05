import React, { useEffect, useRef } from 'react';

export const InteractiveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Skip heavy animation on very small screens
    const isMobile = window.innerWidth < 768;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 3;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Grid spacing & dots
    const gridSize = isMobile ? 48 : 40;

    let time = 0;

    const render = () => {
      time += 0.015;

      // Smooth mouse follow
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Check current theme
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';

      const dotColor = isLight ? 'rgba(15, 23, 42, 0.07)' : 'rgba(255, 255, 255, 0.05)';
      const activeDotColor = isLight ? 'rgba(79, 70, 229, 0.35)' : 'rgba(99, 102, 241, 0.45)';

      const startX = 0;
      const startY = 0;

      for (let x = startX; x < width; x += gridSize) {
        for (let y = startY; y < height; y += gridSize) {
          const dx = mouseX - x;
          const dy = mouseY - y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Interactive spotlight radius
          const maxDist = isMobile ? 140 : 220;

          if (dist < maxDist) {
            const factor = 1 - dist / maxDist;
            const dotSize = 1.2 + factor * 2.2;
            ctx.beginPath();
            ctx.arc(x, y, dotSize, 0, Math.PI * 2);
            ctx.fillStyle = activeDotColor;
            ctx.fill();
          } else {
            ctx.beginPath();
            ctx.arc(x, y, 0.85, 0, Math.PI * 2);
            ctx.fillStyle = dotColor;
            ctx.fill();
          }
        }
      }

      // Subtle ambient top-center gradient aura
      const grad = ctx.createRadialGradient(
        width * 0.5,
        height * 0.15,
        10,
        width * 0.5,
        height * 0.15,
        width * 0.6
      );
      grad.addColorStop(0, isLight ? 'rgba(79, 70, 229, 0.05)' : 'rgba(99, 102, 241, 0.08)');
      grad.addColorStop(1, 'transparent');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="bg-canvas-container" aria-hidden="true">
      <canvas ref={canvasRef} className="bg-canvas" />
    </div>
  );
};
