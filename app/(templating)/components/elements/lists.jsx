
export default function Ul({data=[{textContent:"Proposer une liste de type de site (vitrine, ecommerce, landingpage, forum, wiki, doc, etc...)"},{textContent: "Puis proposer une liste de catégorie sociaux-professionnelles, afin que le style et le comportement de l'application soit aligné sur cette catégorie (sociaux-professionnelles)de client"}]}) {
    return <ul>
        {data.map((item,i) => <li>
            {item.textContent}
        </li>)}
    </ul>
}
