import React,{useRef} from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const ControlledTimeline = ()=>{
    const container = useRef(null);
    const t1 = useRef(null);
    useGSAP(()=>{
            t1.current = gsap.timeline({paused:true})
            .to('.orb',{
                x:200,
                duration:2,
                ease:'power2.inOut',
            })
            .to('.orb',{
                y:-150,
                backgroundColor:'#8d3dae',
                duration:1.5,
                ease:'bounce.out',
            },'-=0.5')
            .to('.orb',{
                rotation:360,
                scale:0.5,
                duration:2,
                ease:'power2.inOut',
            })

    },{scope:container});
    const handlePause = ()=> t1.current?.pause();
    const handlePlay = ()=> t1.current?.play();
    const handleReverse = () => t1.current?.reverse();
    const handleRestart = () => t1.current?.restart();
    const handleSpeedUp = () => t1.current?.timeScale(2);
    const handleSlowDown = () => t1.current?.timeScale(0.5);

    return(
        <div ref={container} className="p-8">
            <h2 className="text-2xl font-bold mb-4">Controlled Timeline</h2>
            <div className="orb w-24 h-24 bg-green-500 rounded-full"></div>
            <div className="flex flex-wrap gap-2 mt-4">
                <button onClick={handlePlay} className="btn">Play</button>
                <button onClick={handlePause} className="btn">Pause</button>
                <button onClick={handleReverse} className="btn">Reverse</button>
                <button onClick={handleRestart} className="btn">Restart</button>
                <button onClick={handleSpeedUp} className="btn">Speed Up(2x)</button>
                <button onClick={handleSlowDown} className="btn">Slow Down(0.5x)</button>
            </div>
        </div>
    )

}

export default ControlledTimeline;