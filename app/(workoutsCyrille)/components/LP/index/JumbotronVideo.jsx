'use client'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import simpleParallax from 'simple-parallax-js'

const ImgStyled = styled.img`
    position: absolute;
    top:0;left:0;width:100%;height:100%;
`


export default () => {
    useEffect(() => {
        var images = document.querySelector('#okok');
        new simpleParallax(images, {
            // overflow: true, 
            orientation: 'right'
        });
    }, [])
    return <>
        { /* Start Video promo Section */}
        <section className="video-promo section">
            <ImgStyled id="okok" src="/ffxiv_bis_2019.jpg" alt="" />
            <div className="overlay" />
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <div className="video-promo-content text-center">
                            <a href="https://www.youtube.com/embed/LSgBpbgTlhw" className="video-popup"><i className="lni-film-play" /></a>
                            <h2 className="wow zoomIn" data-wow-duration="1000ms" data-wow-delay="100ms">Our Introductory Video</h2>
                            <p className="wow zoomIn" data-wow-duration="1000ms" data-wow-delay="100ms">Learn more about us, its only 30mins</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        { /* End Video Promo Section */}
    </>
}