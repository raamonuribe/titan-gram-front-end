import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
   const [formData, setFormData] = useState({
      username: '',
      password: ''
   });

   const { username, password } = formData;

   const onChange = (e) =>
      setFormData({ ...formData, [e.target.name]: e.target.value });

   const onSubmit = async (e) => {
      e.preventDefault();
      const userDetails = {
         username,
         password
      };

      try {
         const config = {
            headers: {
               'Content-Type': 'application/json'
            }
         };
         const body = JSON.stringify(userDetails);
         const res = await axios.post(
            'http://localhost:8080/api/v1/users/auth',
            body,
            config
         );
         console.log(res.headers);
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <Fragment>
         <h1 className='large text-primary'>Sign In</h1>
         <p className='lead'>
            <i className='fas fa-user'></i> Sign Into Your Account
         </p>
         <form className='form' onSubmit={(e) => onSubmit(e)}>
            <div className='form-group'>
               <input
                  type='text'
                  placeholder='Username'
                  value={username}
                  onChange={(e) => onChange(e)}
                  name='username'
                  required
               />
            </div>

            <div className='form-group'>
               <input
                  type='password'
                  value={password}
                  onChange={(e) => onChange(e)}
                  placeholder='Password'
                  name='password'
                  minLength='6'
               />
            </div>
            <input type='submit' className='btn btn-primary' value='Sign In' />
         </form>
         <p className='my-1'>
            Don't have an account? <Link to='/register'>Sign Up</Link>
         </p>
      </Fragment>
   );
};

export default Login;
