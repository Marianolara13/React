import React, { useState } from 'react'

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = (props) => {

  const all = props.good + props.neutral + props.bad;
    return (
      <>
        <h1>statistics</h1>
        {props.good || props.neutral || props.bad ? 
        <div>
          <table>
            <tbody>
              <Statistic text="good" value={props.good} />
              <Statistic text="neutral" value={props.neutral} />
              <Statistic text="bad" value={props.bad} />
              <Statistic text="all" value={props.good + props.neutral + props.bad} />
              <Statistic text="average" value={(props.good - props.bad) / all} />
              <Statistic text="positive" value={`${(props.good / props.all) * 100}%`} />
            </tbody>
          </table>
        
        </div> 
        : "No feedback given"} 
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