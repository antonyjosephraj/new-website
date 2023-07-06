import React, { useEffect, useState } from 'react';

const RecordingAndProduction = () => {

    const [scrollPosition, setScrollPosition] = useState(0);

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
        const textSection = document.querySelector('.recording-and-production');

        if (textSection) {

            if (scrollPosition > 800 && scrollPosition < 1300 ) {

                let aa = parseInt(scrollPosition) - 850;   
                textSection.style.transform = "translate(0%, -" + aa.toString() +"%)";
                textSection.style.opacity = '1';

            } else {
                textSection.style.opacity = '0';
            }
        
        }
       
      }, [scrollPosition]);
    


    return (
        <div className="recording-and-production">
            <div className='recording-content'>
                <div className='recording-content1'><h2 className='crecording-content-title'>Recording & production</h2></div>
                <h1 className='crecording-content-head-one'>Record it</h1>
                <h1 className='crecording-content-head-two'>...or don't</h1>
            </div>
        </div>
    )
}

export default RecordingAndProduction;