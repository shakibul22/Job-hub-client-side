
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import swal from 'sweetalert';
import { AuthContext } from '../Providers/AuthProvider';
import { FaGoogle } from 'react-icons/fa';




const Login = () => {
    const { user,signIn, googleUser } = useContext(AuthContext);
    const [error, setError] = useState('')
    const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

    const handleGoogle=()=>{
       googleUser()
       .then(result=>{
        const googleUsed=result.user;
        swal('Success', 'Google login successful!', 'success');

        navigate(from, { replace: true });
       })
       .catch(error => {
        swal('Error', 'Google login failed!', 'error');

    })
    }
 

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
      
        setError(null);
      
        signIn(email, password)
          .then((result) => {
            const createdUser = result.user;
            console.log(createdUser);
            form.reset();
      
            navigate(from, { replace: true });
      
            // Display success alert
            swal('Success', 'Login successful!', 'success');
          })
          .catch((error) => {
            setError(error.message);
            console.log(error);
      
            // Display error alert
            swal('Error', error.message, 'error');
          });
      };
      

   
    return (
       <div className='flex  justify-center items-center  '>
    

         <form onSubmit={handleLogin} className="w-full md:w-[570px] mt-15 mb-10 py-12 md:p-10   rounded-lg ">
            <h3 className='text-2xl font-bold mb-5'>Login</h3>
            <div className="form-control">
                <label  className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" name='email'  placeholder="email" className="input input-bordered" required />
            </div>
           
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                    <a href='#' className="underline text-error" >Forgot password?</a>
                </label>
            </div>
            <div className="form-control">
                <label className="flex gap-4 cursor-pointer mt-4">
                    <input type="checkbox" className="checkbox" />
                    <span className="label-text">Remember me</span>
                </label>
            </div>
            <div className="form-control mt-6 mb-3">
                <button className="btn btn-warning">Login</button>
            </div>
            {error && <p className='text-center text-error mb-2'>{error}</p>}
            <p className='text-center'>Don't have an account? <Link to='/register' className='text-warning underline'>Create an account</Link></p>
            <p className='text-center my-2'>_____________or_______________</p>
            <div className=" social-button-container grid grid-rows-2 justify-items-center w-50 ">
                <div onClick={handleGoogle} className="text-blue-400  rounded-full ">
                   <FaGoogle></FaGoogle>
                </div>
              
            </div>
        
        </form>
        
       </div>
    );
};

export default Login;