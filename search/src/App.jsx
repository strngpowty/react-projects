import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [data, setData] = useState([])
  const [error, setError] = useState("")
  const [search, setSearch] = useState("")
  const [showlist, setShowList] = useState([])

  useEffect(()=> {
    async function getData() {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
        setData(response.data)
        setShowList(response.data)
        console.log(response.data)
      } catch(err) {
        setError(err)
      }
    }
    getData()
  }, [])


  function handleSearchInput(e) {
    let value = e.target.value
    setSearch(value)
    if(!value.length) {
      setShowList(data)
    } else {
      setShowList(data.filter(item => item.title.toLowerCase().includes(value.toLowerCase()) ))
    }
  }

  if (!data.length && !error) return (<p>Loading</p>)
  if (error) return (<p>Error: {error.message}</p>)

  return (
    <>
      <input value={search} onChange={(e) => handleSearchInput(e)  } />
      {showlist && showlist.map(item => {
        return (
          <p key={item.id}> {item.title} </p>
        )
      })}
    </>
  )
}

export default App
