import React, {useContext, useState, useEffect} from 'react'
import {auth} from "../firebase"
const AuthContext= React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState()
    const [balance, setBalance]= useState(0)
    const [loading, setLoading] = useState(true)

    
    
    function logout(){
       return(
        auth.signOut()
       )}

    function login(email, password){
        
        return(
             auth.signInWithEmailAndPassword(email, password)
    )}

    function signup(email, password) {
        return(
                auth.createUserWithEmailAndPassword(email, password)     

        )}

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          setCurrentUser(user)
          setLoading(false)
        })

        return unsubscribe 
    }, [])

    
    const value = {
            currentUser,
            signup,
            login,
            logout,
            balance,
            setBalance
            
        }

    return (
        
            <AuthContext.Provider value ={value}>
                {!loading && children}
            </AuthContext.Provider>  
        
    )
}
