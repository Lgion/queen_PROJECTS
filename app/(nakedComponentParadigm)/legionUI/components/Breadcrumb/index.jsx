import React from 'react';
import { WrapperList } from '../../wrappers';

const _data= {
  items: [
    { content: "Accueil", href: "/" },
    { content: "Bibliothèque", href: "/library" },
    { content: "Données", href: "#" },
  ]
}

export default ({ _,children,$=_data }) => {
  const { items } = $||_||children
  , { elm="ol",className="breadcrumb",subElmCn="breadcrumb-item" } = $||_||children
  ;
  // , className={`breadcrumb-item ${index === items.length - 1 ? 'active' : ''}`}
  // console.log("breadcrumb is here");
  // console.log("subElmCn:",subElmCn);
  return (
    <nav aria-label="breadcrumb" style={{"--bs-breadcrumb-divider": '>'}}>
      <WrapperList $={{items:breadcrumbItems(items),elm,className,subElmCn}} />
    </nav>
  );
};



const breadcrumbItems = (items,options) => items.map((item, index) => <React.Fragment key={index}>
    {index === items.length - 1 ? (
      item.content
    ) : (
      <a href={item.href}>{item.content}</a>
    )}
  </React.Fragment>
)


