
import './App.css'
import Charts from './Component/Charts/Charts'
// import DaisyNav from './Component/Daisynav/DaisyNav'
import Navbar from './Component/Navbar/Navbar'
import Phone from './Component/Phone/Phone'
import PriceOptions from './Component/PriceOptions/PriceOptions'

function App() {

  return (

    <div>
      <Navbar />
      {/* <DaisyNav/> */}

      <h1 className='text-5xl text-center font-semibold'>Price options</h1>
      <PriceOptions />
      <Charts></Charts>
      <Phone/>
    </div>
  )
}

export default App
