import H1 from "./elements/titles"
import P from "./elements/paragraphs"
import Ul from "./elements/lists"

export default function HeaderDefault() {
    return <header>
        <H1 />
        <P />
        <Ul />
        {/* <H1 textContent="okok h1"/> */}
        {/* <P textContent="okok p"/> */}



        {/* <h1>QUEEN</h1>
        <p>Il faut: </p>
        <ul>
            <li>Proposer une liste de type de site (vitrine, ecommerce, landingpage, forum, wiki, doc, etc...)</li>
            <li>Puis proposer une liste de catégorie sociaux-professionnelles, afin que le style et le comportement de l'application soit aligné sur cette catégorie (sociaux-professionnelles)de client</li>
        </ul> */}
    </header>
}
