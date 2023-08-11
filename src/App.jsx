import { useState } from 'react'
import './App.css'
import Answer from './Answer.jsx'

function App() {
  const CounterIncrease = () => {
    const [counter, setCounter] = useState(0)



    // Function is called everytime increment button is clicked
    const handleClick1 = () => {
      // Counter state is incremented
      setCounter(counter + 1)
    }
  }

  //Input data tracker
  const [formData, setFormData] = useState({
    day: "",
    month: "",
    year: "",
  });



  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log("handlechangeworks")
    console.log(e.target.value)
  };


  const [dayValue, setDayValue] = useState(null);


  return (
    <>
      <div className="container">
        <section className="container-top">
          <div className="day inputs">
            <h2>Day</h2>

            <input
              class="input"
              // type="number"
              id="day"
              placeholder="DD"
              value={formData.day} onChange={handleChange}
              required
            />
          </div>
          <div className="month inputs">
            <h2>Month</h2>
            <input
              class="input"
              type="number"
              id="Month"
              placeholder="MM"
              value={formData.month} onChange={handleChange}
              required
            />
          </div>
          <div className="year inputs">
            <h2>Year</h2>
            <input
              class="input"
              type="number"
              id="day"
              placeholder="YYYY"
              value={formData.year} onChange={handleChange}
              required
            />
          </div>
        </section>





        <div className="end-container">

          <Answer />
        </div>
      </div>
    </>
  )
}

export default App