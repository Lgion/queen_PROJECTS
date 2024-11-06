export const Kaleidoscope = (ctx: CanvasRenderingContext2D) => {
  let time = 0;
  const segments = 6;
  
  const animate = () => {
    ctx.clearRect(0, 0, 48, 48);
    
    for(let i = 0; i < segments; i++) {
      ctx.save();
      ctx.translate(24, 24);
      ctx.rotate((Math.PI * 2 / segments) * i + time);
      
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(15, 5);
      ctx.lineTo(10, 15);
      ctx.closePath();
      
      ctx.fillStyle = `hsl(${time * 100 + i * 60}, 70%, 50%)`;
      ctx.fill();
      
      ctx.restore();
    }
    
    time += 0.02;
    requestAnimationFrame(animate);
  };
  
  animate();
}; 