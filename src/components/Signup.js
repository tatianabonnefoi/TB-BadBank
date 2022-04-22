import React , {useRef, useState, }from 'react';
import {Form, Button, Card, Alert} from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function Signup() {
    
    const fullNameRef = useRef();
    const initialBalance= useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const {signup, setBalance} = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useNavigate();

    
    
    
    
    async function handleSubmit(e){
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match');
          }
        try{  
            setError('');
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value)
            console.log(emailRef,passwordRef);
            
            const registered ={
                fullName: fullNameRef.current.value,
                username: "this.state.username",
                email: emailRef.current.value,
                password: passwordRef.current.value,
                balance: initialBalance.current.value,
            }
            axios.post("http://localhost:4000/app/signup", registered);
            setBalance(parseFloat(initialBalance.current.value))
            
            history('/dashboard')
        } catch {
            setError("Failed to create an account");
        }

        setLoading(false);

    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    
                    {error && <Alert variant = "danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                    <Form.Group id="fullName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="fullName" ref={fullNameRef} required />
                        </Form.Group>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required />
                        </Form.Group>
                        <Form.Group id="initialBalance">
                            <Form.Label>Initial Deposit</Form.Label>
                            <Form.Control type="number" min="0" ref={initialBalance} required />
                        </Form.Group>
                        <br></br>
                        <Button disabled={loading} className="w-100" type="submit">
                            Sign Up
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? <Link to="/login">Log In</Link>
            </div>
        </>
    )
}

