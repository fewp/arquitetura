import React from 'react';
import './styles.css';
import lottie from 'lottie-web';
import logo from '../../assets/animations/logo-scroll.json';

const Header = () => {
    
    window.addEventListener("scroll", resizeHeaderOnScroll);
    
    function resizeHeaderOnScroll() {
        const distanceY = window.pageYOffset || document.documentElement.scrollTop,
        shrinkOn = 200,
        logo = document.getElementById("logo-text"),
        headerEl = document.getElementById("header");
        if (distanceY > shrinkOn) {
            headerEl.classList.add("scroll");
            logo.classList.add("scroll");
        } else {
            headerEl.classList.remove("scroll");
            logo.classList.remove("scroll");
        }
    }


    let animationContainer = React.createRef();

    
    React.useEffect(() => {
        lottie.loadAnimation({
            container: animationContainer.current,
            animationData: logo,
        });
    })
    
    return (
        <nav className="header-navbar" id="header">

            <div className="c-wrapper">
                <div ref = {animationContainer}/>
                <div className="left">
                    <div id="logo-header" ref={animationContainer}></div>
                    <div id="logo-text" className="logo-text"></div>
                </div>
                 <div className="content y-aim right">
                    <a href="#header" className="active-link">Home</a>
                    <a href="#about">Sobre</a>
                    <a href="#achievements">Empreendimentos</a>
                    <a href="#constructions">Construções</a>
                    <a href="#contact">Contato</a>
                </div>
            </div>
        </nav>
    );
};

export default Header;