import React, {useState} from 'react'
import { Card, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router';
import {useAuth} from '../contexts/AuthContext'




export default function Savings() {
    
    const navigate = useNavigate();
    const [savings, setSavings] = useState();
    const {setBalance, balance} =useAuth();
    

    function handle(){
        console.log(savings);
        setBalance(parseFloat(balance) + 1.15 * parseFloat(savings));
        console.log(balance);

          return;      
        }
   
    
    return (
        <>
        <Card>
            <Card.Body>
            <h4>Investment</h4> {"  "}
                    
                    <br></br>

                    <h5>Investment Amount</h5>
                    Amount<br/>
                        <input type="number" 
                        min="0"
                        className="form-control" 
                        placeholder="Enter amount" 
                        value={savings} onChange={e => setSavings(e.currentTarget.valueAsNumber)}/><br/>

                   
                    <div className="mt-2">
                    <Button type="primary"  onClick={handle} >Complete Investment</Button>
                    </div>
   
                    <br></br>
                    <h6>Balance : $ {balance} </h6>
                    <h6>Today's Interest Rate : 1.15% </h6>


            </Card.Body>   
        </Card>


        <div className= "w-100 text-center mt-2">
        <Button variant="link" onClick={() => navigate('/dashboard')}>Need another transaction?</Button>
        </div>

    </>
        
    )
    
}

