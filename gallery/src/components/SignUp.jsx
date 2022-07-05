import React from "react";
import "../CSS/SignUp.css";
import axios from "axios";

export default function SignUp() {
  let name, password, id;

  function submit() {
    name = document.getElementsByClassName("input")[0].value;
    id = document.getElementsByClassName("input")[1].value;
    password = document.getElementsByClassName("input")[2].value;

    axios
      .post("http://localhost:8888/login/register", {
        username: "name",
        userid: "ID",
        password: "test",
      })
      .then((res) => {
        console.log(res);
      });
  }

  return (
    <div className="div--SignUp">
      <form className="form--SignUp" method="post" action="/register">
        <h1 className="h1--SignUp">Sign Up</h1>
        <input
          type="text"
          name="name"
          placeholder="Username"
          className="input"
        />
        <input type="text" name="id" placeholder="UserID" className="input" />
        <input
          type="password"
          name="pwd"
          placeholder="Password"
          className="input"
        />
        <button onClick={submit}>Submit</button>
      </form>
    </div>
  );
}
