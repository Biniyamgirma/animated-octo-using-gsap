import React,{useRef} from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
const TimeLine = () => {
  const ref = useRef(null);
  const t1 =gsap.timeline();

  useGSAP( ()=>{
    t1.to(".box",{x:200,duration:1})
    .to(".box",{y:-200,duration:1})
    .to(".box",{rotation:360,opacity:0,duration:1.5});
  },{scope:ref})
    return (
        <div ref={ref} className="flex flex-row min-h-screen justify-center items-center">
            <div className="box w-24 h-24 bg-red-500 mx-4 flex-row items-center justify-center"></div>
        </div>
    )  
};

export default TimeLine;