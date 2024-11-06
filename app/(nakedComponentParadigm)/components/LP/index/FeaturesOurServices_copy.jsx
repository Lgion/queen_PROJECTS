'use client'
import { useEffect, useRef } from 'react'

export default () => {
    const blockRef = useRef()
    useEffect(() => {

        const options = {
            root: null,
            // threshold: .2,
            rootMargin: "-250px"
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
        <section ref={blockRef} className="OurServices">
            <h2>Our Services</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy</p>
            <ul className="OurServices__PurposesList01">
                <li>
                    <i />
                    <h3>Content Writing</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.</p>
                </li>
                <li>
                    <i />
                    <h3>Web Development</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.</p>
                </li>
                <li>
                    <i />
                    <h3>Graphic Design</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.</p>
                </li>
                <li>
                    <i />
                    <h3>UI/UX Design</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.</p>
                </li>
                <li>
                    <i />
                    <h3>App Development</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.</p>
                </li>
                <li>
                    <i />
                    <h3>Digital Marketing</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.</p>
                </li>
            </ul>
        </section>
        { /* Services Section End */}

    </>
}