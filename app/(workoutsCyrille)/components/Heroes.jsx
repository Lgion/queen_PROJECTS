'use client'
import React, {useState,useEffect,useRef,useCallback,useMemo,useContext,useReducer,useImperativeHandle,useLayoutEffect,useDebugValue,useDeferredValue,useTransition,useId} from 'react'
import ReactDOM from 'react-dom/client'
// import {BrowserRouter,HashRouter,Routes,Route,Link,NavLink,Prompt,Redirect,MemoryRouter,useParams,useHistory,useLocation,useRouteMatch} from 'react-router-dom'
// import PropTypes from 'prop-types'
// import styled from 'styled-components'
// import {} from "./B5Elements"

// const SectionStyled = styled.section`
// `

export default ({bem="B5-Heroes",align="",wh="72:57",imgSrc="/b5/brand/bootstrap-logo.svg"}) => <section className={bem+' '+align}>
    <img src={imgSrc} alt="" width={wh.split(":")[0]} height={wh.split(":")[1]} />
    <h1>Centered hero</h1>
    <p>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
    <form>
        <button type="button">Primary button</button>
        <button type="button">Secondary</button>
    </form>
</section>
export function HeroesCenterCropped({bem="B5-Heroes",align="--center --dark",wh="72:57",imgSrc="/b5/brand/bootstrap-logo.svg"}){
    return <section className={bem+' '+align}>
        {/* <img src={imgSrc} alt="" width={wh.split(":")[0]} height={wh.split(":")[1]} /> */}
        <h1>Centered hero</h1>
        <p>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        <form>
            <button type="button">Primary button</button>
            <button type="button">Secondary</button>
        </form>
        <div>
            <img src="bootstrap-docs.png" alt="Example image" width="700" height="500" loading="lazy" />
        </div>
    </section>
}

export function HeroesWImage ({bem="B5-Heroes",align="--wImage",imgSrc="bootstrap-docs.png"}){
    return <section className={bem+' '+align}>
        <article>
            <h1>Left Aligned hero</h1>
            <p>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
            <form>
                <button type="button">Primary button</button>
                <button type="button">Secondary</button>
            </form>
        </article>
        <div>
            <img src={imgSrc} alt="Example image" width="700" height="500" loading="lazy" />
        </div>
    </section>
}
export function HeroesVCenter ({bem="B5-Heroes",align="--vcenter",}){
    return <section className={bem+' '+align}>
        <article>
            <h1>Vertically centered hero sign-up form</h1>
            <p>Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
        </article>
        <form>
            <fieldset>
                <input type="email" />
                <label htmlFor="floatingInput">Email address</label>
            </fieldset>
            <fieldset>
                <input type="password" />
                <label htmlFor="floatingPassword">Password</label>
            </fieldset>
            <fieldset>
                <label>
                    <input type="checkbox" className='safe' value="remember-me" /> Remember me
                </label>
            </fieldset>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
            <hr className="my-4" />
            <small className="text-muted">By clicking Sign up, you agree to the terms of use.</small>
        </form>
    </section>
}
export function HeroesWImageShadow ({bem="B5-Heroes",align="--wImage --shadow --dark",imgSrc="bootstrap-docs.png"}){
    return <section className={bem+' '+align}>
        <article>
            <h1>Border hero with cropped image and shadows</h1>
            <p>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
            <form>
                <button type="button">Primary button</button>
                <button type="button">Secondary</button>
            </form>
        </article>
        <div>
            <img src={imgSrc} alt="Example image" width="700" height="500" loading="lazy" />
        </div>
    </section>
}
