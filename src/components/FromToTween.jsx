import {useRef,useEffect} from 'react';
import gsap from 'gsap';

const FromToTween = ()=>{
    const circlRef = useRef(null);
    useEffect(()=>{
    gsap.fromTo(circlRef.current,{
        x:-200,
        scale:0.2,
        opacity:0,
    },{
        x:400,
        scale:1,
        opacity:1,
        duration:2.5,
        ease:'back.in(1.7)',
        rotate:360,
    })
    },[]);

    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-teal-700">
                .fromTo()
            </h2>
            <div ref={circlRef} className="w-24 h-24 bg-blue-600 rounded-full"></div>
        </div>
    )
}

export default FromToTween;