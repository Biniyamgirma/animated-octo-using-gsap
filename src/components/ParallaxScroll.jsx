import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import mountainImage from '../../public/images/mountain.jpg';

const ParallaxScroll = () => {
    const container = useRef(null);
    useGSAP(()=>{
        gsap.to('.bg-image',{
            y:-150,
            ease:'none',
            scrollTrigger:{
                trigger:".hero-section",
                start:"top top",
                end:"bottom top",
                scrub:true,
            }
        })
        .to('.hero-text',{
            y:100,
            opacity:0,
            ease:'none',
            scrollTrigger:{
            trigger:".hero-section",
            start:"top top",
            end:"bottom center",
            scrub:true,
            }
        })
    },{scope:container});
    return (
        <div ref={container}>
            <section className="hero-section h-screen relative overflow-hidden flex items-center justify-center">
                 <img src={mountainImage} alt="mountain Image" className='bg-image absolute top-0 left-0 w-full h-[120vh] object-cover' />
                 <div className="hero-text relative z-10 text-center text-white">
                    <h1 className="text-7xl font-extrabold">Parallax Effect</h1>
                    <p className="text-2xl mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, minima.</p>
                 </div>
            </section>
            <section className="h-screen bg-gray-900 flex items-center justify-center">
                <h2 className="text-4xl text-white">Section 2 or Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, iusto.</h2>
            </section>
        </div>
    );

}

export default ParallaxScroll;
