import React, { useRef, useState } from 'react'
import { Alert, Button, Card, Form } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
import { Link } from 'react-router-dom'

const ForgetPassword = () => {
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage("Check your email for further instructions")
        } catch {
            setError("Failed to reset password")
        }

        setLoading(false)
    }


    return (
            <>
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Forget Password</h2>
                        {error && <Alert variant='danger'>{error}</Alert>}
                        {message && <Alert variant='success'>{message}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" ref={emailRef} required />
                            </Form.Group>
                            <Button disabled={loading} className='w-100 mt-3' type="submit">
                                Reset password
                            </Button>
                            <div className='w-100 text-center mt-3'>
                                <Link to="/login">Login</Link>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </>
    )
}

export default ForgetPassword