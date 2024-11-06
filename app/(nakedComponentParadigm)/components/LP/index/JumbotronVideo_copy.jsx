'use client'
import { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import simpleParallax from 'simple-parallax-js'
// import "./JumbotronVideo_copy.scss"

const ImgStyled = styled.img`
    position: absolute;
    top:0;left:0;width:100%;height:100%;
`


export default () => {
    const blockRef = useRef()
    // const element01Ref = useRef()
    useEffect(() => {
        console.log(blockRef)
        console.log(blockRef.current.childNodes)


        var images = document.querySelector('#okok');
        new simpleParallax(blockRef.current.querySelector('img:first-child'), {
            // overflow: true, 
            orientation: 'right'
        });
        const options = {
            root: null,
            threshold: 0,
            rootMargin: "0px"
        }
        , observer = new IntersectionObserver(function(entries,observer){
            
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    blockRef.current.classList.add('--animated')
                }else blockRef.current.classList.remove('--animated')
            })
        }, options)
        observer.observe(blockRef.current)
    }, [])
    return <>
        { /* Start Video promo Section */}
        <section ref={blockRef} className='LP-Jumbotron'>
            <ImgStyled src="/ffxiv_bis_2019.jpg" alt="" />
            <div></div>
            <article ref={blockRef}>
                            <a href="https://www.youtube.com/embed/LSgBpbgTlhw" className="video-popup"><i className="lni-film-play" /></a>
                            <h2>Our Introductory Video</h2>
                            <p>Learn more about us, its only 30mins</p>
            </article>
        </section>
        { /* End Video Promo Section */}
    </>
}