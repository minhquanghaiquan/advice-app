import React, { useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios';

function App() {
  const [advice , setAdvice] = useState('')

  useEffect(() => {
    fetchAdvice()
  }, []);


  const fetchAdvice = async () => {
    let data = await Axios.get('https://api.adviceslip.com/advice');
    while(data.data.slip.advice === advice) {
       data = await Axios.get('https://api.adviceslip.com/advice');
    }
    setAdvice(data.data.slip.advice)
    console.log(data.data.slip.advice)
  }


  return (
    <div className="App">
        <div className="card">
            <h2 className="heading">{advice}</h2>
            <button className="button" onClick={fetchAdvice}>
              <span>GIVE ME ADVICE</span>
            </button>
        </div>

    </div>
  );
}

export default App;
