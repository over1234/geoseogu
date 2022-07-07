import React from 'react'
import Main from './components/Main'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Upload from './components/upload'
import { Route, Routes } from 'react-router-dom'
import './CSS/App.css'

export default function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/home' element={<Main />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/add' element={<Upload />} />
      </Routes>
    </div>
  );
}