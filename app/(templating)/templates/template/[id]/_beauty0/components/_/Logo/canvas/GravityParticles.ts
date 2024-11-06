export const GravityParticles = (ctx: CanvasRenderingContext2D) => {
  const particles: Array<{x: number, y: number, vx: number, vy: number}> = [];
  const numParticles = 20;
  
  for(let i = 0; i < numParticles; i++) {
    particles.push({
      x: Math.random() * 48,
      y: Math.random() * 48,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2
    });
  }

  const animate = () => {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.fillRect(0, 0, 48, 48);
    
    particles.forEach(p => {
      const dx = 24 - p.x;
      const dy = 24 - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      p.vx += dx / dist * 0.1;
      p.vy += dy / dist * 0.1;
      
      p.x += p.vx;
      p.y += p.vy;
      
      p.vx *= 0.99;
      p.vy *= 0.99;
      
      ctx.beginPath();
      ctx.arc(p.x, p.y, 1, 0, Math.PI * 2);
      ctx.fillStyle = '#e11d48';
      ctx.fill();
    });
    
    requestAnimationFrame(animate);
  };
  
  animate();
}; 