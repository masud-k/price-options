
import './App.css'
// import DaisyNav from './Component/Daisynav/DaisyNav'
import Navbar from './Component/Navbar/Navbar'
import PriceOptions from './Component/PriceOptions/PriceOptions'

function App() {

  return (

    <div>
      <Navbar />
      {/* <DaisyNav/> */}

      <h1 className='text-5xl text-center font-semibold'>Price options</h1>
      <PriceOptions />
    </div>
  )
}

export default App
