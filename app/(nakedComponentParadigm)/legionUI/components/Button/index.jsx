import { WrapperRaw } from "../../wrappers";

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
, _data = {content:"okok",type:5}
// , _data = {}

export default ({_,children,$=_data}) => {
    const {type,content,props} = $||_||children
    , {
        tnw/*text-nowrap*/=false
        ,tag:elm="button"
        ,className="btn btn-" + (types[type]||typeof type=="string"&&type) + (tnw?" text-nowrap":"")
    } = $||_||children
    ;

    console.log("children:",children);
    console.log("content:",content);
    console.log("props",props);

    // alert("Btn ... IL MANQUE: ");
    // alert("Block button", "Disabled state", "sizes", "outline", "button can be either: a, input, button");

    return <WrapperRaw $={{elm,className,props}} _={children||content} />
};