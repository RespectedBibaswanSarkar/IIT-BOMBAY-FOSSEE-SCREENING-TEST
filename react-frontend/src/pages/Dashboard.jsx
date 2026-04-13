import React, { useState, useEffect } from 'react'
import { workshopAPI } from '../services/api'
import './Dashboard.css'

function Dashboard({ user }) {
    const [stats, setStats] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchStats()
    }, [])

    const fetchStats = async () => {
        try {
            const response = await workshopAPI.getStats()
            setStats(response.data)
        } catch (error) {
            console.error('Failed to fetch stats:', error)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return <div className="dashboard-container"><p>Loading...</p></div>
    }

    return (
        <div className="dashboard-container">
            <div className="page-header">
                <h1>Welcome, {user?.username}!</h1>
                <p>FOSSEE Workshop Booking System</p>
            </div>

            {stats && (
                <div className="stats-grid">
                    <div className="stat-card">
                        <h3>Total Workshops</h3>
                        <p className="stat-number">{stats.total_workshops || 0}</p>
                    </div>
                    <div className="stat-card">
                        <h3>My Registrations</h3>
                        <p className="stat-number">{stats.user_registrations || 0}</p>
                    </div>
                    <div className="stat-card">
                        <h3>Upcoming Workshops</h3>
                        <p className="stat-number">{stats.upcoming_workshops || 0}</p>
                    </div>
                    <div className="stat-card">
                        <h3>Completed Workshops</h3>
                        <p className="stat-number">{stats.completed_workshops || 0}</p>
                    </div>
                </div>
            )}

            <div className="dashboard-info">
                <h2>Dashboard Information</h2>
                <p>Use the navigation menu to explore workshops and manage your registrations.</p>
                <ul>
                    <li>View all available workshops</li>
                    <li>Register or unregister from workshops</li>
                    <li>Track your participation</li>
                    {user?.is_staff && <li>Access admin panel for management</li>}
                </ul>
            </div>
        </div>
    )
}

export default Dashboard
