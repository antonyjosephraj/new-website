import React, { useState, useEffect } from 'react';
import AnimationVideo from '../assert/video/video2.mp4';
import QRCode from '../assert/img/qr-code.png';


const MainCaption = () => {

    // Declare the State
    const [scrollPosition, setScrollPosition] = useState(0);
    const [transaleImageY, setTransaleImageY] = useState('');
    const [transaleImageYOne, setTransaleImageYOne] = useState('');


    // Set the Scroll Top
    useEffect(() => {

        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },  []);


  useEffect(() => {

    // Declare the Element

    
    const mainCaption = document.querySelector('.main-caption');
    const imageSection = document.querySelector('.video-section');
    const imageContainer = document.querySelector('.video-container .mobile-panel');
    const videoContainer1 = document.querySelector('.video-container .mobile-panel .mobile-body');
    const videoContainer = document.querySelector('.video-container .mobile-panel .mobile-body .home-video');
    const mobileBottom = document.querySelector('.video-container .mobile-panel .mobile-bottom');
    const mobileTopPanel = document.querySelector('.video-container .mobile-top-panel2');

    //  Increase the Mobile View
    if (imageSection) {

        if (scrollPosition > 50 && scrollPosition <= 360 ) {

            let aa = 0;
            
            if (transaleImageY != ''){

                aa = transaleImageY;
            } else {

                aa = ((parseInt(scrollPosition) - 50) * -0.1).toString();
            }

            imageSection.style.transform = "translate(0%, " + aa +"%)";
        } 
    }

    // Animation for the Video
    if (scrollPosition > 360 && scrollPosition <= 1970){
        const startScroll = 360;
        const endScroll = 1970; // 1350
        const startScale = 1;
        const endScale = 6.24;

        const scrollRange = endScroll - startScroll;
        const scaleRange = endScale - startScale;
        
        const currentScroll = Math.min(Math.max(window.pageYOffset, startScroll), endScroll);
        const t = (currentScroll - startScroll) / scrollRange;

        // Calculate the scaling factor using linear interpolation
        const scaleing = startScale + (endScale - startScale) * t;

        const endScroll1 = 1970; // 1350  // 1450

        let aaStartScroll = 360;
        let startY = -30.9;
        let endY = 406;
        let translateY = -30.9;

        if (scrollPosition >= aaStartScroll && scrollPosition <= endScroll1) {

            var progress = (scrollPosition - aaStartScroll) / (endScroll1 - aaStartScroll);
            translateY = (startY + (progress * (endY - startY))).toString();
            
        }
        if (endScroll < 1349 && endScroll > 1345){
            setTransaleImageY(translateY)
        }

        imageSection.style.transform = "translate(0%, " + translateY +"%)";
        setTransaleImageYOne(translateY)
        
        imageContainer.style.transform   = 'scale('+ scaleing.toString() + ',' + scaleing.toString() + ')';
    } 
    else {

        imageSection.style.transform = "translate(0%, " + transaleImageY +"%)";
    }

    // Stoping the video few sec's to Make Second Section come with join in this
    if (scrollPosition> 1950 && scrollPosition < 2150){ // 1660 // 1670
        
        const cccstartScroll = 1950;
        const cccendScroll = 2150;
        const ccctranslateYStart = 406;
        const ccctranslateYEnd = 463;
        const progress = (scrollPosition - cccstartScroll) / (cccendScroll - cccstartScroll);
        const cctranslateY = ccctranslateYStart + (ccctranslateYEnd - ccctranslateYStart) * progress;
        imageSection.style.transform = "translate(0%, " + cctranslateY +"%)";
    }


    // Setting background for Video
    if (scrollPosition >= 1970 && scrollPosition <= 2900) {  // 1360 // 1670
    console.log('aaaaaaa', scrollPosition);
        mainCaption.style.overflowY = 'hidden';
        // videoContainer.style.padding = '18px 1px';
        
        mobileTopPanel.style.backgroundColor = '#100919';
    } else {
    console.log('bbbbbbbbb', scrollPosition);

        mobileTopPanel.style.backgroundColor = '#1C1D21';
        // videoContainer.style.padding = '0px';
        mainCaption.style.overflowY = 'visible';

    }

    // Mobile Bottom View Hide
    if ( scrollPosition >= 2100){
        
        mobileBottom.style.opacity = 0;
        mobileBottom.style.height = '0px';
        
    } else {
        
        mobileBottom.style.opacity = 1;
    }

    // Video Play and Controls Off
    videoContainer.play();
    videoContainer.controls = false;


  }, [scrollPosition]);


    //  Set the QR Code Image
    useEffect(() => {
        const imageSection = document.querySelector('.image-section');

        if (scrollPosition >= 130) {
            if (scrollPosition >= 130 && scrollPosition <= 250) {
                let aa = parseInt(scrollPosition) - 130;
                imageSection.style.transform = "translate(0%, -" + aa.toString() +"%)";
                imageSection.style.opacity = '1'; 
            }

        } else {
            imageSection.style.opacity = '0';
        }
  }, [scrollPosition]);

    return (
        <div className="main-caption">
            <div className='main-container'>
                <div className="video-section">
                    <div className="video-container">
                        <div className='mobile-panel'>
                            <div className='mobile-in-panel1'>
                                <div className='mobile-in-panel'>
                                <div className='mobile-top-panel2'> 
                                
                                    <div className='mobile-top-panel1'> 
                                        <div className='mobile-top-panel'>
                                            <div className='mobile-top'>
                                                <div className='mobile-icon'> <svg xmlns="http://www.w3.org/2000/svg" fill='white' height={18} width={18} viewBox="0 0 24 24" id="left-arrow"><path d="M8.29,11.29a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l3,3a1,1,0,0,0,1.42-1.42L11.41,13H15a1,1,0,0,0,0-2H11.41l1.3-1.29a1,1,0,0,0,0-1.42,1,1,0,0,0-1.42,0ZM2,12A10,10,0,1,0,12,2,10,10,0,0,0,2,12Zm18,0a8,8,0,1,1-8-8A8,8,0,0,1,20,12Z"></path></svg></div>

                                                {/* <div className='mobile-camera1'>

                                                    <div className='mobile-camera'>
                                                        <div className='mobile-in-camera'>
                                                        </div>
                                                    </div>
                                                </div> */}

                                                <div className='mobile-top-text'>AI - Caption</div>
                                            </div>
                                        </div>
                                        <div className='mobile-body'>
                                            {/* <iframe src={AnimationVideo} className='home-video' frameborder="0"
            allow="autoplay; fullscreen" ></iframe> */}
                                                <video className='home-video' src={AnimationVideo} autoplay muted controls="none" >
                                                        
                                                </video>
                                        </div>
                                        <div className='mobile-bottom'>
                                            <div className='chat-top chat-top1'>
                                                <div>
                                                    <p className='chat-one'>00:01 - 00:17</p>
                                                </div>
                                                <div>
                                                    <p className='chat-one'>Edit</p>
                                                </div>
                                            </div>
                                            <div className='chat-body'>
                                                <div className='chat-body-caption'>
                                                    <div className='chat-avatar'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61.8 61.8" id="avatar"><g data-name="Layer 2"><g data-name="—ÎÓÈ 1"><circle cx="30.9" cy="30.9" r="30.9" fill="#485a69"></circle><path fill="#f9dca4" fill-rule="evenodd" d="M23.242 38.592l15.92.209v12.918l-15.907-.121-.013-13.006z"></path><path fill="#d5e1ed" fill-rule="evenodd" d="M53.478 51.993A30.814 30.814 0 0 1 30.9 61.8a31.225 31.225 0 0 1-3.837-.237A30.699 30.699 0 0 1 15.9 57.919a31.033 31.033 0 0 1-7.857-6.225l1.284-3.1 13.925-6.212c0 4.535 1.84 6.152 7.97 6.244 7.57.113 7.94-1.606 7.94-6.28l12.79 6.281z"></path><path fill-rule="evenodd" d="M39.165 38.778v3.404c-2.75 4.914-14 4.998-15.923-3.59z" opacity=".11"></path><path fill="#ffe8be" fill-rule="evenodd" d="M31.129 8.432c21.281 0 12.987 35.266 0 35.266-12.267 0-21.281-35.266 0-35.266z"></path><path fill="#f9dca4" fill-rule="evenodd" d="M18.365 24.045c-3.07 1.34-.46 7.687 1.472 7.658a31.973 31.973 0 01-1.472-7.658zM44.14 24.045c3.07 1.339.46 7.687-1.471 7.658a31.992 31.992 0 001.471-7.658z"></path><path fill="#ecbe6a" fill-rule="evenodd" d="M43.409 29.584s1.066-8.716-2.015-11.752c-1.34 3.528-7.502 4.733-7.502 4.733a16.62 16.62 0 0 0 3.215-2.947c-1.652.715-6.876 2.858-11.61 1.161a23.715 23.715 0 0 0 3.617-2.679s-4.287 2.322-8.44 1.742c-2.991 2.232-1.66 9.162-1.66 9.162C15 18.417 18.697 6.296 31.39 6.226c12.358-.069 16.17 11.847 12.018 23.358z"></path><path fill="#fff" fill-rule="evenodd" d="M23.255 42.179a17.39 17.39 0 0 0 7.958 6.446l-5.182 5.349L19.44 43.87z"></path><path fill="#fff" fill-rule="evenodd" d="M39.16 42.179a17.391 17.391 0 0 1-7.958 6.446l5.181 5.349 6.592-10.103z"></path><path fill="#3dbc93" fill-rule="evenodd" d="M33.366 61.7q-1.239.097-2.504.098-.954 0-1.895-.056l1.031-8.757h2.41z"></path><path fill="#3dbc93" fill-rule="evenodd" d="M28.472 51.456l2.737-2.817 2.736 2.817-2.736 2.817-2.737-2.817z"></path></g></g></svg>
                                                    </div>
                                                    <div>
                                                        <p className='chat-one'>00:01 - 00:17</p>
                                                    </div>
                                                </div>
                                                <div className='chat-wrapping'>
                                                    <div class="chat-wrapper">
                                                        <div className='chat-two'>One</div>
                                                        <div className='chat-two'>Two</div>
                                                        <div className='chat-two'>Three</div>
                                                        <div className='chat-two'>Four</div>
                                                        <div className='chat-two'>Three</div>
                                                        <div className='chat-two'>Four</div>
                                                        <div className='chat-two'>Five</div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='chat-bottom'>
                                            <div className='chat-body-caption'>
                                                    <div className='chat-avatar'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61.8 61.8" id="avatar"><g data-name="Layer 2"><g data-name="—ÎÓÈ 1"><circle cx="30.9" cy="30.9" r="30.9" fill="#485a69"></circle><path fill="#f9dca4" fill-rule="evenodd" d="M23.242 38.592l15.92.209v12.918l-15.907-.121-.013-13.006z"></path><path fill="#d5e1ed" fill-rule="evenodd" d="M53.478 51.993A30.814 30.814 0 0 1 30.9 61.8a31.225 31.225 0 0 1-3.837-.237A30.699 30.699 0 0 1 15.9 57.919a31.033 31.033 0 0 1-7.857-6.225l1.284-3.1 13.925-6.212c0 4.535 1.84 6.152 7.97 6.244 7.57.113 7.94-1.606 7.94-6.28l12.79 6.281z"></path><path fill-rule="evenodd" d="M39.165 38.778v3.404c-2.75 4.914-14 4.998-15.923-3.59z" opacity=".11"></path><path fill="#ffe8be" fill-rule="evenodd" d="M31.129 8.432c21.281 0 12.987 35.266 0 35.266-12.267 0-21.281-35.266 0-35.266z"></path><path fill="#f9dca4" fill-rule="evenodd" d="M18.365 24.045c-3.07 1.34-.46 7.687 1.472 7.658a31.973 31.973 0 01-1.472-7.658zM44.14 24.045c3.07 1.339.46 7.687-1.471 7.658a31.992 31.992 0 001.471-7.658z"></path><path fill="#ecbe6a" fill-rule="evenodd" d="M43.409 29.584s1.066-8.716-2.015-11.752c-1.34 3.528-7.502 4.733-7.502 4.733a16.62 16.62 0 0 0 3.215-2.947c-1.652.715-6.876 2.858-11.61 1.161a23.715 23.715 0 0 0 3.617-2.679s-4.287 2.322-8.44 1.742c-2.991 2.232-1.66 9.162-1.66 9.162C15 18.417 18.697 6.296 31.39 6.226c12.358-.069 16.17 11.847 12.018 23.358z"></path><path fill="#fff" fill-rule="evenodd" d="M23.255 42.179a17.39 17.39 0 0 0 7.958 6.446l-5.182 5.349L19.44 43.87z"></path><path fill="#fff" fill-rule="evenodd" d="M39.16 42.179a17.391 17.391 0 0 1-7.958 6.446l5.181 5.349 6.592-10.103z"></path><path fill="#3dbc93" fill-rule="evenodd" d="M33.366 61.7q-1.239.097-2.504.098-.954 0-1.895-.056l1.031-8.757h2.41z"></path><path fill="#3dbc93" fill-rule="evenodd" d="M28.472 51.456l2.737-2.817 2.736 2.817-2.736 2.817-2.737-2.817z"></path></g></g></svg>
                                                    </div>
                                                    <div>
                                                        <p className='chat-one'>00:01 - 00:17</p>
                                                    </div>
                                                </div>
                                                <div className='chat-wrapping'>
                                                    <div class="chat-wrapper">
                                                        <div className='chat-two'>One</div>
                                                        <div className='chat-two'>Two</div>
                                                        <div className='chat-two'>Three</div>
                                                        <div className='chat-two'>Four</div>
                                                        <div className='chat-two'>Five</div>
                                                        <div className='chat-two'>Three</div>
                                                        <div className='chat-two'>Three</div>
                                                        <div className='chat-two'>Four</div>
                                                        <div className='chat-two'>Five</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='image-section'>
                    <img src={QRCode} alt="Home Page Image"  className="qrcode-image"/>
                </div> 
            </div>
        </div>
    )
}

export default MainCaption;