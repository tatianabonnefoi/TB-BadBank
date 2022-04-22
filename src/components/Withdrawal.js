import React, {useState} from 'react'
import { Card, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router';
import {useAuth} from '../contexts/AuthContext'




export default function Withdrawal() {
    
    const navigate = useNavigate();
    const [withdrawal, setWithdrawal] = useState();
    const {setBalance, balance} =useAuth();

    function handle(){
        console.log(withdrawal);
       if(withdrawal>balance){
           alert("Not enough funds")
       }else{
        setBalance(parseFloat(balance) - parseFloat(withdrawal));
        console.log(balance);}

          return;    
        }
   
    
    return (
        <>
        <Card>
            <Card.Body>
            <h4>Withdrawal</h4> {"  "}
                    
                    <br></br>

                    <h5>Withdrawal Amount</h5>
                    Amount<br/>
                        <input type="number" 
                        min="0"
                        className="form-control" 
                        placeholder="Enter amount" 
                        value={withdrawal} onChange={e => setWithdrawal(e.currentTarget.valueAsNumber)}/><br/>

                   
                    <div className="mt-2">
                    <Button type="primary"  onClick={handle} >Complete Withdrawal</Button>
                    </div>
   
                    <br></br>
                    <h6>Balance: ${balance} </h6>

            </Card.Body>   
        </Card>


        <div className= "w-100 text-center mt-2">
        <Button variant="link" onClick={() => navigate('/dashboard')}>Need another transaction?</Button>
        </div>

    </>
        
    )
    
}

