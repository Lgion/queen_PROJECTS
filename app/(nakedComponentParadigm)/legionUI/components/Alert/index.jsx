import React, { useState } from 'react';
import {WrapperRaw,WrapperHeading} from "../../wrappers"
import Btn from "../Button"


const alertColors = {
  primary: 'alert-primary',
  secondary: 'alert-secondary',
  success: 'alert-success',
  danger: 'alert-danger',
  warning: 'alert-warning',
  info: 'alert-info',
  light: 'alert-light',
  dark: 'alert-dark',
}
, _data = { 
  type: "danger", // paramètre requis
  content: "Contenu de l'alert", // paramètre requis
  dismissible: true, // paramètre requis
  _contentPositionWhileAdditionalContentOn:3, // paramètre d'option de configuration
  ___svg: 2, // paramètre de configuration
  ___additionalContent: [ // paramètre de configuration
    { type: 'heading', content: 'Titre supplémentaire pour Alert', lvl: 5 },
    { type: 'divider' },
    { type: 'paragraph', content: 'Paragraphe supplémentaire pour Alert', elm: "div", ___svg: 1 },
  ]
}



export default ({ _,children,$ = _data,editorProps }) => {
  const { type, content, dismissible, ___svg: svg, ___additionalContent: additionalContent} = $||_||children
  const alertClass = `alert ${alertColors[type] || 'alert-primary'}`;
  const {  
    _contentPositionWhileAdditionalContentOn: contentPositionWhileAdditionalContentOn = 2 
    , className= `${alertClass} ${dismissible ? 'alert-dismissible fade show' : ''}`
  } = $||_||children;
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  if (!isVisible) 
    return null;

  return (
    <WrapperRaw $={{className,props:{role:"alert"}}} >
      {additionalContent 
        ? renderWithAdditionalContent(additionalContent, {content, contentPositionWhileAdditionalContentOn,svg,editorProps})
        : svg!==undefined
          ? <WrapperRaw $={{___svg:svg,editorProps}}>{content}</WrapperRaw>
          : <WrapperRaw $={{editorProps}}>{content}</WrapperRaw>
        
      }
      {dismissible && (
        <Btn 
          $={{props: {
            type:"button" ,
            className:"btn-close" ,
            'data-bs-dismiss':"alert" ,
            'aria-label':"Close",
            onClick:handleDismiss
          }}}
        ></Btn>
      )}
  
    </WrapperRaw>
  );
};



const renderWithAdditionalContent = (additionalContent,options) => additionalContent.map(
  (item, index) => {
    console.log("options:",options);
    const tmp = []
    , {contentPositionWhileAdditionalContentOn,svg,content,editorProps} = options
    , tmpPushXORSvg = () => {
        tmp.push(svg !== undefined
          ? <WrapperRaw key={`content_after_${index}`} $={{___svg:svg,editorProps}} _={content} />
          : <WrapperRaw key={`content_after_${index}`} $={{editorProps}}>{content}</WrapperRaw>
        );
    }

    if(index === contentPositionWhileAdditionalContentOn) tmpPushXORSvg()
    
    switch(item.type) {
      case 'heading':
        tmp.push(<WrapperHeading key={`alert_h_${index}`} children={item.content} $={{lvl:item.lvl,editorProps}} />);
        break;
      case 'paragraph':
        tmp.push(<WrapperRaw key={`alert_p_${index}`} _={item.content} $={{elm:item.elm, ___svg:item.___svg,editorProps}} />);
        break;
      case 'divider':
        tmp.push(<Divider key={`alert_divider_${index}`} />);
        break;
      default:
        tmp.push(null);
        break;
    }

    if(contentPositionWhileAdditionalContentOn === (index+1)) tmpPushXORSvg()

    return tmp;
  }
);







// const Paragraph = ({ content, elm = "p", svg }) => React.createElement(elm, { className: "alert-additional-paragraph" }, svg 
//     ? (
//       <>
//         <SvgPaths><use href={"#"+$svgs[svg]}/></SvgPaths>
//         <span>{content}</span>
//       </>
//     ) 
//     : content
//   );

const Divider = () => React.createElement("hr", {className:"alert-divider"},);
