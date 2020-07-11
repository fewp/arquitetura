import React from 'react';
import './styles.css';
import lottie from 'lottie-web';
import logo from '../../assets/animations/logo-scroll.json';
import logoText from '../../assets/img/logo/simplified.svg';

const Header = () => {
    let animationContainer = React.createRef();
    window.addEventListener("scroll", resizeHeaderOnScroll);

    
    React.useEffect(() => {
        lottie.loadAnimation({
            container: animationContainer.current,
            animationData: logo,
        });
    })
    
    
    function resizeHeaderOnScroll() {
        const distanceY = window.pageYOffset || document.documentElement.scrollTop,
        shrinkOn = 200,
        headerEl = document.getElementById("header");
        if (distanceY > shrinkOn) {
            headerEl.classList.add("scroll");
        } else {
            headerEl.classList.remove("scroll");
        }
    }
    return (
        <nav className="header-navbar" id="header">

            <div className="c-wrapper">
                <div ref = {animationContainer}/>
                <div className="left">
                    <div id="logo-header" ref={animationContainer}></div>
                    <img src={logoText} alt="Logo Text"></img>
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