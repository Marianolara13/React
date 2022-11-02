import React, { useState } from 'react'


const Statistics = (props) => {

  const all = props.good + props.neutral + props.bad;
    return (
      <>
        <h1>statistics</h1>
    
        <div>
          <div>good {props.good}</div>
          <div>neutral {props.neutral}</div>
          <div>bad {props.bad}</div>
          <div>all {props.good + props.neutral + props.bad}</div>
          <div>average {(props.good - props.bad) / all}</div>
          <div>positive {`${(props.good / props.all) * 100}%`}</div>
        </div> 
  
      </>
    );
};

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  
  return (
    <>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)} >good</button>
      <button onClick={() => setNeutral(neutral + 1)} >neutral</button>
      <button onClick={() => setBad(bad + 1)} >bad</button>
      
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
          
  
   </>
  )
}

export default App;