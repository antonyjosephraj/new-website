import React, { useEffect, useState } from "react";
import homeLogo from '../assert/img/image1.jpg';
import homeVideo from '../assert/video/video1.mp4';
// import Aos from "aos";
// import 'aos/dist/aos.css';

const Home = () => {

    // Declare State
    const [scrollPosition, setScrollPosition] = useState(0);

    // Select the Scroll Top
    useEffect(() => {

        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },  []);

    // Select the Code for the UI Process
    useEffect(() => {
        const windowHeight = window.innerHeight;

        const homeSection = document.querySelector('.home');

        if (scrollPosition >= 85) {
            homeSection.style.position = 'sticky';
            homeSection.style.top = '-4px';
        } 
    })

    return (
        <div className="home">
            <div className="home-layer-one">
                <div id='homeLayerTwo' className="small-animation-box">
                    <div className="small-animation1 small-animation-one"></div>  
                    <div className="small-animation1 small-animation-two"></div>                        
                    <div className="small-animation small-animation-three"></div>                        
                    <div className="small-animation1 small-animation-four"></div>                        
                    <div className="small-animation small-animation-five"></div>  
                </div>
                <div id='homeLayerThree' className="home-layer-three">
                    <div className="home-layer-three-box">
                        <div class="corner-top corner-left"></div>
                        <div class="corner-top corner-right"></div>
                        <div class="corner-bottom corner-right"></div>
                        <div class="corner-bottom corner-left"></div>
                    </div>
                </div>

                <div id='homeLayerFour' className="home-layer-four">
                        <div className="big-animation big-animation-one">
                            <div class="outer"><div class="inner2"></div></div>
                        </div>  
                        <div className="big-animation big-animation-two"><div class="outer"><div class="inner3"></div></div>
                            <div className="big-animation-sub">
                                <div class="outer10"><div class="inner10"></div></div>
                            </div>
                            <p className="scroll-down">Scroll down</p>
                        </div> 
                        <div className="big-animation big-animation-three">
                            <div class="outer"><div class="inner"></div></div>    
                        </div>  
                        <div className="big-animation big-animation-four">
                            <div class="outer"><div class="inner"></div></div>    
                        </div>  
                        <div className="big-animation big-animation-five">
                            <div class="outer"><div class="inner"></div></div>    
                        </div>  
                        <div className="big-animation big-animation-six">
                            <div class="outer"><div class="inner"></div></div>    
                        </div>  
                        <div className="big-animation big-animation-seven">
                            <div class="outer"><div class="inner"></div></div>    
                        </div>  
                        <div className="big-animation big-animation-eight">
                            <div class="outer"><div class="inner3"></div></div>    
                        </div> 
                        <div className="big-animation big-animation-nine">
                            <div class="outer"><div class="inner2"></div></div>    
                        </div>  
                </div>

                <div id='homeLayerFive' className="home-layer-five">
                    <div className="home-layer-five-box">
                        <h1 className="home-title">Your AI-powered</h1>
                        <h1 className="home-title1">creative Studio</h1>

                        <article className="home-article mt-3">Meet Captions. The next generation of storytelling - </article>
                        <article className="home-article">at your fingertips. Discover the power of AI </article>
                        <article className="home-article">and create studio-grade videos in just a few taps.</article>
                        
                    </div>
                    
                    
                </div>

            </div>
        </div>
    )
}

export default Home