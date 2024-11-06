'use client'
import { useState, useEffect, useRef, useCallback, useMemo, useContext, useReducer, useImperativeHandle, useLayoutEffect, useDebugValue, useDeferredValue, useTransition, useId } from 'react'
import ReactDOM from 'react-dom/client'
// import {BrowserRouter,HashRouter,Routes,Route,Link,NavLink,Prompt,Redirect,MemoryRouter,useParams,useHistory,useLocation,useRouteMatch} from 'react-router-dom'
// import PropTypes from 'prop-types'
// import styled from 'styled-components'
import { PricingList01,PricingsList02TableCompare } from "./B5Elements"

// const SectionStyled = styled.section`
// `

export default ({ bem = "B5-Pricings", align = "pricings", $datas }) => <PricingsCTA bem="pricings" />

export function PricingsCTA ({ bem = "B5-Pricings", align = "", $datas }){
    return <section className={bem + ' ' + align}>
        <h1>{$datas?.title||"Pricing"}</h1>
        <p>{$datas?.text||"Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization."}</p>
        <PricingList01 $datas={$datas?.pricings} options={$datas?.options} />
    </section>
}

export function PricingsCompares ({ bem = "B5-Pricings", align = "pricings", $datas }){
    return <section className={bem + ' ' + align}>
        <h1>{$datas?.title||"Compare plans"}</h1>
        <PricingsList02TableCompare $datas={$datas?.compares} options={$datas?.plans} />
    </section>
}

