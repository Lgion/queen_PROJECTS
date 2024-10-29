import { Scissors } from 'lucide-react';
import TextLogo from './TextLogo';
import ImageLogo from './ImageLogo';
import SvgLogo from './SvgLogo';
import CanvasLogo from './CanvasLogo';
import ObjectLogo from './ObjectLogo';
import { ScissorsRotation, GravityParticles, Spirograph, ConcentricWaves, Kaleidoscope, MatrixRain } from './canvas';

type LogoVisualProps = {
  type: 'image' | 'svg' | 'canvas' | 'object'
  data: any
  animation?: {
    type: string
    params: any
  }
}

type LogoProps = {
  text?: string
  secondaryText?: string
  visual?: LogoVisualProps
  CustomAnimation?: React.ComponentType
}

// Générateur de données par défaut
const generateDefaultLogoData = (): LogoProps => {
  const types = ['image', 'svg', 'canvas'] as const;
  const randomType = types[Math.floor(Math.random() * types.length)];

  const canvasAnimations = {
    ScissorsRotation,
    GravityParticles,
    Spirograph,
    ConcentricWaves,
    Kaleidoscope,
    MatrixRain
  };

  const defaultData: Record<typeof randomType, LogoVisualProps> = {
    image: {
      type: 'image',
      data: {
        src: '/assets/tmp_logo.avif',
        alt: 'Logo par défaut',
        width: 120,
        height: 48,
        animation: {
          type: 'hover',
          params: {
            scale: 1.1,
            duration: 0.3
          }
        }
      }
    },
    svg: {
      type: 'svg',
      data: {
        content: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>`,
        width: 48,
        height: 48,
        className: 'text-rose-600'
      }
    },
    canvas: {
      type: 'canvas',
      data: {
        width: 48,
        height: 48,
        draw: canvasAnimations[
          Object.keys(canvasAnimations)[
            Math.floor(Math.random() * Object.keys(canvasAnimations).length)
          ]
        ]
      }
    }
  };

  return {
    visual: defaultData[randomType]
  };
};

const Logo = (props: LogoProps) => {
  // Si aucune prop n'est fournie, utiliser les données générées
  const logoData = Object.keys(props).length === 0 ? generateDefaultLogoData() : props;
  const { text, secondaryText, visual, CustomAnimation } = logoData;

  console.log(Object.keys(props).length);
  console.log(logoData);
  
  
  // Cas 1: Deux textes (ignore le visuel)
  if (text && secondaryText) {
    return (
      <figure>
        <TextLogo animation={CustomAnimation}>{text}</TextLogo>
        <figcaption>{secondaryText}</figcaption>
      </figure>
    );
  }

  // Cas 2: Texte seul
  if (text && !visual) {
    return <TextLogo animation={CustomAnimation}>{text}</TextLogo>;
  }

  // Cas 3: Texte + Visuel (texte comme slogan)
  if (text && visual) {
    const VisualComponent = {
      'image': ImageLogo,
      'svg': SvgLogo,
      'canvas': CanvasLogo,
      'object': ObjectLogo
    }[visual.type];

    return (
      <figure>
        <VisualComponent data={visual.data} animation={visual.animation} />
        <figcaption>{text}</figcaption>
      </figure>
    );
  }

  // Cas 4: Par défaut - SVG simple
  return <Scissors className="h-8 w-8" />;
};

export default Logo; 