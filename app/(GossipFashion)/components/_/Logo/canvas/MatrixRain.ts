export const MatrixRain = (ctx: CanvasRenderingContext2D) => {
  const chars = "01";
  const fontSize = 6;
  const columns = 48 / fontSize;
  const drops: number[] = new Array(Math.floor(columns)).fill(0);
  
  ctx.font = `${fontSize}px monospace`;
  
  const animate = () => {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, 48, 48);
    
    ctx.fillStyle = '#e11d48';
    
    drops.forEach((y, i) => {
      const char = chars[Math.floor(Math.random() * chars.length)];
      const x = i * fontSize;
      
      ctx.fillText(char, x, y);
      
      if(y > 48 && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i] += fontSize;
    });
    
    requestAnimationFrame(animate);
  };
  
  animate();
}; 