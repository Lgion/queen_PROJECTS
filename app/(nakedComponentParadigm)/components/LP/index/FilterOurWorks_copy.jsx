'use client'
// import "./FiltreOurWorks_copy.scss"
import { useRef, useEffect } from 'react'



export default () => {
    const blockRef = useRef()
    , filtersArray = ["All","Design","Development","Print"]
    , handleClick = (e) => {
        const navLinks = Array.from(
            e.target.parentNode.querySelectorAll(`a`)
        )
        , targets = Array.from(
            blockRef.current.querySelectorAll(`.FilterOurWorks__Cards01>li`)
        )
        
        console.log(e.target.dataset.filter.toLowerCase())
        console.log()

        navLinks.forEach((item,i) => {
            item.classList.remove('active')
        });e.target.classList.add('active')
        targets.forEach((item,i) => {
            item.classList.remove("off")
        })
        targets.filter((item,i) => {
            return e.target.dataset.filter.toLowerCase()!=="all"&&item.dataset.filter.indexOf(e.target.dataset.filter) === -1
        }).forEach((item,i) => {
                item.classList.add("off")
        })
    }


    
    return <>
        { /* Portfolio Section */}
        <section ref={blockRef} id="portfolios" className="section FilterOurWorks">
            <h2>Our Works</h2>
            <p className="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos debitis.</p>

            { /* Portfolio Controller/Buttons */}
            <nav>
                {
                    filtersArray.map(
                        (item,i) => <a  
                                        // href="#" 
                                        data-filter={item.toLowerCase()} 
                                        onClick={handleClick} 
                                        className={"filter"+(i==0?" active":"")} 
                        >
                            {item}
                        </a>
                    )
                }
            </nav>
            { /*sdnE Portfolio Controller/Buttons Ends*/}

            { /* Portfolio Recent Projects */}
            <ul className="FilterOurWorks__Cards01">
                <li data-filter="design">
                    <img src="img/portfolio/img-1.jpg" alt="" />
                    <nav>
                    <a className="lightbox" href="img/portfolio/img-1.jpg"><i className="lni-zoom-in item-icon" /></a>
                    <a href="#">View Project</a>
                    </nav>
                </li>
                <li data-filter="design print">
                    <img src="img/portfolio/img-2.jpg" alt="" />
                    <nav>
                    <a className="lightbox" href="img/portfolio/img-2.jpg"><i className="lni-zoom-in item-icon" /></a>
                    <a href="#">View Project</a>
                    </nav>
                </li>
                <li data-filter="print">
                    <img src="img/portfolio/img-3.jpg" alt="" />
                    <nav>
                        <a className="lightbox" href="img/portfolio/img-3.jpg"><i className="lni-zoom-in item-icon" /></a>
                        <a href="#">View Project</a>
                    </nav>
                </li>
                <li data-filter="design">
                    <img src="img/portfolio/img-4.jpg" alt="" />
                    <nav>
                        <a className="lightbox" href="img/portfolio/img-4.jpg"><i className="lni-zoom-in item-icon" /></a>
                        <a href="#">View Project</a>
                    </nav>
                </li>
                <li data-filter="development print">
                    <img src="img/portfolio/img-5.jpg" alt="" />
                    <nav>
                        <a className="lightbox" href="img/portfolio/img-5.jpg"><i className="lni-zoom-in item-icon" /></a>
                        <a href="#">View Project</a>
                    </nav>
                </li>
                <li data-filter="development">
                    <img src="img/portfolio/img-6.jpg" alt="" />
                    <nav>
                        <a className="lightbox" href="img/portfolio/img-6.jpg"><i className="lni-zoom-in item-icon" /></a>
                        <a href="#">View Project</a>
                    </nav>
                </li>
            </ul>
        </section>
            { /*sdnE Container Ends */}
    </>
}