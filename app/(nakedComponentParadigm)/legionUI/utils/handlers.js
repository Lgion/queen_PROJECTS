
const handleEditorClick = e => {
    e.target.contentEditable = true
}
const handleEditorBlur = (e,editorProps) => {
    const {$,setter,dataKey,dataComponentKey,dataMain,fn} = editorProps

    // $?.[dataMain]?.[dataKey] = fn()
    if ($ && $[dataMain] && $[dataMain][dataKey] && $[dataMain][dataKey][dataComponentKey]) 

    if ($ && $[dataMain]){
        if(typeof dataComponentKey == 'string'){
            if ($[dataMain][dataKey] && $[dataMain][dataKey][dataComponentKey]) 
                $[dataMain][dataKey][dataComponentKey] = fn();
            else
                $[dataMain][dataKey] = fn();
        }else if(Array.isArray(dataComponentKey)){
            
        }
    }
    setter(prev => ({
        [dataMain]: {
            ...{...prev[dataMain]}
            , ...{...$[dataMain]}
        }
    }))
    
}
const adminProps = editorProps => ({
    onClick:handleEditorClick
    , onBlur:e => {
        console.log(editorProps);
        handleEditorBlur(e,editorProps)
    }
})

export {adminProps}