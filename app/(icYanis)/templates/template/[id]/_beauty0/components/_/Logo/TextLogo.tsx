type TextLogoProps = {
  children: string
  animation?: React.ComponentType
}

const TextLogo = ({ children, animation: Animation }: TextLogoProps) => {
  if (Animation) {
    return (
      <Animation>
        <span className="text-xl font-bold">{children}</span>
      </Animation>
    );
  }

  return <span className="text-xl font-bold">{children}</span>;
};

export default TextLogo; 