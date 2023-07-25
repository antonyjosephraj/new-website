// import React from "react";
import React, { useState, useEffect, useRef, useCallback } from 'react';


const Header = () => {


    const [scrollPosition, setScrollPosition] = useState(0);
    const [headerClass, setHeaderClass] = useState('');

    const [isHovered, setIsHovered] = useState(false);
    const [isOne, setIsOne] = useState(false);

    const [isHovered1, setIsHovered1] = useState(false);
    const [isOne1, setIsOne1] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        setIsOne(true) 

      };
    
      const handleMouseLeave = () => {
        setIsHovered(false);
        setIsOne(true) 
      };


      const handleMouseEnter1 = () => {
        setIsHovered1(true);
        setIsOne1(true) 

      };
    
      const handleMouseLeave1 = () => {
        setIsHovered1(false);
        setIsOne1(true) 
      };



//     useEffect(() => {
//         const currentPosition = window.pageYOffset;

//         console.log("scrollPosition", scrollPosition, "currentPosition", currentPosition);

//         if (scrollPosition == currentPosition && currentPosition > 80) {
//             setHeaderClass('slideUp');
//         } else if (scrollPosition > currentPosition) {
//             setHeaderClass('slideDown');
//         }
//         console.log('----------------', window.scrollY);
//         setScrollPosition(window.scrollY);
//         console.log('------------ddd----', window.scrollY);

//   }, [scrollPosition]);
const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
const [navbarVisible, setNavbarVisible] = useState(false);
const [doo, setDoo] = useState(0);



useEffect(() => {

    const headerSection = document.querySelector('.ai-header');

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;

        // console.log('---------  --------------', prevScrollPos, currentScrollPos);
        // #100919
        
        if (prevScrollPos > 100){
            if (prevScrollPos > currentScrollPos) {
                headerSection.style.transform = "translate(0%, 0%)";
                headerSection.style.transition = "transform 2s ease";
                headerSection.style.backgroundColor = "#100919";

            } else {
            // Hide navbar on scroll down
            headerSection.style.transform = "translate(0%, -100%)";
            headerSection.style.transition = "transform 2s ease";
            // headerSection.style.backgroundColor = "#100919";

            }
        } else{
            headerSection.style.transform = "translate(0%, 0%)";
            headerSection.style.backgroundColor = "transparent";

        }
        setPrevScrollPos(currentScrollPos);
        
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
}, [prevScrollPos]);
  

    return (
        <div className={"ai-header "+ (navbarVisible ? "" : "hide-nav")}>
            <nav className="navbar navbar-light">
                <div className="container-fluid">
                    <div className="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="155.084" height="51.756" viewBox="0 0 155.084 51.756">
                    <defs><clipPath id="a"><rect width="155.084" height="51.756" fill="#fff"></rect></clipPath><clipPath id="c"><rect width="14.077" height="26.804" fill="#fff"></rect></clipPath></defs><g clip-path="url(#a)"><g transform="translate(0 0)"><g clip-path="url(#a)"><path d="M143.922,75.984v5.135a10.732,10.732,0,0,1-4.337.77c-3.92,0-6.242-2.476-6.242-5.6,0-3.137,2.184-5.6,6.042-5.6A6.7,6.7,0,0,1,143.4,71.74l.306,2.168a6.309,6.309,0,0,0-4.227-1.537c-2.8,0-4.274,1.767-4.274,3.921,0,2.289,1.706,3.919,4.565,3.919a6.526,6.526,0,0,0,2.323-.338V75.984Z" transform="translate(-56.837 -30.133)" fill="#fff"></path><path d="M169.839,72.7h-4.167v3.444h4.167c1.353,0,2.276-.646,2.276-1.738,0-1.06-.89-1.706-2.276-1.706m4.352,9.134h-2.705L165.673,77.1v4.735h-1.845V71.073h6.228c2.474,0,3.9,1.306,3.9,3.258,0,1.907-1.43,3.229-3.859,3.229h-1.213Z" transform="translate(-69.831 -30.294)" fill="#fff"></path><path d="M201.728,76.293a3.89,3.89,0,1,0-3.889,3.936,3.735,3.735,0,0,0,3.889-3.936m-9.64,0a5.753,5.753,0,1,1,5.751,5.6,5.46,5.46,0,0,1-5.751-5.6" transform="translate(-81.876 -30.133)" fill="#fff"></path><path d="M223.46,77.836V71.073H225.3v6.5c0,1.893,1.215,2.8,3.122,2.8s3.121-.905,3.121-2.8v-6.5h1.845v6.763c0,2.752-2.029,4.215-4.966,4.215s-4.966-1.463-4.966-4.215" transform="translate(-95.249 -30.294)" fill="#fff"></path><path d="M254.691,76.208h3.984c1.336,0,2.212-.661,2.212-1.768,0-1.077-.877-1.738-2.212-1.738h-3.984Zm-1.845,5.627V71.073h5.919c2.521,0,3.967,1.4,3.967,3.381s-1.477,3.367-3.967,3.367h-4.075v4.014Z" transform="translate(-107.774 -30.294)" fill="#fff"></path><path d="M244.935,0V25.635L223.442,0H219.39V30.518h3.661V4.752L244.8,30.518H248.6V0Z" transform="translate(-93.514 0)" fill="#fff"></path><path d="M15.417,20.577c0,4.579-2.136,7.15-7.28,7.15a17.86,17.86,0,0,1-6.762-1.44L0,29.261a18,18,0,0,0,8.442,1.867c7.063,0,10.725-3.488,10.725-9.983V0H15.417Z" transform="translate(0 0)" fill="#fff"></path><path d="M86.969,0,74.413,24.2,61.769,0H56.887V30.518h3.618V4.708l13.471,25.81h.7L88.1,4.708v25.81h3.618V0Z" transform="translate(-24.248 0)" fill="#fff"></path><path d="M149.5,0,135.376,30.518h4.054L151.637,3.1,153.015,0Z" transform="translate(-57.703 0)" fill="#fff"></path><path d="M162.051,0,147.926,30.518h4.054L164.188,3.1,165.566,0Z" transform="translate(-63.053 0)" fill="#fff"></path><g transform="translate(102.712 3.713)" opacity="0.45"><g clip-path="url(#c)"></g></g></g></g></g></svg>
                    </div>
                    <div className="navbar-right-content">
                        <div className="navbar-links">
                            {/* <a class={isHovered ? "navbar-link1" :"navbar-link"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >Blog</a>
                            <a class={isHovered ? "navbar-link1": "navbar-link" } onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Careers</a> */}
                        
                        
                            <a className='navbar-link3' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                                
                                <div className={ isOne ? isHovered ? "kkkk" :"bounce2": "bounce4"}>Blog</div>
                                <div className={isHovered ? "bounce3" :"kkkk"}>Blog</div>
                                
                            </a>

                            <a className='navbar-link3' onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} >
                                
                                <div className={ isOne1 ? isHovered1 ? "kkkk" :"bounce2": "bounce4"}>Careers</div>
                                <div className={isHovered1 ? "bounce3" :"kkkk"}>Careers</div>
                                
                            </a>

                            {/* <a class={isHovered ? "navbar-link1": "navbar-link" } onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Careers</a> */}
                        

                        </div>
                        {/* <div className="navbar-btn-block">
                            <button className="btn-download-app btn text-white" type="submit">Download the App</button>
                        </div> */}
                    </div>
                </div>
            </nav>
            
        </div>
    )
}

export default Header;