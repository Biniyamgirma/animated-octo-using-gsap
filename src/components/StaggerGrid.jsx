import React,{useRef} from "react";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

const StaggerGrid = () => {
    const container = useRef(null);
    useGSAP(()=>{
        gsap.from('.grid-card',{
            opacity:0,
            scale:0.5,
            y:100,
            ease:"back.out(1.7)",
            stagger:{
                each:0.1,
                from:"start",
                grid:"auto",
            }
        })
    },{scope:container});

    const cards = Array.from({length:12});
    return(
        <div ref={container} className="p-8">
            <h2 className="text-4xl text-center mb-8">Stagger Grid Animation</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {cards.map((_,index)=>(
                    <div key={index} className="grid-card bg-gray-800 aspect-square rounded-lg flex items-center justify-center">
                        <span className="text-2xl">{index+1}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default StaggerGrid;