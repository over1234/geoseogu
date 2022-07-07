import React from 'react'
import '../CSS/Login.css'
import axios from "axios";
import { useNavigate } from 'react-router-dom'

export default function Login() {

  const navigate = useNavigate();

  const [file, setFile] = React.useState(null);

  const handleChangeFile  = (event) => {
    setFile(event.target.files);
  } 

  const submit = async (event) => {
    event.preventDefault();
    const uploadFile = file
    console.log(uploadFile)
    const formData = new FormData()
    formData.append('imageFile', uploadFile)
    const response = await axios.post("http://localhost:8080/image/upload", formData);
    console.log(response.data);
    navigate("/");
  }

  return (
    <div className='div--Login'>
      <form className='form--Login' method="post" onSubmit={submit}>
        <input type="file" id="file-input" name="imageFile" onChange={handleChangeFile} />
        <input type='submit' name='submit' value='Submit' />
      </form>
    </div>
  )
}