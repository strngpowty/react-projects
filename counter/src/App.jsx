import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function handleDcr() {
    if(count != 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className="card">
      <div className="header">
        <h1>Counter App</h1>
      </div>
      <div className="counter">
        <div className="item">
          <button className="icr btn" onClick={() => setCount(count+1)}> + </button>
        </div>
        <div className="item">
          <h2 className="">{count}</h2>
        </div>
        <div className="item">
          <button className="dcr btn " onClick={handleDcr}> - </button>
        </div>
      </div>
    </div>
  )
}

export default App
