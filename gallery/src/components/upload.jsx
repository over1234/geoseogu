import React from 'react'
import '../CSS/Login.css'
import axios from "axios";
import { useNavigate } from 'react-router-dom'

export default function Login() {

  const navigate = useNavigate();

  const submit = async (event) => {
    event.preventDefault();
    const upload = document.getElementById("file-input").files[0]
    const formData = new FormData()
    formData.append('imageFile', upload)
    await axios({
      url: 'http://localhost:8080/image/upload',
      method: 'POST',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
    navigate("/");
  }

  return (
    <div className='div--Login'>
      <form className='form--Login' method="post" enctype="multipary/form-data">
        <input type="file" id="file-input" name="imageFile" />
        <input type='submit' name='submit' value='Submit' onClick={submit}/>
      </form>
    </div>
  )
}