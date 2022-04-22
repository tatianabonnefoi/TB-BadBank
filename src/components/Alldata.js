import React from 'react'
import { Card, Table } from 'react-bootstrap'
import {useAuth} from '../contexts/AuthContext'
import "./component.css";
import axios from 'axios';

export default function Alldata() {
    const {setBalance, balance, currentUser} =useAuth();

    
    
    

    function handleClick(){ 
        setBalance( balance)
        console.log(currentUser)

        axios.get(`http://localhost:4000/app/${currentUser.email}`)
        .then(response => {
       setBalance(parseFloat(response.data.balance))});

    }

    return (
        <Card>
            
            <Card.Body>
                    <h4 className="text-center mb-4" onClick={handleClick}>All Data</h4>
                    <h6>Current User: {currentUser.email}</h6>{  }
                    <h6>Balance: ${balance}</h6>
                    
                    <Table></Table>
               
                   
                    
                    

            </Card.Body>   
   

        </Card>
    )
    
}
