import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

function Navigation({ user, onLogout }) {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="nav-logo">
                    <span className="logo-icon">🚀</span>
                    FOSSEE Workshop
                </Link>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/workshops" className="nav-link">Workshops</Link>
                    </li>
                    {user?.is_staff && (
                        <li className="nav-item">
                            <Link to="/admin" className="nav-link">Admin</Link>
                        </li>
                    )}
                    <li className="nav-item">
                        <span className="nav-user">{user?.username}</span>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link logout-btn" onClick={onLogout}>Logout</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation
