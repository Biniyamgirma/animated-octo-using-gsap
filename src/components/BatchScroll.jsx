import React,{useRef } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const BatchScroll = () => {
    const container = useRef(null);
    useGSAP(()=>{
        ScrollTrigger.batch(".card",{
            onEnter: batch => {
                gsap.from(batch,{
                    opacity:0,
                    y:50,
                    stagger:0.15,
                    ease:"power2.out",
                });
            },
            onLeaveBack: batch=>{
                gsap.to(batch,{
                    opacity:0,
                    y:-50,
                    stagger:0.1,
                });
            },
            start:"top 80%",
            markers:true,
        })
    },{scope:container});

    const cards = Array.from({length:12});

    return (
        <>
        <div className='bg-cyan-200 h-screen'></div>
         <div ref={container} className="p-8">
            <h2 className="text-4xl text-center mb-8">Batch Animation</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {cards.map((_,index)=>(
                    <div key={index} className="card bg-gray-800 text-green-500 p-8 rounded-lg text-center opacity-1">
                        Card {index + 1}
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, deserunt.</p>
                    </div>
                ))}
            </div>
        </div>
        </>
       
    )


}
export default BatchScroll;