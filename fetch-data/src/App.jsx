import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [error, setError] = useState([])
  
  useEffect(()=>{
    async function getDataAsync() {
      try {
        const response =  await axios.get('https://jsonplaceholder.typicode.com/posts')
        setData(response.data)
        console.log("response" ,response.data)
      } catch(err) {
        setError(err)
      }
    }
    getDataAsync()
  }, [])

  if(!data.length) return ( <p>Loading</p>) 
  if(!error) return  (<p>{error}</p>)

  return (
    <>
      {data && data.slice(0, 10).map(record => (
        <>
          <p key={record.id}>{record.title}</p>
        </> 
      ) )}
    </>
  )
}

export default App
