import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Register(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  function handleSubmit(e){
    e.preventDefault()
    // No backend: just redirect to login
    navigate('/')
  }
  return (
    <div style={{paddingTop:60}}>
      <div className="container" style={{maxWidth:420}}>
        <div className="card">
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required />
            <button type="submit" style={{width:'100%'}}>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}