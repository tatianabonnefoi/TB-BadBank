import React from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import Signup from "./Signup";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import Home from "./Home";
import MyNavbar from "./NavBar/MyNavbar";
import Alldata from "./Alldata";
import Deposit from "./Deposit";
import Withdrawal from "./Withdrawal";
import Savings from "./Savings";



function App() {
  return(
  <Container
      className="d-flex align-items-center justify-content-center"
      style={{minHeight: "100vh"}}
  >
    <div className="w-100" style={{ maxWidth: "600px"}}>
      <Router>
      <MyNavbar />

        <AuthProvider>
          <Routes>
          <React.Fragment> 
            <Route exact path ="/" element={<Home />}/>
            
            <Route exact path='/dashboard' element={<PrivateRoute/>}>
            <Route exact path='/dashboard' element={<Dashboard/>}/>
            </Route>

            <Route  exact path ="/signup" element={<Signup />}/>
            <Route  exact path  ="/login" element={<Login />}/>
            <Route  path  ="/alldata" element={<Alldata />}/>
            <Route  path  ="/deposit" element={<Deposit />}/>
            <Route  path  ="/withdrawal" element={<Withdrawal />}/>
            <Route  path  ="/savings" element={<Savings />}/>
            
            
            </React.Fragment> 
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  </Container>
  )
};

export default App;
