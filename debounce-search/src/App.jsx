import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [response, setResponse] = useState([])
  const [search, setSearch] = useSate("")
  const [error, setError] = useState([])
  const [list, setList] = useState([])

  useEffect(() => {

    async function getData() {
      try {
        const data = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setResponse(data)
        setList(data)
      } catch(err) {
        setError(err)
      }
    }    
    getData()
  }, [])

  function handleSearch(value) {
    setSearch(value)
    if (value === "") {
      setList(response)
    }
  }

  return (
    <>
    
    </>   
  )
}

export default App
