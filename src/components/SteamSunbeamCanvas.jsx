import React, { useEffect, useRef } from 'react';

export default function SteamSunbeamCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse tracking
    let mouse = { x: width / 2, y: height / 2, active: false };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Particles for rising steam & golden embers
    const particleCount = 45;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 3 + 1,
        speedY: Math.random() * 0.4 + 0.1,
        speedX: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.4 + 0.1,
        color: Math.random() > 0.6 ? 'rgba(74, 124, 89, ' : 'rgba(217, 119, 54, ',
        sineOffset: Math.random() * Math.PI * 2,
      });
    }

    // Floating sunbeams setup
    let time = 0;

    const render = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      // Draw subtle ambient glow near top center
      const sunGradient = ctx.createRadialGradient(
        width * 0.5,
        height * 0.15,
        10,
        width * 0.5,
        height * 0.15,
        width * 0.65
      );
      sunGradient.addColorStop(0, 'rgba(254, 252, 248, 0.6)');
      sunGradient.addColorStop(0.5, 'rgba(223, 235, 213, 0.25)');
      sunGradient.addColorStop(1, 'rgba(250, 247, 242, 0)');

      ctx.fillStyle = sunGradient;
      ctx.fillRect(0, 0, width, height);

      // Mouse subtle interactive ripple glow
      if (mouse.active) {
        const mouseGlow = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          180
        );
        mouseGlow.addColorStop(0, 'rgba(142, 179, 142, 0.15)');
        mouseGlow.addColorStop(1, 'rgba(250, 247, 242, 0)');
        ctx.fillStyle = mouseGlow;
        ctx.fillRect(0, 0, width, height);
      }

      // Draw steam / golden ember particles
      particles.forEach((p) => {
        p.y -= p.speedY;
        p.x += Math.sin(time + p.sineOffset) * 0.4 + p.speedX;

        // Wrap around top/bottom
        if (p.y < -20) {
          p.y = height + 20;
          p.x = Math.random() * width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.opacity})`;
        ctx.shadowBlur = 12;
        ctx.shadowColor = p.color + '0.5)';
        ctx.fill();
        ctx.shadowBlur = 0;
      });

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
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-80"
    />
  );
}
