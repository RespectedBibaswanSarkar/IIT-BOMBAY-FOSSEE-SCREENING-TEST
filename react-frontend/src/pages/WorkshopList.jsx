import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { workshopAPI } from '../services/api'
import './WorkshopList.css'

function WorkshopList() {
    const [workshops, setWorkshops] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchWorkshops()
    }, [])

    const fetchWorkshops = async () => {
        try {
            const response = await workshopAPI.getAll()
            setWorkshops(response.data)
        } catch (error) {
            console.error('Failed to fetch workshops:', error)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return <div className="workshops-container"><p>Loading workshops...</p></div>
    }

    return (
        <div className="workshops-container">
            <div className="page-header">
                <h1>Available Workshops</h1>
                <p>Explore and register for workshops</p>
            </div>

            {workshops.length === 0 ? (
                <div className="no-workshops">No workshops available</div>
            ) : (
                <div className="workshops-grid">
                    {workshops.map((workshop) => (
                        <div key={workshop.id} className="workshop-card">
                            <div className="workshop-header">
                                <h3>{workshop.title}</h3>
                                <span className={`status ${workshop.status}`}>{workshop.status}</span>
                            </div>
                            <p className="workshop-description">{workshop.description?.substring(0, 100)}...</p>
                            <div className="workshop-details">
                                <div className="detail">
                                    <span className="label">Date:</span>
                                    <span className="value">{new Date(workshop.date).toLocaleDateString()}</span>
                                </div>
                                <div className="detail">
                                    <span className="label">Participants:</span>
                                    <span className="value">{workshop.participants || 0}</span>
                                </div>
                            </div>
                            <Link to={`/workshops/${workshop.id}`} className="btn-view">
                                View Details
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default WorkshopList
