import React, { useEffect, useState } from 'react';

const AIScriptWriter = () => {

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
        const textSection = document.querySelector('.ai-script-writer');
    
        if (textSection) {

            if (scrollPosition > 1660) {

                const startScroll = 1660;
                const endScroll = 2150; // 1350
                const startY = 1;
                const endY = -170;


                var progress = (scrollPosition - startScroll) / (endScroll - startScroll);
                let translateY = (startY + (progress * (endY - startY))).toString();

                textSection.style.transform = "translate(0%, " + translateY +"%)";
                textSection.style.opacity = '1';

            } else {
                textSection.style.opacity = '0';
                
            }
        }
       
      }, [scrollPosition]);
    
    return (
        <div className="ai-script-writer">
            <div className='content-two'>
                    <h2 className='content-two-text1'>AI Script writer</h2>
                    <h1 className='content-two-text2'>It starts</h1>
                    <h1 className='content-two-text3'>with an idea</h1>
                    <article className='content-two-text4'>Say goodbye to writer's block. Captions simplifies the creative process and helps you elevate your storytelling to new heights.</article>
            </div>
        </div>
    )
}

export default AIScriptWriter;