import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Dashboard from './pages/Dashboard'
import WorkshopList from './pages/WorkshopList'
import Workshop from './pages/Workshop'
import Login from './pages/Login'
import AdminPanel from './pages/AdminPanel'
import './App.css'

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState(null)

    useEffect(() => {
        // Check if user is logged in
        const token = localStorage.getItem('auth_token')
        if (token) {
            setIsAuthenticated(true)
            // Fetch user data
            const userData = localStorage.getItem('user_data')
            if (userData) {
                setUser(JSON.parse(userData))
            }
        }
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('auth_token')
        localStorage.removeItem('user_data')
        setIsAuthenticated(false)
        setUser(null)
    }

    return (
        <Router>
            {isAuthenticated && <Navigation user={user} onLogout={handleLogout} />}
            <Routes>
                <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} setUser={setUser} />} />
                <Route path="/" element={isAuthenticated ? <Dashboard user={user} /> : <Login setIsAuthenticated={setIsAuthenticated} setUser={setUser} />} />
                <Route path="/workshops" element={<WorkshopList />} />
                <Route path="/workshops/:id" element={<Workshop />} />
                {user?.is_staff && <Route path="/admin" element={<AdminPanel />} />}
            </Routes>
        </Router>
    )
}

export default App
