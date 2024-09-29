import React, { useState } from 'react';
import './auth.css';
import { Link, useNavigate } from 'react-router-dom';
import {app, Database} from '../../../Firebase'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import { doc, setDoc } from 'firebase/firestore';

export default function SignUp() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const navigate = useNavigate()

    const auth = getAuth(app)

    const signUp =  (e) => {
        e.preventDefault()
         createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user //user Details
                console.log("User Created :", user)
                setDoc(doc(Database , "User" , user.uid) , {
                    name: name,
                    email: email,
                    password: password
                })
                navigate("/Dashbord")
                toast.success("User created successfully!")
            }).catch((error) => {
                console.error("Error signing up:", error)
                toast.error("Error signing up: " + error.message)
            })
    }


    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2>Sign Up</h2>
                <form className="auth-form" onSubmit={signUp}>
                    <input type="text" placeholder="Full Name" value={name} required  onChange={(e) => setName(e.target.value)} />
                    <input type="email" placeholder="Email" value={email} required onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" value={password} required onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit" >Create Account</button>
                </form>
                <p>Already have an account? <Link to="/signin">Sign In</Link></p>
            </div>
            
        </div>
    );
}
