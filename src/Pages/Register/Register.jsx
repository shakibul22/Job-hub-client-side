import  { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { AuthContext } from '../Providers/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import swal from 'sweetalert';
const Register = () => {
  const { user, createUser, googleUser,  updateUserProfile } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";


  const handleCreateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password, photo);
  
    createUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        updateUserProfile(name, photo);
        navigate(from, { replace: true });
  
        form.reset();
  
        // Display success alert
        swal('Success', 'User created successfully!', 'success');
      })
      .catch((error) => {
        const errorMessage = error.message;
  
        // Display error alert
        swal('Error', errorMessage, 'error');
      });
  };
  


  const handleGoogle = () => {
    googleUser()
      .then(result => {
        const googleUsed = result.user;
  
        // Display success alert
        swal('Success', 'Google login successful!', 'success');
      })
      .catch(error => {
  
        // Display error alert
        swal('Error', 'Google login failed!', 'error');
      });
  };

  return (


  <div className=' flex justify-center items-center py-7 md:p-[80px]'>
    
      <form onSubmit={handleCreateUser} className="w-full md:w-[570px] mt-15 mb-10 p-10   rounded-lg">
      <h3 className='text-2xl font-bold mb-5'>Create an account</h3>
      <div className="form-control">

        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input onChange={(e) => setName(e.target.value)} type="text" name='name' placeholder="Name" className="input input-bordered w-full" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
      </div>
      
      <div className="form-control">
        <label className="label">
          <span className="label-text">PhotoURL</span>
        </label>
        <input type="text" name='photo' placeholder="PhotoURL" className="input input-bordered" />

      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input type="password" name='password' placeholder="password" className="input input-bordered" required />

      </div>
   

      <div className="form-control">
        <label className="flex gap-4 cursor-pointer mt-4">
          <input type="checkbox" className="checkbox" required />
          <span className="label-text">Accept terms & conditions</span>
        </label>
      </div>
      <div className="form-control mt-6 mb-3">
        <button type="submit" value="register" className="btn btn-warning">Create an account</button>
      </div>
      {error && <p className='text-center text-error mb-2'>{error}</p>}
      <p className='text-center'>Already have an account? <Link to='/login' className='text-warning underline'>Login</Link></p>
      <p className='text-center'>_____________or_______________</p>
      <div className=" social-button-container grid grid-rows-2 justify-items-center w-50 mt-3">
        <div onClick={handleGoogle} className="text-blue-600">
        <FaGoogle></FaGoogle>
        </div>
       
      </div>
    </form>
    
  </div>


  );
};

export default Register;