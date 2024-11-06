import { Scissors } from 'lucide-react';
import { motion } from 'framer-motion';
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
  const defaultTexts = ["L'Atelier", "Beauty Shop", "Salon de Beauté"];
  const defaultSlogans = ["Votre beauté, notre passion", "L'art de la beauté", "Excellence et élégance"];

  // Générer une combinaison aléatoire de propriétés
  const hasText = Math.random() < 0.5;
  const hasSecondaryText = Math.random() < 0.5;
  const hasVisual = Math.random() < 0.5;
  const hasCustomAnimation = Math.random() < 0.5;

  // Préparer les données visuelles si nécessaire
  const randomType = types[Math.floor(Math.random() * types.length)];
  const canvasAnimations = {
    ScissorsRotation,
    GravityParticles,
    Spirograph,
    ConcentricWaves,
    Kaleidoscope,
    MatrixRain
  };

  console.log("\n\n\n\nstaaaaaaaaaaaaaarto!");
  

  // Correction du typage pour l'accès aux animations canvas
  const randomAnimationKey = Object.keys(canvasAnimations)[
    Math.floor(Math.random() * Object.keys(canvasAnimations).length)
  ] as keyof typeof canvasAnimations;

  const defaultVisual: Record<typeof randomType, LogoVisualProps> = {
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
        draw: canvasAnimations[randomAnimationKey]
      }
    }
  };

  // Construire l'objet de retour en fonction des flags
  const result: LogoProps = {};
  console.log("hasText: "+hasText);
  console.log("hasSecondaryText: "+hasSecondaryText);
  console.log("hasVisual: "+hasVisual);
  console.log("hasCustomAnimation: "+hasCustomAnimation);
  

  if (hasText) {
    result.text = defaultTexts[Math.floor(Math.random() * defaultTexts.length)];
  }

  if (hasSecondaryText && hasText) { // secondaryText nécessite text
    result.secondaryText = defaultSlogans[Math.floor(Math.random() * defaultSlogans.length)];
  }

  if (hasVisual && !hasSecondaryText) { // visual est ignoré si secondaryText est présent
    console.log(defaultVisual);
    console.log(randomType);
    console.log(defaultVisual[randomType]);
    
    
    
    result.visual = defaultVisual[randomType];
  }

  if (hasCustomAnimation) {
    result.CustomAnimation = motion.div;
  }

  return result;
};

const Logo = (props: LogoProps) => {
  // Si aucune prop n'est fournie, utiliser les données générées
  const logoData = Object.keys(props).length === 0 ? generateDefaultLogoData() : props;
  const { text, secondaryText, visual, CustomAnimation } = logoData;

  console.log(Object.keys(props));
  console.log(logoData);
  
  
  // Cas 1: Deux textes (ignore le visuel)
  if (text && secondaryText) {
    console.log(1);
    
    return (
      <figure>
        <TextLogo animation={CustomAnimation}>{text}</TextLogo>
        <figcaption>{secondaryText}</figcaption>
      </figure>
    );
  }

  // Cas 4: Texte avec animation personnalisée
  if ((text||secondaryText) && CustomAnimation) {
    console.log(4);
    return <CustomAnimation>{text}</CustomAnimation>;
  }

  // Cas 2: Texte seul
  if ((text||secondaryText) && !visual) {
    console.log(2);
    return <TextLogo animation={CustomAnimation}>{text}</TextLogo>;
  }

  

  // Cas 3: Texte + Visuel (texte comme slogan)
  if (text && visual) {
    console.log(3);
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

  // Cas 5: Seulement le visuel
  if (!text && visual) {
    console.log(5);
    const VisualComponent = {
      'image': ImageLogo,
      'svg': SvgLogo,
      'canvas': CanvasLogo,
      'object': ObjectLogo
    }[visual.type];

    return (
      <figure>
        <VisualComponent data={visual.data} animation={visual.animation} />
      </figure>
    );
  }

  // Cas 6: Seulement CustomAnimation défini
  if (CustomAnimation && !text && !visual) {
    console.log(6);
    return <CustomAnimation>Text Démonstratif</CustomAnimation>;
  }
  
  // Cas 4: Par défaut - SVG simple
    console.log(4);
    return <Scissors className="h-8 w-8" />;
};

export default Logo; 