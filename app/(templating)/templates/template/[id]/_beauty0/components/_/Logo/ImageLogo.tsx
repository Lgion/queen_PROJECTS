import Image from 'next/image';
import { motion } from 'framer-motion';

type ImageLogoProps = {
  data: {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
    className?: string;
    animation?: {
      type: string;
      params: any;
    };
  };
};

const ImageLogo = ({ data }: ImageLogoProps) => {
  const {
    src,
    alt = 'Logo',
    width = 120,
    height = 48,
    className = '',
    animation
  } = data;

  const Wrapper = animation ? motion.div : 'div';
  const animationProps = animation?.type === 'hover' ? {
    whileHover: { scale: animation.params.scale || 1.1 },
    transition: { duration: animation.params.duration || 0.3 }
  } : {};

  return (
    <Wrapper {...animationProps} className={className}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        quality={90}
        priority
      />
    </Wrapper>
  );
};

export default ImageLogo; 