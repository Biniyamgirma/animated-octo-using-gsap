import './App.css'
import SimpleTween from './components/SimpleTween';
import FromTween from './components/FromTween';
import FromToTween from './components/FromToTween';
import TimeLine from './components/TimeLine';
import SimpleTimeLine from './components/SimpleTimeline';
import OverlappingTimeline from './components/OverlappingTimeline';
import ControlledTimeline from './components/ControlledTimeline';
function App() {
{/* <main className='w-full min-h-screen bg-gray-900 p-8 absolute'>
        <h1 className='text-center text-4xl font-bold text-white'>Gsap + React</h1>
        <SimpleTween />
        <hr className="my-8 border-gray-700  " />
        <FromTween />
                <hr className="my-8 border-gray-700  " />
        <FromToTween />
        <hr className="my-8 border-gray-700  " />
        <TimeLine />
            <SimpleTimeLine />      
            <OverlappingTimeline />

      </main> */}
  return (
    <main className='w-full min-h-screen bg-gray-900 p-8 absolute'>
      <ControlledTimeline />
    </main>
    
    
  )
}

export default App
