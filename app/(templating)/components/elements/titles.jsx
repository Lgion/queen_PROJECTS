
export default function H1({data={textContent:"QUEEN"}}) {
    return <h1>
        {/* {textContent||"QUEEN"} */}
        {data.textContent}
    </h1>
}
