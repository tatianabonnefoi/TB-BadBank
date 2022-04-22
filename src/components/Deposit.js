import React, { useState }  from 'react'
import { Card, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router';
import {useAuth} from '../contexts/AuthContext'




export default function Deposit() {
    
    const navigate = useNavigate();
    const [deposit, setDeposit] = useState();
    const {setBalance, balance} =useAuth();
    const [historydeposit, setHystoryDeposit] = useState('');
    

    function handle(){
        console.log(deposit);
        setBalance(parseFloat(balance) + parseFloat(deposit));
        setHystoryDeposit(deposit);

        console.log(balance);
        
          return;      
    }


    return (
        <>
        <Card>
            <Card.Body>
            <h4>Deposit</h4> {"  "}
                
                    <br></br>

                    <h5>Deposit Amount</h5>
                    Amount<br/>
                        <input type="number" 
                        min="0"
                        className="form-control" 
                        placeholder="Enter amount" 
                        value={deposit} onChange={e => setDeposit(e.currentTarget.valueAsNumber)}/><br/>

                   
                    <div className="mt-2">
                    <Button type="primary"  onClick={handle} >Complete Deposit</Button>
                    </div>
   
                    <br></br>
                    <h6>Balance: ${balance} </h6>
                    <h6>Deposito: {historydeposit} </h6>

            </Card.Body>   
        </Card>


        <div className= "w-100 text-center mt-2">
        <Button variant="link" onClick={() => navigate('/dashboard')}>Need another transaction?</Button>
        </div>

    </>
        
    )
    
}

