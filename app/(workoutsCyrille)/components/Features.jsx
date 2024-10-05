'use client'
import React, { useState, useEffect, useRef, useCallback, useMemo, useContext, useReducer, useImperativeHandle, useLayoutEffect, useDebugValue, useDeferredValue, useTransition, useId } from 'react'
import ReactDOM from 'react-dom/client'
// import {BrowserRouter,HashRouter,Routes,Route,Link,NavLink,Prompt,Redirect,MemoryRouter,useParams,useHistory,useLocation,useRouteMatch} from 'react-router-dom'
// import PropTypes from 'prop-types'
// import styled from 'styled-components'
import {FeaturesList01, FeaturesList02Cards} from "./B5Elements"

// const SectionStyled = styled.section`
// `

export default ({ bem = "B5-Features", align = "--cards", $datas }) => <FeaturesColWIcons />


export function FeaturesColWIcons({ bem = "B5-Features", align = ""/*"--btn"*/, $datas }){
        
    return <section className={bem + ' ' + align}>
        <h2>{$datas?.title || "Columns with icons"}</h2>
        <FeaturesList01 $datas={$datas?.features} />
    </section>
}
export function FeaturesHangWIcons({ bem = "B5-Features", align = "--hanging", $datas }){
        
    return <section className={bem + ' ' + align}>
        <h2>{$datas?.title || "Hanging icons"}</h2>
        <FeaturesList01 $datas={$datas?.features} />
    </section>
}
export function FeaturesCards({ bem = "B5-Features", align = "--cards", $datas }){
        
    return <section className={bem + ' ' + align}>
        <h2>{$datas?.title || "Custom cardszz"}</h2>
        <FeaturesList02Cards $datas={$datas?.features} />
    </section>
}
export function FeaturesGridIcons({ bem = "B5-Features", align = "--grid", $datas }){
        
    return <section className={bem + ' ' + align}>
        <h2>{$datas?.title || "Icon grid"}</h2>
        <FeaturesList01 $datas={$datas?.features} moreSample="8" />
    </section>
}



function DefaultSvgPath(){ //Utilities_Features_svg
    return <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z" />
} 
function SvgPaths({viewBox,pathsArray}){ //Utilities_Features_svg
    return <svg viewBox={viewBox}>{
        pathsArray?.map((pathItem,i) => Array.isArray(pathItem)
            ? <path {...pathItem[0]} d={pathItem[1]} />
            : <path d={pathItem} />
        ) 
        || <DefaultSvgPath />
    }</svg>
} 