export const ConcentricWaves = (ctx: CanvasRenderingContext2D) => {
  let time = 0;
  const animate = () => {
    ctx.clearRect(0, 0, 48, 48);
    
    for(let i = 0; i < 5; i++) {
      const radius = (i * 5 + time % 5) * 2;
      const alpha = 1 - (radius / 48);
      
      if(alpha > 0) {
        ctx.beginPath();
        ctx.arc(24, 24, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(225, 29, 72, ${alpha})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    }
    
    time += 0.05;
    requestAnimationFrame(animate);
  };
  
  animate();
}; 