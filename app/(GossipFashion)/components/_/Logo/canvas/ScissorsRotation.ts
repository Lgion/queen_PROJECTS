export const ScissorsRotation = (ctx: CanvasRenderingContext2D) => {
  let time = 0;
  
  const animate = () => {
    ctx.clearRect(0, 0, 48, 48);
    
    const centerX = 24;
    const centerY = 24;
    const radius = 15;
    const numScissors = 8;
    
    for (let i = 0; i < numScissors; i++) {
      const angle = (time + (i * (Math.PI * 2) / numScissors));
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      
      const hue = (time * 50 + i * 45) % 360;
      ctx.strokeStyle = `hsl(${hue}, 70%, 50%)`;
      ctx.lineWidth = 2;
      
      ctx.beginPath();
      ctx.moveTo(-5, -5);
      ctx.lineTo(5, 5);
      ctx.moveTo(-5, 5);
      ctx.lineTo(5, -5);
      ctx.stroke();
      
      ctx.restore();
    }
    
    ctx.beginPath();
    ctx.arc(centerX, centerY, 5, 0, Math.PI * 2);
    ctx.fillStyle = '#e11d48';
    ctx.fill();
    
    time += 0.02;
    requestAnimationFrame(animate);
  };
  
  animate();
}; 