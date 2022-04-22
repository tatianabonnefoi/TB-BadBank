import React from 'react'
import BankImage from '../images/bank.png';
import { Card } from 'react-bootstrap';


export default function Home() {
    return (
        <Card>
            
            <Card.Body>
                    <h2 className="text-center mb-4">Welcome to Safe Bank</h2>
            </Card.Body>   

             <Card.Img variant="bottom" src={BankImage} className="img-fluid" alt="Responsive image" />     

        </Card>
    )
}
