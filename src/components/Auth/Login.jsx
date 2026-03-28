import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { loginSuccess } from '../../features/auth/authSlice'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        // Fake auth: accept any credentials
        dispatch(loginSuccess({ email }))
        navigate('/dashboard/home')
    }

    return (
        <div style={{ paddingTop: 60 }}>
            <div className="container" style={{ maxWidth: 420 }}>
                <div className="card">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
                        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
                        <button type="submit" style={{ width: '100%' }}>Login</button>
                    </form>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 12 }}>
                        <Link to="/forgot-password">Forgot password?</Link>
                        <Link to="/register">Register</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}