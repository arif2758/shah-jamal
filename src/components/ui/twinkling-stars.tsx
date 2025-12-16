// src/components/ui/twinkling-stars.tsx
"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  pulseSpeed: number;
  pulsePhase: number;
  colorHue: number; // For light mode variety
}

export function TwinklingStars() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();
  const starsRef = useRef<Star[]>([]);
  const animationFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Resize canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Generate stars (more in light mode for better visibility)
    const starCount = window.innerWidth < 768 ? 50 : 80;
    
    starsRef.current = Array.from({ length: starCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.5 + 0.5, // 0.5-2px
      opacity: Math.random() * 0.6 + 0.4, // 0.4-1.0
      pulseSpeed: Math.random() * 0.02 + 0.01,
      pulsePhase: Math.random() * Math.PI * 2,
      colorHue: Math.random() * 60 + 200, // Blue to purple (200-260)
    }));

    // Draw 4-pointed star shape
    const drawStar = (
      cx: number,
      cy: number,
      spikes: number,
      outerRadius: number,
      innerRadius: number
    ) => {
      let rot = (Math.PI / 2) * 3;
      let x = cx;
      let y = cy;
      const step = Math.PI / spikes;

      ctx.beginPath();
      ctx.moveTo(cx, cy - outerRadius);
      
      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
      }
      
      ctx.lineTo(cx, cy - outerRadius);
      ctx.closePath();
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      starsRef.current.forEach((star) => {
        // Pulsing effect
        star.pulsePhase += star.pulseSpeed;
        const pulse = Math.sin(star.pulsePhase) * 0.4 + 0.6; // 0.2-1.0
        const currentOpacity = star.opacity * pulse;
        const currentSize = star.size * (0.8 + pulse * 0.4);

        // Theme-based rendering
        if (resolvedTheme === "dark") {
          // Dark mode: White/Silver stars
          const starColor = "255, 255, 255";
          
          ctx.shadowBlur = 6;
          ctx.shadowColor = `rgba(${starColor}, ${currentOpacity * 0.6})`;
          ctx.fillStyle = `rgba(${starColor}, ${currentOpacity})`;
          
          drawStar(star.x, star.y, 4, currentSize * 2, currentSize * 0.5);
          ctx.fill();
          ctx.shadowBlur = 0;
          
        } else {
          // Light mode: Colorful stars with soft hues
          const saturation = 70; // Vibrant but not harsh
          const lightness = 55; // Medium brightness
          
          // Gradient for softer appearance
          const gradient = ctx.createRadialGradient(
            star.x, 
            star.y, 
            0,
            star.x, 
            star.y, 
            currentSize * 3
          );
          
          gradient.addColorStop(
            0, 
            `hsla(${star.colorHue}, ${saturation}%, ${lightness}%, ${currentOpacity * 0.8})`
          );
          gradient.addColorStop(
            0.5, 
            `hsla(${star.colorHue}, ${saturation - 10}%, ${lightness + 10}%, ${currentOpacity * 0.5})`
          );
          gradient.addColorStop(
            1, 
            `hsla(${star.colorHue}, ${saturation - 20}%, ${lightness + 20}%, 0)`
          );

          // Soft glow
          ctx.shadowBlur = 8;
          ctx.shadowColor = `hsla(${star.colorHue}, ${saturation}%, ${lightness}%, ${currentOpacity * 0.4})`;
          ctx.fillStyle = gradient;
          
          drawStar(star.x, star.y, 4, currentSize * 2.5, currentSize * 0.6);
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}