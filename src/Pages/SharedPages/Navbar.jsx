import { useContext } from 'react';
import { SiFacebook, SiIconfinder, SiWantedly } from 'react-icons/si';
import { CgAdd, CgLogOut, CgProfile } from 'react-icons/cg';

import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then()
            .catch((err) => {
                console.log(err);
            });
    };
    const navItems=<>
    <NavLink to='/'> <li className="mr-3  font-serif text-lg  ">Home</li></NavLink>
   <NavLink to='/about'> <li className="mr-3  font-serif text-lg ">About</li></NavLink>
   <NavLink to='/about'> <li className="mr-3  font-serif text-lg">Contact Us</li></NavLink>
    </>
    return (
        <div className="navbar fixed bg-slate-800 bg-opacity-50 z-30">
 
  <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                   {navItems}

                </ul>
            </div>
            <div className="navbar-start">
    <a className="btn btn-ghost normal-case text-xl"><SiIconfinder className='text-orange-400'></SiIconfinder>Job<span className='text-orange-500'>Hub</span> </a>
  </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {navItems}</ul>
            </div>
    
      <div className="navbar-end pr-2">
                {user ?
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                            <img className="mask mask-hexagon-2" src={user.photoURL} />
                               
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-300  text-black rounded-box w-52">
                            <li ><a><CgProfile/> {user.displayName}</a></li>
                            <li ><a><CgAdd/> Post a Job</a></li>
                            <li ><a><SiWantedly/> Want a Job</a></li>
                            <li ><a onClick={handleLogout}><CgLogOut/> Logout</a></li>
                        </ul>
                    </div> : <Link to='/login'> <button className="btn   text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">Login</button></Link>}

            </div>
  </div>

    );
};

export default Navbar;