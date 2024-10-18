
const handleEditorClick = e => {
    e.target.contentEditable = true
}
const handleEditorBlur = (e,$data,setter,dataId) => {
    $data.title = e.target.textContent
    setter(prev => ({[dataId]:{...{...prev[dataId]}, ...$data}}))
}

export {handleEditorClick, handleEditorBlur}