import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { workshopAPI } from '../services/api'
import './Workshop.css'

function Workshop() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [workshop, setWorkshop] = useState(null)
    const [loading, setLoading] = useState(true)
    const [isRegistered, setIsRegistered] = useState(false)
    const [actionLoading, setActionLoading] = useState(false)

    useEffect(() => {
        fetchWorkshop()
    }, [id])

    const fetchWorkshop = async () => {
        try {
            const response = await workshopAPI.getOne(id)
            setWorkshop(response.data)
            setIsRegistered(response.data.is_registered || false)
        } catch (error) {
            console.error('Failed to fetch workshop:', error)
        } finally {
            setLoading(false)
        }
    }

    const handleRegister = async () => {
        setActionLoading(true)
        try {
            await workshopAPI.register(id, {})
            setIsRegistered(true)
            fetchWorkshop()
        } catch (error) {
            alert('Registration failed: ' + (error.response?.data?.detail || error.message))
        } finally {
            setActionLoading(false)
        }
    }

    const handleUnregister = async () => {
        setActionLoading(true)
        try {
            await workshopAPI.unregister(id)
            setIsRegistered(false)
            fetchWorkshop()
        } catch (error) {
            alert('Unregistration failed: ' + (error.response?.data?.detail || error.message))
        } finally {
            setActionLoading(false)
        }
    }

    if (loading) {
        return <div className="workshop-container"><p>Loading workshop...</p></div>
    }

    if (!workshop) {
        return <div className="workshop-container"><p>Workshop not found</p></div>
    }

    return (
        <div className="workshop-container">
            <button className="back-btn" onClick={() => navigate('/workshops')}>← Back</button>

            <div className="workshop-header-detail">
                <h1>{workshop.title}</h1>
                <span className={`status ${workshop.status}`}>{workshop.status}</span>
            </div>

            <div className="workshop-content">
                <div className="workshop-main">
                    <h2>Description</h2>
                    <p>{workshop.description}</p>

                    <h2>Details</h2>
                    <div className="details-grid">
                        <div className="detail-item">
                            <span className="detail-label">Date</span>
                            <span className="detail-value">{new Date(workshop.date).toLocaleDateString()}</span>
                        </div>
                        <div className="detail-item">
                            <span className="detail-label">Time</span>
                            <span className="detail-value">{workshop.time || 'N/A'}</span>
                        </div>
                        <div className="detail-item">
                            <span className="detail-label">Location</span>
                            <span className="detail-value">{workshop.location || 'N/A'}</span>
                        </div>
                        <div className="detail-item">
                            <span className="detail-label">Capacity</span>
                            <span className="detail-value">{workshop.capacity || 'N/A'}</span>
                        </div>
                        <div className="detail-item">
                            <span className="detail-label">Registered</span>
                            <span className="detail-value">{workshop.participants || 0}</span>
                        </div>
                        <div className="detail-item">
                            <span className="detail-label">Instructor</span>
                            <span className="detail-value">{workshop.instructor || 'N/A'}</span>
                        </div>
                    </div>
                </div>

                <div className="workshop-sidebar">
                    <div className="registration-card">
                        <h3>Registration</h3>
                        {isRegistered ? (
                            <>
                                <p className="registered-text">✓ You are registered</p>
                                <button
                                    className="btn-unregister"
                                    onClick={handleUnregister}
                                    disabled={actionLoading}
                                >
                                    {actionLoading ? 'Processing...' : 'Unregister'}
                                </button>
                            </>
                        ) : (
                            <>
                                <p className="not-registered-text">You are not registered yet</p>
                                <button
                                    className="btn-register"
                                    onClick={handleRegister}
                                    disabled={actionLoading}
                                >
                                    {actionLoading ? 'Processing...' : 'Register Now'}
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Workshop
