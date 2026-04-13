import React, { useState, useEffect } from 'react'
import { adminAPI } from '../services/api'
import './AdminPanel.css'

function AdminPanel() {
    const [workshops, setWorkshops] = useState([])
    const [stats, setStats] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchAdminData()
    }, [])

    const fetchAdminData = async () => {
        try {
            const [workshopsRes, statsRes] = await Promise.all([
                adminAPI.getWorkshops(),
                adminAPI.getStats()
            ])
            setWorkshops(workshopsRes.data)
            setStats(statsRes.data)
        } catch (error) {
            console.error('Failed to fetch admin data:', error)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return <div className="admin-container"><p>Loading admin panel...</p></div>
    }

    return (
        <div className="admin-container">
            <h1>Admin Panel</h1>

            {stats && (
                <div className="admin-stats">
                    <div className="stat-card">
                        <h4>Total Workshops</h4>
                        <p>{stats.total_workshops || 0}</p>
                    </div>
                    <div className="stat-card">
                        <h4>Total Registrations</h4>
                        <p>{stats.total_registrations || 0}</p>
                    </div>
                    <div className="stat-card">
                        <h4>Active Users</h4>
                        <p>{stats.active_users || 0}</p>
                    </div>
                </div>
            )}

            <h2>Workshops Management</h2>
            <table className="workshops-table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Participants</th>
                        <th>Capacity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {workshops.map((workshop) => (
                        <tr key={workshop.id}>
                            <td>{workshop.title}</td>
                            <td>{new Date(workshop.date).toLocaleDateString()}</td>
                            <td><span className={`status ${workshop.status}`}>{workshop.status}</span></td>
                            <td>{workshop.participants || 0}</td>
                            <td>{workshop.capacity || '-'}</td>
                            <td>
                                <button className="btn-edit">Edit</button>
                                <button className="btn-delete">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AdminPanel
