import React,{useRef} from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const ScrubAnimation = () => {
    const container = useRef(null);

    useGSAP( ()=>{
        gsap.to('.progress-bar',{
            scaleX:1,
            ease:'none',
            scrollTrigger:{
                trigger:".scroll-section",
                start:"top top",
                end:"bottom bottom",
                scrub:1,
                markers:true,
            }
        });
    },{scope:container});

    return (
        <div ref={container}>
            <div className="h-screen"></div>
            <div className="scroll-section h-[200vh] bg-gray-800.p-8 relative">
                <div className="sticky top-0 left-0 w-full pt-8">
                    <h2 className="text-4xl text-center mb-4">Schroll Throuh Me</h2>
                    <div className="w-full bg-gray-600 h-4 rounded-full">
                        <div className="progress-bar w-full h-full bg-green-500 rounded-full origin-left transform scale-x-0"></div>
                    </div>
                </div>
            </div>
            <div className="h-screen"></div>
        </div>
    );
}

export default ScrubAnimation;