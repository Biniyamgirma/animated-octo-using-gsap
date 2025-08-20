import './App.css'
import SimpleTween from './components/SimpleTween';
import FromTween from './components/FromTween';
import FromToTween from './components/FromToTween';
function App() {

  return (
    <>
      <main className='w-full min-h-screen bg-gray-900 p-8 absolute'>
        <h1 className='text-center text-4xl font-bold text-white'>Gsap + React</h1>
        <SimpleTween />
        <hr className="my-8 border-gray-700  relative" />
        <FromTween />
                <hr className="my-8 border-gray-700  relative" />
        <FromToTween />
      </main>
    </>
  )
}

export default App
