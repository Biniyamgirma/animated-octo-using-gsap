import React,{useRef} from 'react';
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';

const SimpleScroll = ()=>{
    const container = useRef(null);

    useGSAP(()=>{
        gsap.from('.box',{
            x:-200,
            opacity:0,
            duration:1.5,
            ease:'power2.out',
            scrollTrigger:{
                trigger:'.box',
                start:'center center',
                end:'bottom 30%',
                markers:true,
            }
        });
    },{scope:container});
    return(
        <div ref={container}>
            <div className="h-screen flex item-center justify-center">
                <h2 className="text-3xl">Scroll Down</h2>
            </div>
            <div className="box w-32 h-32 bg-green-500 rounded-lg mx-auto"></div>
            <div className="h-screen"></div>
        </div>
    );
}

export default SimpleScroll;