import React, { useState } from 'react';
import './auth.css';
import {  Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../../Firebase';
import { toast } from 'react-toastify';

export default function SignIn() {
    const [ email, setEmail ] = useState('')
    const [ password , setPassword ] = useState('')

    const auth = getAuth(app)
    const navigate = useNavigate()

    const SignIn = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredentiel) => {
            const user = userCredentiel.user
            toast.success("User Signed in successfully!")
            navigate('/Dashbord')
            console.log(user)
        }).catch((error) => {
            toast.error('Something went Wrong !')
            console.error(error)
        })
    }
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Sign In</h2>
        <form className="auth-form" onSubmit={SignIn}>
          <input type="email" placeholder="Email" value={email} required onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" placeholder="Password" value={password} required onChange={(e) => setPassword(e.target.value)}/>
          <button type="submit">Sign In</button>
        </form>
        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </div>
    </div>
  );
}
