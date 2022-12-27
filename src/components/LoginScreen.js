import React from 'react'
import "./LoginScreen.css"
import SignUpScreen from '../SignUpScreen';

export default function LoginScreen() {

  const [signIn, setSignIn] = React.useState(false);



  return (
    <div className='loginScreen'>
      <div className="loginScreen_background">
        <img
         className='loginScreen_logo'
         src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" />
         <button 
          onClick={() => setSignIn(true)}
          className='loginScreen_button'>
            Sign In
         </button>
         <div className='loginScreen_gradient'/>
      </div>
      <div className="loginScreen_body">
        { signIn ? (
          <SignUpScreen />
        ): (
          <>
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <div className="loginScreen_inputs">
             <form action="">
             <input type="email" placeholder='Email address'/>
                <button onClick={() => setSignIn(true)} className='loginScreen_getStarted'>
                    Get Started >
                </button>
             </form>
            </div>
        </>
        )}
        
      </div>
    </div>
  )
}
