import React from 'react'
import '../CSS/Nav.css'

export default function Nav() {
  return (
    <nav className='nav--Nav'>
      <img className='img--Nav' src='./images/logo.png' alt='logo'/>
      <h1 className='h1--Nav'>강서구</h1>
      <div className='category'>
        <div className='div--category--Nav'>맛집</div>
        <div className='div--category--Nav'>랜드마크</div>
      </div>
    </nav>
  )
}