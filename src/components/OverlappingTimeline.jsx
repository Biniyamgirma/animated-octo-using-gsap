import React,{useRef} from 'react';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';

const OverlappingTimeline = () => {
    const ref = useRef(null);
    useGSAP(()=>{
        const t1 = gsap.timeline(
            {
                defaults:{
                    duration:0.8,
                    ease:'power2.out'
                }
            }
        );
        t1.from('.title',{
            opacity:0,
            y:-50,
            duration:1,
            ease:'power2.out',
        })
        .add("subtitleStart","-=0.5")
        .from(
            '.subtitle',
            {
                opacity:0,
                y:50,
                duration:1,
                ease:'power2.out',
            },
            "subtitleStart"
        )
        .from('.button',{
            opacity:0,
            scale:0,
            duration:0.8,
            ease:'back.out(1.7',
        },'subtitleStart')
    },{scope:ref});

    return(
        <div ref={ref} className='p-8 text-center'>
            <h2 className='text-2xl font-bold mb-4 text-amber-100'>Overlapping Timeline</h2>
            <div className='relative'>
                <h1 className="title text-5xl font-extrabold text-green-400">Wellcome To the show</h1>
                <h3 className='subtitle text-2xl text-gray-300 mt-2'>Powerd by GSAP Timeline</h3>
                <button className="button bg-blue-400 hover:bg-blue-700 font-bold text-white py-2 px-4 rounded-full mt-8">Get Started</button>
            </div>
        </div>
    )
}
export default OverlappingTimeline;