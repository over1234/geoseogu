import React from 'react'
import '../CSS/Login.css'

export default function Login() {
  return (
    <div className='div--Login'>
      <form className='form--Login'>
        <h1 className='h1--Login'>Login</h1>
        <input type='text' name='id' placeholder='UserID' className='input' />
        <input type='password' name='pwd' placeholder='Password' className='input' />
        <input type='submit' name='submit' value='Submit' />
      </form>
    </div>
  )
}