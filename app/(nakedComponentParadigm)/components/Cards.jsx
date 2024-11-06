'use client'
import Link from "next/link";
import { useState, useEffect, useRef, useCallback, useMemo, useContext, useReducer, useImperativeHandle, useLayoutEffect, useDebugValue, useDeferredValue, useTransition, useId } from 'react'
import ReactDOM from 'react-dom/client'
// import {BrowserRouter,HashRouter,Routes,Route,Link,NavLink,Prompt,Redirect,MemoryRouter,useParams,useHistory,useLocation,useRouteMatch} from 'react-router-dom'
// import PropTypes from 'prop-types'
// import styled from 'styled-components'
import { doNeedMoreSample,ImgXorSvg } from "./B5Elements"

// const SectionStyled = styled.section`
// `

export default ({ bem = "B5-Cards", align = "cards", $datas }) => {
    $datas = {
        btnsGroup: [["VIEW","#"],["EDIT","#"]]
        , cards: [
            {
                img: {imgSrc:"b5.png",alt:""}
                , svg: [{title:{content:"Placeholder"}},{rect:{props:{fill:"#55595c"}}},{text:{props:{x:"50%", y:"50%", fill:"#eceeef", dy:".3em"},content:"Thumbnail"}}]
                , p: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                , badge: "9mins"
            }
        ]
    }

    const  moreSample= 8
    $datas.cards = doNeedMoreSample($datas.cards,moreSample)

    return <ul className={bem + ' ' + align}>
        {$datas.cards.map((item,i) => <li>
            <figure>
                <ImgXorSvg item={item} svgForceDefault={true} />
                <figcaption>
                    <p>{item.p}</p>
                    <div>
                        {$datas.btnsGroup.map((item_,i) => <Link href={item_[1]}>{item_[0]}</Link>)}
                    </div>
                    <small>{item.badge}</small>
                </figcaption>
            </figure>
        </li>)}
    </ul>
}
export function CardsB5({ bem = "B5-Cards", align = "cards", moreSample= 8, $datas={
    btnsGroup: [["VIEW","#"],["EDIT","#"]]
    , cards: [
        {
            img: {imgSrc:"b5.png",alt:""}
            , svg: [{title:{content:"Placeholder"}},{rect:{props:{fill:"#55595c"}}},{text:{props:{x:"50%", y:"50%", fill:"#eceeef", dy:".3em"},content:"Thumbnail"}}]
            , p: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            , badge: "9mins"
        }
    ]
} }){
    $datas.cards = doNeedMoreSample($datas.cards,moreSample)

    return <ul className={bem + ' ' + align}>
        {$datas.cards.map((item,i) => <li>
            <figure>
                <ImgXorSvg item={item} svgForceDefault={true} />
                <figcaption>
                    <p>{item.p}</p>
                    <div>
                        {$datas.btnsGroup.map((item_,i) => <Link href={item_[1]}>{item_[0]}</Link>)}
                    </div>
                    <small>{item.badge}</small>
                </figcaption>
            </figure>
        </li>)}
    </ul>
}