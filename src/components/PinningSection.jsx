import React,{useRef} from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const PinningSection = () => {
    const container = useRef(null);
    useGSAP(()=>{
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:".pinned-section",
                start:"top top",
                end:"bottom top",
                scrub:true,
                pin:true,
            }
        });
        tl.from('.list-item-1',{x:200,opacity:0})
        .from('.list-item-2',{x:200,opacity:0})
        .from('.list-item-3',{y:100,opacity:0});
    },{scope:container});
    return (
    <div ref={container} >
        <div className="h-screen bg-gray-900"></div>
        <section className="pinned-section h-screen bg-gray-800 p-8 flex flex-col items-center justify-center">
            <h2 className="text-4xl text-white mb-8">Pinned Story</h2>
            <ul className="text-2xl text-white space-y-4">
                <li className='list-item-1'>First This Will happen</li>
                <li className='list-item-2'>Second This Will happen</li>
                <li className='list-item-3'>Third This Will happen</li>
            </ul>
        </section>
        <div className="h-screen bg-gray-900"></div>
    </div>
    );

}
export default PinningSection;