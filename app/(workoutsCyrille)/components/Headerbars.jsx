'use client'
import { useState, useEffect, useRef, useContext } from 'react'
// import GlobalContext from "./globalContext"
// import { styled } from 'styled-components'
import { NavbarsBtnHambergur, DropBox, NavbarsSearchBox } from "./B5Elements"

// const sectionStyled = styled.section`
// `

export default ({bem="B5-HeaderNavbar",expand="never",align=""}) => {
    const blockRef = useRef()
    // , [state, setState] = useState(null)
    //, {/*auth*/} = useContext(/*GlobalContext*/)

    // useEffect(() => {
    // }, [])
    return <header ref={blockRef} className={bem+" "+expand+" "+align}>
        <a href="#">Never expand</a>
        <NavbarsBtnHambergur className={bem+" "+expand}/>
        <NavbarsNav className={bem+" "+expand}/>
    </header>
}