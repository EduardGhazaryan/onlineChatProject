import React from 'react'
import './signIn.css'
import img from '../../Images/8-01 1.png'
import Cookies from 'js-cookie'

const SignIn = () => {
  
  const goToGoogle =async ()=>{
    window.location.href = 'http://localhost:4001/auth/google'
  }
  // fetch('http://195.181.242.194:4001/profile')
  // .then(response => response.json())
  // .then(data => {
  //   console.log(data);
  // })
  // .catch(error => console.error('Error:', error));
  // const cook=Cookies.get(email)
  // console.log(cook);
  const goToFacebook = ()=>{
    window.location.href = "http://195.181.242.194:4001/auth/facebook"
  }
  
  return (
    <div className='signIn_main'>
        <div className="signIn_content">
            <div className="inner">
            <img src={img} alt="" />
            <h3>Sign in</h3>
            <h4>Welcome</h4>
            <p>Sign to your account</p>
            <div className="sign_with" onClick={goToGoogle}>Sign In With Google</div>
            <div className="sign_with" onClick={goToFacebook}>Sign In With Facebook</div>
            </div>
        </div>
    </div>
  )
  
}

export default SignIn