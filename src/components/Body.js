import React from 'react'
import './Body.css'
import Footer from './Footer'
import Header from './Header'
const Body = () => {
    return (
        <>
            <Header />
            <section className="hero">
                <div className="main-width">
                    <div className="container">
                        <div className="hero-text">
                            <h3>Hi, There</h3>
                            <h1>i am Priyanshu Paliwal</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, sed quibusdam quisquam.  </p>
                            <div className="social">
                                <a href="#"><i className="fa-brands fa-facebook"></i></a>
                                <a href="anshu__paliwal"><i className="fa-brands fa-instagram"></i></a>
                                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                <a href="#"><i className="fa-brands fa-dribbble"></i></a>
                                <a href="#"><i className="fa-brands fa-behance"></i></a>
                            </div>
                            <button type="button">ABOUT ME</button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Body