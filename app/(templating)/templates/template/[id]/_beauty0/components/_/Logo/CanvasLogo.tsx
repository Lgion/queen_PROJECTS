import { useEffect, useRef } from 'react';

type CanvasLogoProps = {
  data: {
    width?: number
    height?: number
    draw: (ctx: CanvasRenderingContext2D) => void
  }
}

const CanvasLogo = ({ data }: CanvasLogoProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { width = 24, height = 24, draw } = data;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Execute custom drawing function
    draw(ctx);
  }, [width, height, draw]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
    />
  );
};

export default CanvasLogo; 