import React, { useState } from 'react'
import { Alert, Button } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
    const { currentUser, logout } = useAuth()
    const [error, setError] = useState('')
    const navigate = useNavigate

    async function handlelogout() {
        setError('')

        try {
            await logout()
            navigate("/")
        } catch (error) {
            setError("Failed to log out")
        }
    }

    return ( 
        <div>
            <h4>Current user : <strong>{currentUser.email}</strong></h4>
            {error && <Alert variant='danger'>{error}</Alert>}
            <Link to="/update-profile">Update profile</Link><br />
            <Button onClick={handlelogout}>Logout</Button>
        </div>
    )
}

export default Home