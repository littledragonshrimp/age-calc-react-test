import { useState } from 'react'
import './App.css'
import './Answer.jsx'

function App() {
  const CounterIncrease = () => {
    const [counter, setCounter] = useState(0)



    // Function is called everytime increment button is clicked
    const handleClick1 = () => {
      // Counter state is incremented
      setCounter(counter + 1)
    }
  }
  return (
    <>
      <h1>Hiii</h1>
      <div className="container">
        Day
        DD
        <button onClick={(handleClick1(0))}>click</button>
        <CounterIncrease />
        Month
        MM

        Year
        YYYY

      </div>
    </>
  )
}

export default App