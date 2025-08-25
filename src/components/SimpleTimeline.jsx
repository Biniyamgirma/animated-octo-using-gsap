import React,{useRef} from 'react';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';

const SimpleTimeLine = ()=>{
    const ref = useRef(null);
    useGSAP( ()=>{
            const t1 =gsap.timeline();
        t1.to('.box-1',{
            x:300,
            duration:1,
            ease:'power2.inOut',
        })
        .to('.box-2',{
            y:-100,
            duration:1,
            ease:'elastic.out(1,0.5)',
        })
        .to('.box-3',{
            rotation:360,
            scale:0.5,
            duration:1,
            ease:'bounce.out',
        })
    },{scope:ref});
    return(
        <div ref={ref} className='p-8'>
            <h2 className='text-2xl font-bold mb-4 text-amber-100'>Simple Timeline Sequence</h2>
            <div className='box-1 w-24 h-24 bg-green-400 rounded-lg'></div>
            <div className='box-2 w-24 h-24 bg-blue-400 rounded-lg'></div>
            <div className='box-3 w-24 h-24 bg-fuchsia-400 rounded-lg'></div>
        </div>
    )
}
export default SimpleTimeLine;