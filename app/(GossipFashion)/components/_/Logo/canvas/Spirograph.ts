export const Spirograph = (ctx: CanvasRenderingContext2D) => {
  let time = 0;
  const animate = () => {
    const R = 15; // Rayon extérieur
    const r = 5;  // Rayon intérieur
    const d = 8;  // Distance du point de dessin
    
    const x = (R - r) * Math.cos(time) + d * Math.cos((R - r) * time / r);
    const y = (R - r) * Math.sin(time) - d * Math.sin((R - r) * time / r);
    
    if(time === 0) ctx.clearRect(0, 0, 48, 48);
    
    ctx.beginPath();
    ctx.arc(x + 24, y + 24, 0.5, 0, Math.PI * 2);
    ctx.fillStyle = `hsl(${time * 50}, 70%, 50%)`;
    ctx.fill();
    
    time += 0.05;
    requestAnimationFrame(animate);
  };
  
  animate();
}; 