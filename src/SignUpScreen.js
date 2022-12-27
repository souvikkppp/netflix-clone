import React, { useRef } from 'react'
import { auth } from './firebase';
import "./components/SignUpScreen.css"

export default function SignUpScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then(
      (authUser) => {console.log(authUser);
      }).catch(error => {
      alert(error.massage);
    })//create account in firebase database
  }

  const signIn = (e) => {
    e.preventDefault(); //this will prevent the default// behavior of html form that is refrish 
    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then(
      (authUser) => {console.log(authUser);
      }).catch((error) => {
      alert(error.massage);
    })
  } 
  return (
    <div className='signupScreen'>
      <form>
        <h1>Sign In</h1>
        <input type="email" ref={emailRef} placeholder='Email' />
        <input type="password" ref={passwordRef}  placeholder='password' />
        <button type='submit' onClick={signIn}>Sign In</button>

        <h4><span className='signupScreen_gray'>New to Netflix?</span> 
         <span className='signupScreen_link' onClick={register}>sign up now.</span></h4>
      </form>

    </div>
  )
}
