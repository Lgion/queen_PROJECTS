'use client'
import { useState, useEffect, useRef, useCallback, useMemo, useContext, useReducer, useImperativeHandle, useLayoutEffect, useDebugValue, useDeferredValue, useTransition, useId } from 'react'
import ReactDOM from 'react-dom/client'
// import {BrowserRouter,HashRouter,Routes,Route,Link,NavLink,Prompt,Redirect,MemoryRouter,useParams,useHistory,useLocation,useRouteMatch} from 'react-router-dom'
// import PropTypes from 'prop-types'
// import styled from 'styled-components'
import { CarouselFrames01, SvgPaths } from "./B5Elements"

// const SectionStyled = styled.section`
// `

export default ({ bem = "B5-Carousels", align = "carousels "/*--aleft --aright*/, $datas }) => {

    $datas = [
        {
            img: {imgSrc:"b5.png",alt:""}
            , svg: [{rect:{props: {fill:"#777"}}}]
            , title: "Example headline."
            , p: [
                "Some representative placeholder content for the first slide of the carousel."
            ]
            , cta: ["#", "Sign up today"]
        }
        ,{
            img: {imgSrc:"b5.png",alt:""}
            , svg: [{rect:{props: {fill:"#777"}}}]
            , title: "Example headline.2"
            , p: [
                "Some representative placeholder content for the first slide of the carousel."
            ]
            , cta: ["#", "Sign up today"]
        }
        ,{
            img: {imgSrc:"b5.png",alt:""}
            ,svg: [{rect:{props: {fill:"#777"}}}]
            , title: "Example headline.3"
            , p: [
                "Some representative placeholder content for the first slide of the carousel."
            ]
            , cta: ["#", "Sign up today"]
        }
        ,{
            img: {imgSrc:"b5.png",alt:""}
            ,svg: [{rect:{props: {fill:"#777"}}}]
            , title: "Example headline.4"
            , p: [
                "Some representative placeholder content for the first slide of the carousel."
            ]
            , cta: ["#", "Sign up today"]
        }
    ]

    const blockRef = useRef()
    , BtnFlow = ({flow}) => <button onClick={e => {move(e,flow,blockRef)}}>
        <span />
        <span>{flow=="prev"?"Prev":"Next"}</span>
    </button>
    
    return <section ref={blockRef} className={bem + ' --figurettes --aright ' + align}>

        <CarouselFrames01 $datas={$datas||undefined} blockRef={blockRef} framesBtns={false} svgForceDefault={true} />
    </section>
}
/*

*/
export function CarouselB5({ bem = "B5-Carousels", align = " "/*--aleft --aright*/, $datas }){

    const blockRef = useRef()
    
    return <section ref={blockRef} className={bem + ' ' + align}>
        <CarouselFrames01 $datas={$datas||undefined} blockRef={blockRef} />
    </section>
}
export function CarouselB5Headings({ bem = "B5-Carousels", align = " "/*--aleft --aright*/, options={width:"40",unit:"%"},$datas }){

    const blockRef = useRef()
    
    return <section ref={blockRef} className={bem + ' --headings ' + align} style={{width:(options.width+options.unit)}}>
        <CarouselFrames01 $datas={$datas||undefined} blockRef={blockRef} framesBtns={false} />
    </section>
}
export function CarouselB5Figurettes({ bem = "B5-Carousels", align = " "/*--aleft --aright*/, $datas }){

    const blockRef = useRef()
    
    return <section ref={blockRef} className={bem + ' --figurettes ' + align}>
        <CarouselFrames01 $datas={$datas||undefined} blockRef={blockRef} framesBtns={false} svgForceDefault={true} />
    </section>
}