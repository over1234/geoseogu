import React from 'react'
import '../CSS/Main.css'

export default function Main() {
  let images = ['./images/cat1.jpg', './images/cat2.jpg', './images/cat3.jpg', './images/cat4.jpg', './images/cat5.jpg', './images/cat6.jpg', './images/cat7.jpg']

  return (
    <main className='main--Main'>
      {images.map((values) => <img src={values} alt='cat' className='img--main--Main'/>)}
    </main>
  );
}