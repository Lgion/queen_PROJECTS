type SvgLogoProps = {
  data: {
    content: string
    width?: number
    height?: number
    className?: string
  }
}

const SvgLogo = ({ data }: SvgLogoProps) => {
  const { content, width = 24, height = 24, className = '' } = data;

  return (
    <div 
      className={className}
      dangerouslySetInnerHTML={{ __html: content }}
      style={{ width, height }}
    />
  );
};

export default SvgLogo; 