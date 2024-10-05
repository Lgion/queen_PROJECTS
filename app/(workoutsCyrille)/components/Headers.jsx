'use client'
import { useState, useEffect, useRef, useContext } from 'react'
// import GlobalContext from "./globalContext"
import { styled } from 'styled-components'
import {Logo01,NavLinks01,NavLinks02Icons,SearchBox,LogSignInOut,LogSignInOutClerk,DropBox} from "./B5Elements"



const HeaderStyled = styled.header`
`
, 
components = [
    <Logo01 />
    , <NavLinks01 />
    , <LogSignInOut />
    , <DropBox />
]
, choices = [0,1,2]



export default ({children,bem="B5-Headers",align=""}) => {
    const blockRef = useRef()
        , otherRef = useRef()
        , [state, setState] = useState(null)
    //, {/*auth*/} = useContext(/*GlobalContext*/)

    useEffect(() => {
    }, [])

    return <>
        <header ref={blockRef} className={bem+' '+align+' --doubleHeader'}>
            <NavLinks01 />
            <LogSignInOut /> 
            <nav>
                <Logo01 />
                <form>
                    <input type="search" placeholder="Search..." aria-label="Search" />
                </form>
            </nav>
            {children}
            {/* <section>
                <DropBox imgSrc="next.svg" />
            </section> */}
            {/* <NavLinks01 /> */}
            {/* <section>
                <DropBox imgSrc="next.svg" events={{onClick: e => {otherRef.current.classList.add('active')}}} />
            </section> */}
            {/* <LogSignInOut /> */}
            {/* {components.filter((item,i) => choices.indexOf(i)!=-1)} */}
        </header>
        {/* <nav ref={otherRef}>
            <span className="close" onClick={(e) => {e.target.parentNode.classList.remove('active')}}></span>
            <div>1er</div>
            <div>2nd</div>
        </nav> */}
    </>
}
export function HeadersNth({children,bem="B5-Headers",align=""}) {
    const blockRef = useRef()

    useEffect(() => {
    }, [])

    return <>
        <header ref={blockRef} className={bem+' '+align+' --forth'}>
            <Logo01 />
            <NavLinks01 />
            <form>
                <input type="search" placeholder="Search..." aria-label="Search" />
            </form>
            <LogSignInOut /> 
            {children}
        </header>
    </>
}


export function HeadersGrid({children,bem="B5-Headers",align=""}) {
    const blockRef = useRef()
    , otherRef = useRef()

    useEffect(() => {
    }, [])

    return <>
        <header ref={blockRef} className={bem+' '+align+' --grid'}>
            <section>
                <DropBox $datas={{img:{imgSrc:"next.svg"}}} />
            </section>
            <form>
                <input type="search" placeholder="Search..." aria-label="Search" />
            </form>
            <section>
                <DropBox $datas={{img:{imgSrc:"next.svg"}, events:{onClick: e => {otherRef.current.classList.add('active')}}}} />
            </section>
            {children}
        </header>
        <nav ref={otherRef}>
            <span className="close" onClick={(e) => {e.target.parentNode.classList.remove('active')}}></span>
            <div>1er</div>
            <div>2nd</div>
        </nav>
    </>
}
export function HeadersDoubleSimple({children,bem="B5-Headers",align=""}) {
    const blockRef = useRef()

    useEffect(() => {
    }, [])

    return <>
        <header ref={blockRef} className={bem+' '+align+' --doubleHeader'}>
            <NavLinks01 links={[["Home","/"],["Blog","blog"]]} />
            {/* <LogSignInOutClerk />  */}
            <LogSignInOut /> 
            <nav>
                <Logo01 />
                <form>
                    <input type="search" placeholder="Search..." aria-label="Search" />
                </form>
            </nav>
            {children}
        </header>
    </>
}
export function HeadersDoubleIcons({children,bem="B5-Headers",align=""}) {
    const blockRef = useRef()

    useEffect(() => {
    }, [])

    return <>
        <header ref={blockRef} className={bem+' '+align+' --doubleHeader'}>
            <Logo01 />
            <NavLinks02Icons />
            <nav>
                <SearchBox />
                <LogSignInOut /> 
            </nav>
            {children}
        </header>
    </>
}