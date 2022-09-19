import { useState } from 'react'

const Button = ({handleClick, text}) => (
	<button onClick={handleClick}>
		{text}
	</button>
)

const StatisticLine = ({text, value}) => (
  <p>{text} {value}</p>
)

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const average = all ? (good - bad) / all : 0
  const positive = all ? good / all * 100 : 0

  if (!all)
    return <p>No feedback given</p>

  return (
    <>
    <StatisticLine text="good" value={good} />
    <StatisticLine text="neutral" value={neutral} />
    <StatisticLine text="bad" value={bad} />
    <StatisticLine text="all" value={all} />
    <StatisticLine text="average" value={average} />
    <StatisticLine text="positive" value={positive} />
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
	  <h1>give feedback</h1>
		<Button handleClick={() => setGood(good => good + 1)} text={"good"} />
		<Button handleClick={() => setNeutral(neutral + 1)} text={"neutral"} />
		<Button handleClick={() => setBad(bad + 1)} text={"bad"} />
	  <h1>statistics</h1>
    <Statistics good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

export default App
