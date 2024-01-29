import React from 'react'
import './Signup.css'
export default function Signup() {
  return (
    <div class="sign-box">
    <h2>SignUp</h2>
    <form>
      <div class="user-box">
        <input type="text" name="" required=""/>
        <label>Username</label>
      </div>
      <div class="user-box">
        <input type="password" name="" required=""/>
        <label>Password</label>
      </div>
      <div class="user-box">
        <input type="password" name="" required=""/>
        <label>Confirm-Password</label>
      </div>
      <a href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        SignUp
      </a>
    </form>
    </div>

  )
}
