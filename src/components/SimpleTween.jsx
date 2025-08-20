import React, {useEffect , useRef} from 'react';
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';

const SimpleTween = ()=>{
    const container = useRef(null);
    useGSAP(()=>{
     gsap.to('.box',{
            x:600,
            duration:2,
            rotation:360,
            backgroundColor: '#8d3dae',
            repeat:-1,
            yoyo:true,
            ease:"power1.inOut"
        })
    },{scop:container})
    
    return(
        <div ref={container} className="p-8">
            <h1 className="text-2xl mb-4 text-center text-white">modern way of gsap.to() tween</h1>
            <div  className="box w-24 h-24 bg-cyan-500 rounded-lg"></div>
        </div>
    )

}

export default SimpleTween;