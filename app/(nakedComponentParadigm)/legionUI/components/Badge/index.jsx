import React from 'react';

const types = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning text-dark",
  "info text-dark",
  "light text-dark",
  "dark",
]
, positions = ["top-0 start-0","top-0 start-50","top-0 start-100","top-50 start-100","top-100 start-100","top-100 start-50","top-100 start-0","top-50 start-0"]
, _data = {content: "Nouveau", type: "info", pill: true,pos:1}
// , _data = {content: "Nouveau", type: "info", pill: true}

export default ({ _,children,$=_data }) => {
  const { content, type, pill, pos } = $||_||children
  , badgeClass = `badge bg-${types[type]||typeof type=="string"&&type||"primary"} ${pill ? 'rounded-pill' : ''} `
  , badgePosition = pos 
    ? positions[pos] + " position-absolute translate-middle badge rounded-pill bg-"+type 
    : ""
  ;

  return <span className={badgeClass + badgePosition }>{content}</span>
};
