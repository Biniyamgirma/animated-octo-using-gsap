import React,{useRef} from 'react';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';

const DrawSVG = ()=>{
    const container = useRef(null);
    const checkmarkRef = useRef(null);

    useGSAP(()=>{
        const checkmark = checkmarkRef.current;
        if(!checkmark) return;

        const length = checkmark.getTotalLength();

        gsap.set(checkmark,{
            strokeDasharray:length,
            strokeDashoffset:length
        })

        gsap.to(checkmark,{
            strokeDashoffset:0,
            duration:.5,
            ease:'power1.inOut',
            scrollTrigger:{
                trigger:container.current,
                start:'top center',
                toggleActions:'play reverse play reverse',
                markers:true,
            }
        })
    },{scope:container});

    return(
        <>
        
        <div ref={container} className="h-screen flex flex-col items-center justify-center bg-gray-900">
            <h2 className="text-3xl mb-8 text-amber-50">SVG Line Drawing</h2>
            <svg width="150" height="150" viewBox='0 0 52 52'>
                <path 
                ref={checkmarkRef}
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
                fill='none'
                stroke='rgb(34 197 94)'
                strokeWidth='5'
                strokeLinecap='round'
                strokeLinejoin='round'
                />
            </svg>
        </div>
        </>
        
    )
} 
export default DrawSVG;