import React, {useEffect , useRef} from 'react';
import gsap from 'gsap';

const SimpleTween = ()=>{
    const boxRef = useRef(null);
    useEffect(()=>{
        gsap.to(boxRef.current,{
            x:600,
            duration:2,
            rotation:360,
            backgroundColor: '#8d3dae',
            repeat:-1,
            yoyo:true,
            ease:"power1.inOut"
        })
    },[])
    return(
        <div className="p-8">
            <h1 className="text-2xl mb-4 text-center text-white">goTo() tween</h1>
            <div ref={boxRef} className="w-24 h-24 bg-cyan-500 rounded-lg"></div>
        </div>
    )

}

export default SimpleTween;