import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
    return (
        <nav>
            <div className="nav-inner">
                <div className="nav-left">
                    <NavLink to="/dashboard/home" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
                    <NavLink to="/dashboard/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Contact</NavLink>
                    <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Menu</NavLink>
                </div>
                <div className="nav-right">
                    <NavLink to="/" className="nav-link">Logout</NavLink>
                </div>
            </div>
        </nav>
    )
}