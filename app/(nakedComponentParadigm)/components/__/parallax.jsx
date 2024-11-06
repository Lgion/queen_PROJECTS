'use client'
import { useEffect, useRef } from 'react'
import simpleParallax from 'simple-parallax-js'

//https://react-scroll-parallax.damnthat.tv/docs/intro
import { ParallaxProvider } from 'react-scroll-parallax';
import {Parallax} from 'react-scroll-parallax';

export const ReactScrollParallax = (item,i) => <ParallaxProvider>
    <Parallax 
        easing="easeIn" 
        onChange={e => console.log(e)} 
        opacity={[1,.5]} 
        translateX={[-20, 10]} 
        translateY={[-20, 100]} 
        speed={-10}
    >
        <img src="next.svg" />
    </Parallax>
</ParallaxProvider> 

export const SimpleParallax = () => {
    const parallaxRef = useRef()

    useEffect(() => {
        /*
        const options = {
            root: null,
            // threshold: .2,
            rootMargin: "-50px"
        }
        , observer = new IntersectionObserver(function(entries,observer){
            
            console.log(entries)
            entries.forEach(entry => {
                console.log(entry)
                if(entry.isIntersecting){
                    parallaxRef.current.classList.add('--animated')
                }else parallaxRef.current.classList.remove('--animated')
            })
        }, options)
        observer.observe(parallaxRef.current)
        */



        new simpleParallax(parallaxRef.current.querySelector('img:first-child'), {
            // overflow: true, 
            orientation: 'right'
        });
    }, [])
    return <aside ref={parallaxRef}>
        <img src="next.svg" alt="" />
    </aside>
}
