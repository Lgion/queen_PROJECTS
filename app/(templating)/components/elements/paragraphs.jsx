
export default function P({data={textContent:"Il faut: "}}) {
    return <p>
        {/* {textContent||"Il faut: "} */}
        {data.textContent}
    </p>
}
