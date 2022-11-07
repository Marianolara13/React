import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad;
  
  return (
    <>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)} >good</button>
      <button onClick={() => setNeutral(neutral + 1)} >neutral</button>
      <button onClick={() => setBad(bad + 1)} >bad</button>
      
      <h1>statistics</h1>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {all}</div>
      <div>average {all > 0 ? (good - bad) / all : 0}</div>
      <div>positive {all > 0 ? `${(good / all) * 100}%` : 0}</div>
      
   </>
  )
}

export default App;
