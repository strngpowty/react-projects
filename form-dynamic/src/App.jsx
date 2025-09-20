import { useState } from 'react'
import "./App.css"

function App() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const [error, setError] = useState({
    name: "",
    email: "",
    password: ""
  })

  const fields = [
    {label: "Name", name: "name", type: "text"},
    {label: "Email", name: "email", type: "email"},
    {label: "Password", name: "password", type: "password"}
  ]

  function handleChange(e) {
    const {name, value} = e.target
    setFormData({...formData, [name]:value})
  }

  function handleBlur(e) {
    const {name, value} = e.target
    let err = ""
    switch(name) {
      case "name": {
        const nameRegex = /^[a-zA-Z\s-]+$/
        if(!nameRegex.test(value)) err = "Enter valid name"
        break
      }
      case "email": {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if(!emailRegex.test(value)) err = "Enter valid email"
        break
      }
      case "password": {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        if(!passwordRegex.test(value)) err = "Enter valid Password"
        break
      }
    }
    setError({...error, [name]:err})
  }

  return (
    <form className="container">
      {fields && fields.map(field => (
        <div key={field.name} className={"field" + " " + field.name}>
          <label className="item label"> {field.label} </label>
          <input type={"item" + " " + field.type}
            className='input'
            name={field.name}
            value={formData[field.name]}
            onChange={(e) => handleChange(e)}
            onBlur={(e) => handleBlur(e)}
          />
          <p className="item error"> {error[field.name]} </p>
        </div>
      ))}
      <div className="btn">
        <button className="submit">Submit</button>
      </div>
    </form>
  )
}

export default App;