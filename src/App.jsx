import React from 'react'
import { useState } from 'react'

const App = () => {


  const [username, setUsername] = useState('')
  const [email, setemail] = useState('')

  function formHandler(e) {
    e.preventDefault()
     console.log(username);
     console.log(email);
  }

  return (
    <div className='form'  >


      <form onSubmit={(e) => {
        formHandler(e)

      }}  >

        <input
          value={username}
          onChange={(e) => {
            setUsername(e.target.value)

          }}
          type="text" placeholder='Enter Name' />
        <input
        
        value={email}
        onChange={(e)=>{
          setemail(e.target.value)

        }}
        
        type="email" placeholder='Enter Email' />
        <button>Submit</button>

      </form>


    </div>
  )
}

export default App
