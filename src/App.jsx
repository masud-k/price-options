
import './App.css'
import DaisyNav from './Component/Daisynav/DaisyNav'
import Navbar from './Component/Navbar/Navbar'

function App() {

  return (
    <>
      <div>
        <Navbar/>
        <DaisyNav/>
        <h2 className='text-3xl text-center font-semibold'>Price Options</h2>
        
      </div>

    </>
  )
}

export default App
