import { useState } from 'react'
import './App.css'
import Answer from './Answer.jsx'

function App() {
  const [counter, setCounter] = useState(0);


  //Input data tracker
  const [formData, setFormData] = useState({
    day: "",
    month: "",
    year: "",
  });

  const handleChange = (e) => {
    console.log("event", e);
    let newFormData = { ...formData };
    newFormData[e.target.name] = e.target.value;

    setFormData(newFormData);
  };


  return (
    <>
      <div className="container">
        <section className="container-top">
          <div className="day inputs">
            <h2>Day</h2>

            <input
              className="input"
              type="number"
              name="day"
              maxLength={2}
              id="day"
              placeholder="DD"
              value={formData.day} onChange={(e) => handleChange(e)}
              required
            />
          </div>

          <div className="month inputs">
            <h2>Month</h2>
            <input
              className="input"
              type="number"
              name="month"
              maxLength={2}
              id="Month"
              placeholder="MM"
              value={formData.month} onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div className="year inputs">
            <h2>Year</h2>
            <input
              className="input"
              type="number"
              name="year"
              maxLength={4}
              id="day"
              placeholder="YYYY"
              value={formData.year} onChange={(e) => handleChange(e)}
              required
            />
          </div>
        </section>

        {/* //start counter section */}
        <input type="number" disabled={true} value={counter} />

        <button onClick={() => setCounter(counter + 1)}>+ Counter</button>

        <div className="end-container">
          {/* end counter section */}
          <Answer />
        </div>
      </div >
    </>
  )
}

export default App