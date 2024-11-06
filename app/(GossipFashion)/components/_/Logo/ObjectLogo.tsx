type ObjectLogoProps = {
  data: {
    url: string
    type?: string
    width?: number
    height?: number
  }
}

const ObjectLogo = ({ data }: ObjectLogoProps) => {
  const { url, type = 'application/pdf', width = 24, height = 24 } = data;

  return (
    <object
      data={url}
      type={type}
      width={width}
      height={height}
    >
      <p>Votre navigateur ne prend pas en charge ce type de contenu.</p>
    </object>
  );
};

export default ObjectLogo; 