import React,{useRef} from 'react'
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import hero from '../images/mountain1.jpg'

const Project1 = () => {
    const container = useRef(null);
    useGSAP(()=>{
        const tl = gsap.timeline({
            defaults:{duration:1.5,ease:"power2.out"}
        });
        tl.fromTo(container.current.querySelector('img'),{scale:1.2},{scale:1.5,duration:4})
        .from('.word-1',{
            y:100,
            opacity:0,
            stagger:0.3,
        },"-=1")
        .from('.sub-heading',{
            y:100,
            opacity:0,
            duration:.5,
            ease:"power2.out"
        },">")
        .from('.btnContainer',{
            y:100,
            opacity:0,
            duration:1,
            ease:"bounce.out"
        },"-=0.5")
    },{scope:container});

    return (
        <div ref={container}>
            <section className='relative max-h-screen w-full overflow-hidden' >
                <img src={hero} alt=""  className='w-full min-h-screen bg-center bg-cover'/>
                <div className="absolute top-0 left-0 flex flex-col justify-center items-center min-h-screen overflow-hidden w-full">
                <h1 className="text-6xl text-white p-3">
                    <span className='word-1'>Hello</span>
                    <span className='word-1'> From</span>
                    <span className='word-1'> My </span>
                    <span className='word-1'>
                         Animation
                    </span>
                </h1>
                <p className="sub-heading text-2xl text-white font-bold">My Name is Biniyam Girma i'am A computer Scinece student At Debre Berhan University</p>
                <div className='btnContainer flex gap-4 pt-4'>
                    <button className='text-white border-2 border-white bg-transparent  hover:bg-white hover:text-black rounded-lg px-4 py-2 cursor'>Get In Touch</button>
                    <button className='text-black bg-white border-2 border-white hover:bg-black hover:text-white rounded-lg px-4 py-2 cursor-default'>Hire Me</button>
                </div>
                </div>
                
                
            </section>
        </div>
    )


}

export default Project1;
