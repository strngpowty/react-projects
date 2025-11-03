import './App.css'
import { useState } from 'react'

function App() {

  const[counter, setCounter] = useState(0)
  const[num, setNum] = useState(0)

  const incr = () => {
      setCounter(counter+1)
  }

  const decr = () => {
    setCounter(counter-1)
  }


  return (
    <>
      <button onClick={incr}>Increment</button>
      <p>{counter}</p>
      <button onClick={decr}>Decrement</button>
      <input type="number" value={num} onChange={(e) => setNum(e.target.value)}/>
      <button onClick={()=> setCounter(num+counter)}>Increment by</button>
    </>
  )
}

export default App
