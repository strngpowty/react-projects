import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  
  const fetchData = useEffect(()=>{

    async function  getData() {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
        console.log(response)
      } catch(e) {
        console.log(e)
      }
    }

    getData()

  }, [])

  fetchData()

  return (
    <>
     
    </>
  )
}

export default App
