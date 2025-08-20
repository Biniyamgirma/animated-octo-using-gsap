import gsap from 'gsap';
import {useEffect , useRef} from 'react'

const FromTween = () =>{
    const headingRef = useRef(null);
    useEffect(()=>{
        console.log("headingRef.current:", headingRef.current);
        gsap.from(headingRef.current , {
            y: 50, // Start 50px below its final position
opacity: 0, // Start completely transparent
duration: 1.5, // Animation takes 1.5 seconds
ease: 'elastic.out(1, 0.5)', // A fun, bouncy ease

        });
    },[]);

    return (
        <div className="p-8 absolute">
            <h2 className="font-bold text-yellow-900 text-4xl relative" ref={headingRef}>
                wellcom
            </h2>
        </div>
    )

}

export default FromTween;