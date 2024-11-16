
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [names, setNames] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/names')
      .then(res => res.json())
      .then(data => setNames(data))
  }, [])

  const handleAddinfor = (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value;
    const email = form.email.value;

    const user = { name, email }
    console.log(user)
    
    fetch('http://localhost:5000/names', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        const gotNewUsers = [...names, data];
        setNames(gotNewUsers);
        form.reset();
      })
  
  }

  console.log(names)

  return (
    <>

      <h1>Client and Servier Side</h1>
      <h4>All Datas : {names.length}</h4>
      <form onSubmit={handleAddinfor}>
        <input type="text" name='name' /><br />
        <input type="email" name="email" id="" /><br />
        <input type="submit" value="Add" />
      </form>

      <div>
        {
          names.map(item => <p key={item.id}>{item.id}: {item.name} : {item.email}</p>)
        }
      </div>

    </>
  )
}

export default App
