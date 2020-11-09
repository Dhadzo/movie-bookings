import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signInSuccess, signInToken } from "../redux/user/user.actions";
import './register.scss';

interface IFormInput {
  firstName: string;
  lastName: string;
  password: string;
}

const Register = () =>  {
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit = (data: IFormInput) => {
    fetch('/api/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      if(data.error){
        alert(data.error)
      }else{
        dispatch(signInSuccess(data.user))
        dispatch(signInToken(data.token));
        history.push('/home')
      }
    })
  }
  return (
    <div className="formDiv">
      <h1>Create an account</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="username" placeholder="Username" autoComplete='off' ref={register({ required: true, maxLength: 20 })} />
        <input name="password" placeholder="Password"  type="password" ref={register({ required:true, min: 18, max: 99 })} />
        <button className="submit">Register</button>
      </form>
    </div>
  );
}
export default Register;