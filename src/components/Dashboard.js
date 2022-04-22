import React, {useState} from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import {useAuth} from '../contexts/AuthContext'
import { useNavigate} from 'react-router-dom';
import "./component.css";



export default function Dashboard() {
    const [error, setError] = useState("");
    const {currentUser, logout, balance} =useAuth();
    const history = useNavigate();
    const navigate = useNavigate();


    async function handleLogout(){
        setError('')
        try{
            await logout()
            history ('/login')
        }catch {
            setError('Failed to log out')
        }

    }

    

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className= "text-center mb-4">Bank Account Profile</h2>
                    {error && <Alert variant = "danger" >{error}</Alert>}
                    <strong className= "text-center">Email:</strong> {currentUser.email}{'  '}
                    
                    <strong className= "text-center">Balance:$ </strong> {balance}
                    <br></br>
                    <br></br>
                      
                        <div className= "text-center mb-4">
                        <Button variant="info" size="lg" onClick={() => navigate('/deposit')} >Deposit</Button> {'  '}
                    
                        <Button variant="info" size="lg" onClick={() => navigate('/withdrawal')}>Withdrawal</Button> {'  '}
                        
                       
                        
                        <Button variant="info" size="lg" onClick={() => navigate('/savings')}>Savings</Button>{'  '}
                        </div>
                        <br></br>
                  
                </Card.Body>
            </Card>
            <div className= "w-100 text-center mt-2">
                <Button variant="link" onClick={handleLogout}>Log Out</Button>
            </div>

        </>
    )
}
