import React from 'react';
import {WrapperRaw,WrapperHeading} from '../../wrappers'; // Assurez-vous que le chemin est correct
// import "./index.scss"

const _data = {
  title: 'Titre de la carte',
  text: 'Texte de la carte',
  imageUrl: 'https://via.placeholder.com/150',
  linkText: 'En savoir plus',
  linkUrl: '#',
}

export default ({ _, children, $ = _data,editorProps }) => {
  const { title, text, imageUrl, linkText, linkUrl } = $ || _ || children;

  return (
    <WrapperRaw $={{className:"card",editorProps}} >
      {imageUrl && <img src={imageUrl} alt={title} />}
      <section>
        {title && <WrapperHeading $={{lvl:5,editorProps}}>{title}</WrapperHeading>}
        {text && <WrapperRaw $={{elm:"p",editorProps}}>{text}</WrapperRaw>}
        {linkText && linkUrl && (
          <WrapperRaw $={{elm:"a",href:linkUrl,editorProps}}>{linkText}</WrapperRaw>
        )}
      </section>
    </WrapperRaw>
  );
};
