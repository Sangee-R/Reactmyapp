import React from 'react'
import { Link } from 'react-router-dom'

export default function Forgot() {
    return (
        <div style={{ paddingTop: 60 }}>
            <div className="container" style={{ maxWidth: 420 }}>
                <div className="card">
                    <h2>Forgot Password</h2>
                    <p className="small">Enter your email and press Reset. (Demo only)</p>
                    <input type="email" placeholder="Email" />
                    <div style={{ display: 'flex', gap: 8 }}>
                        <button>Reset</button>
                        <Link to="/">Back</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}